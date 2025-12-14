"use client";

import { Github, Star, GitFork, CircleDot, ExternalLink, Copy, Code, FileText, Smartphone } from 'lucide-react';
import Button from '@/components/ui/Button';
import styles from './SourceCode.module.css';

export default function SourceCodePage() {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.hero}>
                    <Github size={80} className={styles.heroIcon} />
                    <h1 className={styles.title}>DevPath is Open Source</h1>
                    <p className={styles.subtitle}>
                        Built in public. Contribute, learn from the code, and help shape the future of developer education.
                    </p>

                    <div className={styles.stats}>
                        <div className={styles.statItem}>
                            <Star size={16} color="#e3b341" fill="#e3b341" />
                            <span className={styles.statValue}>2.4k</span>
                            <span className={styles.statLabel}>Stars</span>
                        </div>
                        <div className={styles.statItem}>
                            <GitFork size={16} />
                            <span className={styles.statValue}>480</span>
                            <span className={styles.statLabel}>Forks</span>
                        </div>
                        <div className={styles.statItem}>
                            <CircleDot size={16} color="#10b981" />
                            <span className={styles.statValue}>12</span>
                            <span className={styles.statLabel}>Issues</span>
                        </div>
                    </div>
                </div>

                <div className={styles.repoGrid}>
                    <div className={styles.repoCard}>
                        <div className={styles.repoHeader}>
                            <div className={styles.repoIcon}>
                                <Code size={24} />
                            </div>
                            <ExternalLink size={20} className="text-gray-500" />
                        </div>
                        <h3 className={styles.repoTitle}>devpath-web</h3>
                        <p className={styles.repoDesc}>
                            The main Next.js web application repository. Contains the frontend, authentication logic, and UI components.
                        </p>
                        <div className={styles.repoMeta}>
                            <span className={styles.badge}>TypeScript</span>
                            <span className={styles.badge} style={{ background: 'rgba(16, 185, 129, 0.1)', color: '#10b981' }}>MIT License</span>
                        </div>
                        <Button variant="primary" className="w-full">View Repository</Button>
                    </div>

                    <div className={styles.repoCard}>
                        <div className={styles.repoHeader}>
                            <div className={styles.repoIcon}>
                                <FileText size={24} />
                            </div>
                            <ExternalLink size={20} className="text-gray-500" />
                        </div>
                        <h3 className={styles.repoTitle}>devpath-docs</h3>
                        <p className={styles.repoDesc}>
                            Documentation, guides, and learning path curriculum content.
                        </p>
                        <div className={styles.repoMeta}>
                            <span className={styles.badge}>Markdown</span>
                            <span className={styles.badge} style={{ background: 'rgba(16, 185, 129, 0.1)', color: '#10b981' }}>CC-BY-4.0</span>
                        </div>
                        <Button variant="secondary" className="w-full">View Docs</Button>
                    </div>

                    <div className={styles.repoCard} style={{ opacity: 0.7 }}>
                        <div className={styles.repoHeader}>
                            <div className={styles.repoIcon}>
                                <Smartphone size={24} />
                            </div>
                            <span className={styles.badge} style={{ background: 'rgba(236, 72, 153, 0.1)', color: '#ec4899' }}>Coming Soon</span>
                        </div>
                        <h3 className={styles.repoTitle}>devpath-mobile</h3>
                        <p className={styles.repoDesc}>
                            React Native mobile application for iOS and Android. Currently in private alpha.
                        </p>
                        <div className={styles.repoMeta}>
                            <span className={styles.badge}>React Native</span>
                        </div>
                        <Button variant="ghost" className="w-full" disabled>Private Repo</Button>
                    </div>
                </div>

                <div className={styles.quickStart}>
                    <h2 className={styles.sectionTitle}>Quick Start for Contributors</h2>
                    <div className={styles.steps}>
                        <div className={styles.step}>
                            <div className={styles.stepNumber}>1</div>
                            <div className={styles.stepTitle}>Fork</div>
                            <p className={styles.stepDesc}>Fork the repo to your account</p>
                        </div>
                        <div className={styles.step}>
                            <div className={styles.stepNumber}>2</div>
                            <div className={styles.stepTitle}>Clone</div>
                            <p className={styles.stepDesc}>Clone to local machine</p>
                        </div>
                        <div className={styles.step}>
                            <div className={styles.stepNumber}>3</div>
                            <div className={styles.stepTitle}>Branch</div>
                            <p className={styles.stepDesc}>Create feature branch</p>
                        </div>
                        <div className={styles.step}>
                            <div className={styles.stepNumber}>4</div>
                            <div className={styles.stepTitle}>PR</div>
                            <p className={styles.stepDesc}>Submit Pull Request</p>
                        </div>
                    </div>

                    <div className={styles.codeSnippet}>
                        <code className={styles.code}>git clone https://github.com/schrodingerspet/DevPath.git</code>
                        <button className={styles.copyButton}>
                            <Copy size={14} /> Copy
                        </button>
                    </div>
                </div>

                <div className={styles.techStack}>
                    <h2 className={styles.sectionTitle}>Built With</h2>
                    <div className={styles.techGrid}>
                        <div className={styles.techItem}>Next.js 14</div>
                        <div className={styles.techItem}>TypeScript</div>
                        <div className={styles.techItem}>CSS Modules</div>
                        <div className={styles.techItem}>Lucide Icons</div>
                        <div className={styles.techItem}>Vercel</div>
                    </div>
                </div>
            </div>
        </div>
    );
}
