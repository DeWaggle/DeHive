import React from 'react';
import BiddableAuctionTable from './BiddableAuctionTable';
import Modal from 'react-modal';
import './BiddableAuctionsTab.css';
import Auction from '../models/auction';

const BiddableAuctionTab = () => {
    const [isPopupOpen, setIsPopupOpen] = React.useState(false);
    const [currentPrice, setCurrentPrice] = React.useState('');
    const [newPrice, setNewPrice] = React.useState('');

    const openPopup = () => {
        setIsPopupOpen(true);
    };

    const closePopup = () => {
        setCurrentPrice('');
        setNewPrice('');

        setIsPopupOpen(false);
    };

    const confirm = () => {
        //Add smart contract call here

        closePopup();
    };

    let auctions = [
        new Auction(100, '2022-12-31', '2023-01-15', 'Auction 1'),
        new Auction(200, '2022-12-31', '2023-01-15', 'Auction 2'),
        new Auction(300, '2022-12-31', '2023-01-15', 'Auction 3'),
        new Auction(400, '2022-12-31', '2023-01-15', 'Auction 4'),
        new Auction(500, '2022-12-31', '2023-01-15', 'Auction 5')
    ];

    return (
        <div>
            <BiddableAuctionTable onBid={openPopup} auctions={auctions} />
            <Modal isOpen={isPopupOpen} onRequestClose={closePopup} className="popup">
                <h1>Bid on Auction</h1>
                <div>
                    <label htmlFor="currentPrice">Current Price:</label>
                    <input type="text" id="currentPrice" value={currentPrice} readOnly />

                    <br />

                    <label htmlFor="newPrice">New Price:</label>
                    <input type="number" id="newPrice" value={newPrice} onChange={(e) => setNewPrice(e.target.value)} />

                </div>
                <button onClick={closePopup}>Close</button>
                <button onClick={confirm}>Confirm</button>
            </Modal>
        </div>
    );
};

export default BiddableAuctionTab;