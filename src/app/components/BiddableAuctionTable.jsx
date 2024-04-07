import React from 'react';
import './BiddableAuctionTable.css';

const BiddableAuctionTable = ({ onBid, auctions}) => {

    const auctionArray = auctions

    return (
        <table className='table'>
            <thead>
                <tr>
                    <th>Price</th>
                    <th>Time to Bid</th>
                    <th>Time to Deliver</th>
                    <th>Description</th>
                    <th>LLM Model</th>
                    <th>Bid</th>
                </tr>
            </thead>
            <tbody>
                
                    {auctionArray.map(function(auction) {
                        return (
                            <tr key={auctionArray.indexOf(auction)}>
                                <td><input type="text" readOnly value={auction.price} /></td>
                                <td><input type="text" readOnly value={auction.timeToBid} /></td>
                                <td><input type="text" readOnly value={auction.timeToDeliver} /></td>
                                <td><input type="text" readOnly value={auction.description} /></td>
                                <td><input type="text" readOnly value={auction.llm} /></td>
                                <td><button onClick={() => onBid(auction)}>Bid</button></td>
                            </tr>
                        );
                    })}
                
            </tbody>
        </table>
    );
};

export default BiddableAuctionTable;