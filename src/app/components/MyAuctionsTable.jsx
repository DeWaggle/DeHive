import React from 'react';
import './MyAuctionsTable.css';


const MyAuctionsTable = (auctions) => {

    const auctionArray = Object.values(auctions);

    return (
        <div>
            <table className="table">
                <thead>
                    <tr>
                        <th>Price</th>
                        <th>Time to Bid</th>
                        <th>Time to Deliver</th>
                        <th>Prompt</th>
                        <th>LLM Model</th>
                    </tr>
                </thead>
                <tbody>
                    {auctionArray[0].map(function(auction) {
                        return (
                            <tr key={auctionArray.indexOf(auction)}>
                                <td><input type="text" readOnly value={auction.price} /></td>
                                <td><input type="text" readOnly value={auction.timeToBid} /></td>
                                <td><input type="text" readOnly value={auction.timeToDeliver} /></td>
                                <td><input type="text" readOnly value={auction.description} /></td>
                                <td><input type="text" readOnly value={auction.llm} /></td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
};

export default MyAuctionsTable;