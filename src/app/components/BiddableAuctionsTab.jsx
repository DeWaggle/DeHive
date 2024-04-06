import React from 'react';
import BiddableAuctionTable from './BiddableAuctionTable';
import Modal from 'react-modal';

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

    return (
        <div >
            <BiddableAuctionTable onBid={openPopup} />
            <Modal isOpen={isPopupOpen} onRequestClose={closePopup}>
                <h1>Bid on Auction</h1>
                <div>
                    <label htmlFor="currentPrice">Current Price:</label>
                    <input type="text" id="currentPrice" value={currentPrice} readOnly />

                    <br />

                    <label htmlFor="newPrice">New Price:</label>
                    <input type="text" id="newPrice" value={newPrice} onChange={(e) => setNewPrice(e.target.value)} />

                </div>
                <button onClick={closePopup}>Close</button>
                <button onClick={confirm}>Confirm</button>
            </Modal>
        </div>
    );
};

export default BiddableAuctionTab;