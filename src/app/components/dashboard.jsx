'use client';

import React, { useState } from 'react';
import styles from "./dashboard.css";
import AuctionTable from "./AuctionTable";
import MyAuctionsTable from './MyAuctionsTable';

const Dashboard = () => {
    const [selectedChapter, setSelectedChapter] = useState(1);

    const handleChapterClick = (chapter) => {
        setSelectedChapter(chapter);
    };

    return (
        <div className={styles.dashboard}>
            <div className={styles.sidebar}>
                <button onClick={() => handleChapterClick(1)}>Biddable Auctions</button>
                <br />
                <button onClick={() => handleChapterClick(2)}>My auctions</button>
            </div>
            <div className={styles.content}>
                {selectedChapter === 1 && <AuctionTable />}
                {selectedChapter === 2 && <MyAuctionsTable />}
            </div>
        </div>
    );
};

export default Dashboard;