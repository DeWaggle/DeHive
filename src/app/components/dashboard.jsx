'use client';

import React, { useState } from 'react';
import styles from "./dashboard.css";
import MyAuctionsTab from './MyAuctionsTab';
import BiddableAuctionTab from './BiddableAuctionsTab';

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
                {selectedChapter === 1 && <BiddableAuctionTab />}
                {selectedChapter === 2 && <MyAuctionsTab />}
            </div>
        </div>
    );
};

export default Dashboard;