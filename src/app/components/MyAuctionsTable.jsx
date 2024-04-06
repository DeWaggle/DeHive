import React from 'react';

const MyAuctionsTable = () => {

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Price</th>
                        <th>Time to Bid</th>
                        <th>Time to Deliver</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><input type="text" /></td>
                        <td><input type="text" /></td>
                        <td><input type="text" /></td>
                        <td><input type="text" /></td>
                    </tr>
                    {/* Add more rows as needed */}
                </tbody>
            </table>
        </div>
    );
};

export default MyAuctionsTable;