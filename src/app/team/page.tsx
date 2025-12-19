'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { teamMembers } from '@/data/team';
import styles from './team.module.css';

export default function TeamPage() {
    const sectionRef = useRef<HTMLElement>(null);
    const imagesContainerRef = useRef<HTMLDivElement>(null);
    const imagesRef = useRef<(HTMLDivElement | null)[]>([]);
    const namesContainerRef = useRef<HTMLDivElement>(null);
    const cleanupRef = useRef<(() => void)[]>([]);
    const [mounted, setMounted] = useState(false);
    const [activeIndex, setActiveIndex] = useState<number | null>(null);
    const isMobileRef = useRef(false);

    useEffect(() => {
        setMounted(true);

        const checkMobile = () => {
            isMobileRef.current = window.innerWidth < 900;
        };

        checkMobile();
        window.addEventListener('resize', checkMobile);

        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    useEffect(() => {
        if (!mounted) return;

        const namesContainer = namesContainerRef.current;
        const imagesContainer = imagesContainerRef.current;
        if (!namesContainer || !imagesContainer) return;

        const nameElements = namesContainer.querySelectorAll<HTMLDivElement>(`.${styles.name}`);
        const nameHeadings = namesContainer.querySelectorAll<HTMLHeadingElement>(`.${styles.name} h1`);

        // Split text into individual letter spans
        nameHeadings.forEach((heading) => {
            const text = heading.textContent || '';
            heading.innerHTML = '';

            for (const char of text) {
                const span = document.createElement('span');
                span.className = styles.letter;
                span.textContent = char === ' ' ? '\u00A0' : char;
                heading.appendChild(span);
            }
        });

        // Get default letters (first name element = "The Squad")
        const defaultLetters = nameElements[0]?.querySelectorAll<HTMLSpanElement>(`.${styles.letter}`);
        if (defaultLetters) {
            gsap.set(defaultLetters, { y: '100%' });
        }

        const images = imagesRef.current;

        // Animation functions
        const showName = (index: number) => {
            const img = images[index];
            const correspondingName = nameElements[index + 1];
            if (!img || !correspondingName) return;

            const letters = correspondingName.querySelectorAll<HTMLSpanElement>(`.${styles.letter}`);

            gsap.to(img, { width: 140, height: 140, duration: 0.5, ease: 'power4.out' });
            gsap.to(letters, {
                y: '-100%',
                ease: 'power4.out',
                duration: 0.75,
                stagger: { each: 0.025, from: 'center' }
            });
        };

        const hideName = (index: number) => {
            const img = images[index];
            const correspondingName = nameElements[index + 1];
            if (!img || !correspondingName) return;

            const letters = correspondingName.querySelectorAll<HTMLSpanElement>(`.${styles.letter}`);

            gsap.to(img, { width: 70, height: 70, duration: 0.5, ease: 'power4.out' });
            gsap.to(letters, {
                y: '0%',
                ease: 'power4.out',
                duration: 0.75,
                stagger: { each: 0.025, from: 'center' }
            });
        };

        const showDefaultText = () => {
            if (defaultLetters) {
                gsap.to(defaultLetters, {
                    y: '0%',
                    ease: 'power4.out',
                    duration: 0.75,
                    stagger: { each: 0.025, from: 'center' }
                });
            }
        };

        const hideDefaultText = () => {
            if (defaultLetters) {
                gsap.to(defaultLetters, {
                    y: '100%',
                    ease: 'power4.out',
                    duration: 0.75,
                    stagger: { each: 0.025, from: 'center' }
                });
            }
        };

        // Set up event handlers
        images.forEach((img, index) => {
            if (!img) return;

            if (isMobileRef.current) {
                // MOBILE: Click/Tap to toggle animation
                const handleClick = () => {
                    setActiveIndex(prev => {
                        if (prev === index) {
                            // Same image tapped again - hide
                            hideName(index);
                            return null;
                        } else {
                            // Different image or first tap
                            if (prev !== null) {
                                hideName(prev); // Hide previous
                            }
                            showName(index);
                            return index;
                        }
                    });
                };

                img.addEventListener('click', handleClick);
                cleanupRef.current.push(() => img.removeEventListener('click', handleClick));
            } else {
                // DESKTOP: Hover animations
                const handleMouseEnter = () => showName(index);
                const handleMouseLeave = () => hideName(index);

                img.addEventListener('mouseenter', handleMouseEnter);
                img.addEventListener('mouseleave', handleMouseLeave);

                cleanupRef.current.push(() => {
                    img.removeEventListener('mouseenter', handleMouseEnter);
                    img.removeEventListener('mouseleave', handleMouseLeave);
                });
            }
        });

        // Container hover for default text (desktop only)
        if (!isMobileRef.current) {
            imagesContainer.addEventListener('mouseenter', showDefaultText);
            imagesContainer.addEventListener('mouseleave', hideDefaultText);

            cleanupRef.current.push(() => {
                imagesContainer.removeEventListener('mouseenter', showDefaultText);
                imagesContainer.removeEventListener('mouseleave', hideDefaultText);
            });
        } else {
            // On mobile, show default text initially
            showDefaultText();
        }

        return () => {
            cleanupRef.current.forEach(fn => fn());
            cleanupRef.current = [];
        };
    }, [mounted]);

    if (!mounted) {
        return (
            <section className={styles.team}>
                <div className={styles.loading}>Loading...</div>
            </section>
        );
    }

    return (
        <section ref={sectionRef} className={styles.team}>
            {/* Profile Images */}
            <div ref={imagesContainerRef} className={styles.profileImages}>
                {teamMembers.map((member, index) => (
                    <div
                        key={member.id}
                        ref={(el) => { imagesRef.current[index] = el; }}
                        className={`${styles.img} ${activeIndex === index ? styles.active : ''}`}
                    >
                        <Image
                            src={member.image}
                            alt={member.name}
                            width={100}
                            height={100}
                            className={styles.imgInner}
                            priority={index < 5}
                        />
                    </div>
                ))}
            </div>

            {/* Profile Names with GSAP Animation */}
            <div ref={namesContainerRef} className={styles.profileNames}>
                <div className={`${styles.name} ${styles.default}`}>
                    <h1>The Squad</h1>
                </div>
                {teamMembers.map((member) => (
                    <div key={`name-${member.id}`} className={styles.name}>
                        <h1>{member.name}</h1>
                    </div>
                ))}
            </div>
        </section>
    );
}
