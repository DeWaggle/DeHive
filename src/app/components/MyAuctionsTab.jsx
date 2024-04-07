import React from 'react';
import MyAuctionsTable from './MyAuctionsTable';
import './MyAuctionsTab.css';
import Modal from 'react-modal';
import Auction from '../models/auction'; // Import the Auction class from the correct file

const MyAuctionsTab = () => {
    const [isPopupOpen, setIsPopupOpen] = React.useState(false);
    const [prompt, setPrompt] = React.useState('');
    const [maxPrice, setMaxPrice] = React.useState('');
    const [auctionEndDate, setAuctionEndDate] = React.useState('');
    const [deliveryDate, setDeliveryDate] = React.useState('');

    const openPopup = () => {
        setIsPopupOpen(true);
    };

    const closePopup = () => {
        setPrompt('');
        setMaxPrice('');
        setAuctionEndDate('');
        setDeliveryDate('');

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
        <div >
            <button onClick={openPopup}>Add Auction</button>
            <MyAuctionsTable auctions={auctions}/>
            <Modal isOpen={isPopupOpen} onRequestClose={closePopup} className={"popup"}>
                <h1>Add Auction</h1>
                <div>
                    <label htmlFor="prompt">Prompt:</label>
                    <input type="text" id="prompt" value={prompt} onChange={(e) => setPrompt(e.target.value)} />

                    <br />

                    <label htmlFor="maxPrice">Max Price:</label>
                    <input type="number" id="maxPrice" value={maxPrice} onChange={(e) => setMaxPrice(e.target.value)} />

                    <br />

                    <label htmlFor="auctionEndDate">Auction End Date:</label>
                    <input type="date" id="auctionEndDate" value={auctionEndDate} onChange={(e) => setAuctionEndDate(e.target.value)} />

                    <br />

                    <label htmlFor="deliveryDate">Delivery Date:</label>
                    <input type="date" id="deliveryDate" value={deliveryDate} onChange={(e) => setDeliveryDate(e.target.value)} />
                </div>
                <button onClick={closePopup}>Close</button>
                <button onClick={confirm}>Confirm</button>
            </Modal>
        </div>
    );
};

export default MyAuctionsTab;
