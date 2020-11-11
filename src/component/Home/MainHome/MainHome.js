import React, { useEffect, useState } from 'react';
import Hoteldata from '../../../HotelData/Hoteldata'
import DestinationForm from '../../DestinationForm/DestinationForm';
import Slider from '../Slider/Slider';
import SelectHotel from './SelectHotel';
const MainHome = () => {
    const [currentCategory, setCurrentCategory] = useState('');
    const [currentMenu, setCurrentMenu] = useState([]);
    
    useEffect(() =>{
        setCurrentCategory('coxbazar')
    }, [])

    useEffect(() =>{
        if(currentCategory !== ''){
            const category = Hoteldata.filter(cate => cate.category === currentCategory);
            setCurrentMenu(category)
        }
    }, [currentCategory]);
    const handleMenu = (submenu) =>{
        setCurrentCategory(submenu);
    }

    const [formStatus, setFormStatus] = useState(null)
    const handleButton = (status) =>{
        setFormStatus(status);
    }
    return (
        <div className="container mt-5">
            
            <div className="row">
                <div className="col-md-5">
                    {
                        currentMenu.map(selected => {
                            return(
                                <SelectHotel handleButton={handleButton} selected={selected} key={selected.id}></SelectHotel>
                            )
                        })
                    }
                </div>
                <div className="col-md-7">
                    {
                        formStatus ? <DestinationForm formStatus={formStatus} /> :
                        <Slider handleMenu={handleMenu} currentCategory={currentCategory}></Slider> 
                    }
                </div>
            </div>
        </div>
    );
};

export default MainHome;