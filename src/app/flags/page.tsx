"use client";

import { useState } from 'react';
import { FlaskConical, AlertTriangle, RotateCcw, Save } from 'lucide-react';
import Button from '@/components/ui/Button';
import styles from './Flags.module.css';

interface Flag {
    id: string;
    name: string;
    description: string;
    status: 'Beta' | 'Experimental';
    category: 'UI' | 'Features' | 'Core';
    enabled: boolean;
}

const initialFlags: Flag[] = [
    {
        id: "ai-assistant",
        name: "AI Learning Assistant",
        description: "Enable the context-aware chat widget to help you with coding problems.",
        status: "Beta",
        category: "Features",
        enabled: false
    },
    {
        id: "glassmorphism-v2",
        name: "Glassmorphism V2",
        description: "Apply experimental blur and depth effects to all UI cards.",
        status: "Experimental",
        category: "UI",
        enabled: true
    },
    {
        id: "live-collab",
        name: "Live Collaboration",
        description: "Real-time pair programming sessions with other users.",
        status: "Beta",
        category: "Features",
        enabled: false
    },
    {
        id: "neural-search",
        name: "Neural Search",
        description: "Use vector embeddings for semantic search results.",
        status: "Experimental",
        category: "Core",
        enabled: false
    },
    {
        id: "particle-bg",
        name: "Particle Backgrounds",
        description: "Enable WebGL-based interactive particle systems.",
        status: "UI",
        category: "UI",
        enabled: true
    }
] as Flag[];

export default function FlagsPage() {
    const [flags, setFlags] = useState<Flag[]>(initialFlags);

    const toggleFlag = (id: string) => {
        setFlags(prev => prev.map(flag =>
            flag.id === id ? { ...flag, enabled: !flag.enabled } : flag
        ));
    };

    const resetFlags = () => {
        setFlags(initialFlags.map(f => ({ ...f, enabled: false })));
    };

    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.header}>
                    <h1 className={styles.title}>Feature Flags</h1>
                    <p className={styles.subtitle}>
                        Enable experimental features and help us test the future of DevPath.
                    </p>
                </div>

                <div className={styles.warningBanner}>
                    <AlertTriangle size={24} />
                    <span>
                        <strong>Warning:</strong> These features are experimental and may be unstable.
                        They might change or break without notice.
                    </span>
                </div>

                {['UI', 'Features', 'Core'].map(category => (
                    <div key={category} className={styles.section}>
                        <h2 className={styles.sectionTitle}>
                            {category === 'UI' && <FlaskConical size={24} />}
                            {category} Enhancements
                        </h2>
                        <div className={styles.grid}>
                            {flags.filter(f => f.category === category).map(flag => (
                                <div key={flag.id} className={styles.card}>
                                    <div className={styles.flagInfo}>
                                        <div className={styles.flagName}>
                                            {flag.name}
                                            <span className={`${styles.badge} ${styles[flag.status.toLowerCase()]}`}>
                                                {flag.status}
                                            </span>
                                        </div>
                                        <p className={styles.flagDesc}>{flag.description}</p>
                                    </div>
                                    <label className={styles.switch}>
                                        <input
                                            type="checkbox"
                                            checked={flag.enabled}
                                            onChange={() => toggleFlag(flag.id)}
                                        />
                                        <span className={styles.slider}></span>
                                    </label>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}

                <div className={styles.actions}>
                    <Button variant="ghost" icon={<RotateCcw size={18} />} onClick={resetFlags}>
                        Reset All
                    </Button>
                    <Button variant="primary" icon={<Save size={18} />}>
                        Save Changes
                    </Button>
                </div>
            </div>
        </div>
    );
}
