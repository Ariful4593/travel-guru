import React from 'react';
import { Button } from 'react-bootstrap';

const SelectHotel = ({ selected, handleButton }) => {
    return (
        <div className="card border-0" style={{background: 'none', color: 'white'}}>
            <div className="card-body" >
                <h1 className="card-title">{selected.name}</h1>
                <p className="card-text text-justify">{selected.description}</p>
                <Button className="btn btn-danger" onClick={() => handleButton(selected.category)}>Booking</Button>
            </div>
        </div>
    );
};

export default SelectHotel;