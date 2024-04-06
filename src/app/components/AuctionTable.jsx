import React from 'react';

const AuctionTable = () => {
    return (
        <table>
            <thead>
                <tr>
                    <th>Price</th>
                    <th>Time to Bid</th>
                    <th>Time to Deliver</th>
                    <th>Description</th>
                    <th>Bid</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><input type="text" /></td>
                    <td><input type="text" /></td>
                    <td><input type="text" /></td>
                    <td><input type="text" /></td>
                    <td><button>Bid</button></td>
                </tr>
                {/* Add more rows as needed */}
            </tbody>
        </table>
    );
};

export default AuctionTable;