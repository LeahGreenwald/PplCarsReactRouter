import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';


function CarRow({ car }) {
    const { make, model, year } = car;
    return (
        <tr>
            <td>{make}</td>
            <td>{model}</td>
            <td>{year}</td>
        </tr>
    );
}

export default CarRow;