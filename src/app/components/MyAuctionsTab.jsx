import React from 'react';
import MyAuctionsTable from './MyAuctionsTable';
import './MyAuctionsTab.css';
import Modal from 'react-modal';
import Auction from '../models/auction'; 
import LLMModels from '../models/llms';

const MyAuctionsTab = () => {
    const [isPopupOpen, setIsPopupOpen] = React.useState(false);
    const [prompt, setPrompt] = React.useState('');
    const [maxPrice, setMaxPrice] = React.useState('');
    const [auctionEndDate, setAuctionEndDate] = React.useState('');
    const [deliveryDate, setDeliveryDate] = React.useState('');
    const [llmModel, setLLMModel] = React.useState("");

    const [displayedAuctions, setAuctions] = React.useState([
        new Auction(100, '2022-12-31', '2023-01-15', 'Auction 1', LLMModels.GPT_4),
        new Auction(200, '2022-12-31', '2023-01-15', 'Auction 2', LLMModels.MIDJOURNEY),
        new Auction(300, '2022-12-31', '2023-01-15', 'Auction 3', LLMModels.GPT_4),
        new Auction(400, '2022-12-31', '2023-01-15', 'Auction 4', LLMModels.MIDJOURNEY),
        new Auction(500, '2022-12-31', '2023-01-15', 'Auction 5', LLMModels.GPT_4)
    ]);  

    const openPopup = () => {
        setIsPopupOpen(true);
    };

    const closePopup = () => {
        setPrompt('');
        setMaxPrice('');
        setAuctionEndDate('');
        setDeliveryDate('');
        setLLMModel('');

        setIsPopupOpen(false);
    };

    const confirm = () => {
        //Add smart contract call here

        const newAuction = new Auction(maxPrice, auctionEndDate, deliveryDate, prompt, llmModel);
        setAuctions([...displayedAuctions, newAuction]);

        closePopup();
    };

    return (
        <div>
            <button onClick={openPopup}>Add Auction</button>
            <MyAuctionsTable auctions={displayedAuctions} />
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

                    <br />

                    <label htmlFor="llmModel">LLM Model:</label>
                    <select id="llmModel" value={llmModel} onChange={(e) => setLLMModel(e.target.value)}>
                        <option value={LLMModels.GPT_4}>GPT 4</option>
                        <option value={LLMModels.MIDJOURNEY}>Midjourney</option>
                    </select>
                </div>
                <button onClick={closePopup}>Close</button>
                <button onClick={confirm}>Confirm</button>
            </Modal>
        </div>
    );
};

export default MyAuctionsTab;
