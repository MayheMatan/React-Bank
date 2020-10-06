import React from 'react';

const breakdown = props => (
    <table>
        <tr>
            <th>Amount</th>
            <th>Vendor</th>
            <th>Category</th>
        </tr>
        {props.transcations.map(transcation => {
            return (
                <tr style={transcation.amount > 0 ? {backgroundColor: "green"} : {backgroundColor: "red"}} key={transcation._id}>
                    <td>{transcation.amount}</td>
                    <td>{transcation.vendor}</td>
                    <td>{transcation.category}</td>
                </tr>
            )
        })}
    </table>
);

export default breakdown;