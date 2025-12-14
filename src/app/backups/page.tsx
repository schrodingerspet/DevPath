"use client";

import { useState } from 'react';
import { Cloud, Search, Filter, MoreVertical, Download, RefreshCw, Trash2, FileCode, Folder, Database } from 'lucide-react';
import Button from '@/components/ui/Button';
import styles from './Backups.module.css';

const backups = [
    { id: 1, name: "Portfolio Project v2", type: "Project", size: "124 MB", date: "2 hours ago", icon: <Folder size={24} /> },
    { id: 2, name: "React Course Progress", type: "Progress", size: "45 KB", date: "Yesterday", icon: <Database size={24} /> },
    { id: 3, name: "Algorithm Snippets", type: "Playground", size: "12 KB", date: "Dec 12, 2025", icon: <FileCode size={24} /> },
    { id: 4, name: "DevOps Configs", type: "Project", size: "2.4 MB", date: "Dec 10, 2025", icon: <Folder size={24} /> },
    { id: 5, name: "Theme Settings", type: "Settings", size: "2 KB", date: "Dec 08, 2025", icon: <Database size={24} /> },
];

export default function BackupsPage() {
    const [activeTab, setActiveTab] = useState("All");
    const [searchQuery, setSearchQuery] = useState("");

    const filteredBackups = backups.filter(backup =>
        (activeTab === "All" || backup.type === activeTab) &&
        backup.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <div className={styles.titleSection}>
                    <h1>
                        <Cloud size={32} color="#00d4ff" />
                        Your Backups
                    </h1>
                    <div className={styles.syncStatus}>
                        <div className={styles.syncDot} />
                        All synced
                    </div>
                </div>
                <Button variant="primary" icon={<Cloud size={18} />}>
                    Create Manual Backup
                </Button>
            </div>

            <div className={styles.controls}>
                <div className={styles.tabs}>
                    {["All", "Project", "Progress", "Settings"].map(tab => (
                        <div
                            key={tab}
                            className={`${styles.tab} ${activeTab === tab ? styles.active : ''}`}
                            onClick={() => setActiveTab(tab)}
                        >
                            {tab}
                        </div>
                    ))}
                </div>

                <div className={styles.filters}>
                    <div className={styles.searchWrapper}>
                        <Search className={styles.searchIcon} size={16} />
                        <input
                            type="text"
                            placeholder="Search backups..."
                            className={styles.searchInput}
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </div>
                    <Button variant="ghost" icon={<Filter size={18} />}>Filter</Button>
                </div>
            </div>

            <div className={styles.grid}>
                {filteredBackups.length > 0 ? (
                    filteredBackups.map(backup => (
                        <div key={backup.id} className={styles.card}>
                            <div className={styles.cardHeader}>
                                <div className={styles.iconWrapper}>
                                    {backup.icon}
                                </div>
                                <MoreVertical className={styles.moreButton} size={20} />
                            </div>

                            <h3 className={styles.cardTitle}>{backup.name}</h3>

                            <div className={styles.cardMeta}>
                                <span>{backup.size}</span>
                                <span>•</span>
                                <span>{backup.date}</span>
                            </div>

                            <div className={styles.cardActions}>
                                <Button variant="secondary" className="!p-2 flex-1" icon={<Download size={16} />}>
                                    Download
                                </Button>
                                <Button variant="ghost" className="!p-2" icon={<RefreshCw size={16} />} />
                                <Button variant="ghost" className="!p-2 !text-red-400 hover:!bg-red-500/10" icon={<Trash2 size={16} />} />
                            </div>
                        </div>
                    ))
                ) : (
                    <div className={styles.emptyState}>
                        <Cloud size={48} style={{ margin: '0 auto 16px', opacity: 0.5 }} />
                        <h3>No backups found</h3>
                        <p>Try adjusting your filters or search query</p>
                    </div>
                )}
            </div>
        </div>
    );
}
