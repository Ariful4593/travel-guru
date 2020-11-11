import React from 'react';

const Hotelinfo = (props) => {
    const {title, description, price, id} = props.hotel;
    console.log(title, description, price, id)
    return (
        <div>
            <h1>I am from info</h1>
        </div>
    );
};

export default Hotelinfo;