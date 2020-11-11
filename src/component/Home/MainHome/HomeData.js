import React from 'react';
import sajek from '../../../images/Image/Sajek.png';
import sreemangal from '../../../images/Image/Sreemongol.png';
import sundarbans from '../../../images/Image/sundorbon.png';
const HomeData = ({handleMenu, currentCategory}) => {
    
    return (
        <div className="card-deck">
            <div className="card">
                <img className="card-img-top" src={sajek} alt="Card image cap" />
                <div className="card-body">
                    <h5 className={`card-title ${currentCategory === 'coxbazar' ? 'text-danger' : ''}`} onClick={() => handleMenu('coxbazar')} style={{cursor: 'pointer'}}>COX'S BAZAR</h5>
                </div>
            </div>
            <div className="card">
                <img className="card-img-top" src={sreemangal} alt="Card image cap" />
                <div className="card-body">
                    <h5 className={`card-title ${currentCategory === 'sreemangal' ? 'text-danger' : ''}`} onClick={() => handleMenu('sreemangal')} style={{cursor: 'pointer'}}>SREEMANGLA</h5>
                </div>
            </div>
            <div className="card">
                <img className="card-img-top" src={sundarbans} alt="Card image cap" />
                <div className="card-body">
                    <h5 className={`card-title ${currentCategory === 'sundarbans' ? 'text-danger' : ''}`} onClick={() => handleMenu('sundarbans')} style={{cursor: 'pointer'}}>SUNDARBANS</h5>
                </div>
            </div>
        </div>
    );
};

export default HomeData;