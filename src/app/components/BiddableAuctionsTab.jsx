import React from 'react';
import BiddableAuctionTable from './BiddableAuctionTable';
import Modal from 'react-modal';
import './BiddableAuctionsTab.css';
import Auction from '../models/auction';
import LLMModels from '../models/llms';

const BiddableAuctionTab = () => {
    const [isPopupOpen, setIsPopupOpen] = React.useState(false);
    const [currentPrice, setCurrentPrice] = React.useState('');
    const [newPrice, setNewPrice] = React.useState('');
    const [currentAuction, setCurrentAuction] = React.useState('');

    const [displayedAuctions, setAuctions] = React.useState([
        new Auction(100, '2022-12-31', '2023-01-15', 'Auction 1', LLMModels.GPT_4),
        new Auction(200, '2022-12-31', '2023-01-15', 'Auction 2', LLMModels.MIDJOURNEY),
        new Auction(300, '2022-12-31', '2023-01-15', 'Auction 3', LLMModels.GPT_4),
        new Auction(400, '2022-12-31', '2023-01-15', 'Auction 4', LLMModels.MIDJOURNEY),
        new Auction(500, '2022-12-31', '2023-01-15', 'Auction 5', LLMModels.GPT_4)
    ]);    

    const openPopup = (auction) => {
        setCurrentAuction(auction);
        setCurrentPrice(auction.price);
        
        setIsPopupOpen(true);
    };

    const closePopup = () => {
        setCurrentPrice('');
        setNewPrice('');
        setCurrentAuction('');

        setIsPopupOpen(false);
    };

    const confirm = () => {
        if (newPrice < currentPrice) {
            // Add smart contract call here

            // Change current price to new price
            const updatedAuctions = displayedAuctions.map(auction => {
                if (auction === currentAuction) {
                    return { ...displayedAuctions, price: newPrice };
                }
                return auction;
            });
            setAuctions(updatedAuctions);

            closePopup();
        } else {
            // Display an error message or handle the invalid input
            alert('New price must be lower than current price');
        }
    };

    return (
        <div>
            <BiddableAuctionTable onBid={openPopup} auctions={displayedAuctions} />
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