import React from 'react';
import Header from '../Header/Header';
import HotelData from '../../HotelData/Hoteldata'
import Map from '../Page/Map/Map';

const Hotel = () => {
    const getData = JSON.parse(sessionStorage.getItem('userData'))
    const hotelRoom = HotelData.filter(x => x.district === getData.status);
    console.log(hotelRoom)
    return (
        <div className="container" style={{ backgroundColor: 'white', maxWidth: '100%', margin: 0, padding: 0 }}>
            <Header></Header>
            <div className="row">
                <div className="col-md-6">
                    {
                        hotelRoom.map(data => {
                            return (
                                <div className=" row mb-4" key={data.id}>
                                    <div className="col-md-6 p-0">
                                        <div className="card h-100" style={{ width: '18rem' }}>
                                            <img className="card-img-top h-100" src={data.img} alt="Card image cap" />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="card" style={{ width: '18rem' }}>
                                            <div className="card-body">
                                                <h5 className="card-title">{data.title}</h5>
                                                <p className="card-text m-0">{data.type}</p>
                                                <p className="card-text m-0">{data.wifi}</p>
                                                <p className="card-text m-0">{data.cancel}</p>
                                                <p className="card-text m-0">{data.price}</p>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <div className="col-md-6">
                    <Map></Map>
                </div>
            </div>
        </div>
    );
};

export default Hotel;