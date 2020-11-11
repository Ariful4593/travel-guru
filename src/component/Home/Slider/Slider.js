import React from 'react';
import Carousel from "react-elastic-carousel";
import Item from './Item';
import coxsbazar from '../../../images/Image/Sajek.png';
import sreemangal from '../../../images/Image/Sreemongol.png';
import sundarvan from '../../../images/Image/sundorbon.png';
import kuakata from '../../../images/Image/kuakata_beach.jpg';
import kaptai from '../../../images/Image/kaptai.jpg';
import batiari from '../../../images/Image/batiari.jpg';
const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
];
const sliderData = [
    { id: 1, name: "COX'SBAZAR", hints: 'coxbazar', img: coxsbazar, bg: '#5a9a97' },
    { id: 2, name: "SHREEMANGAL", hints: 'sreemangal', img: sreemangal, bg: '#242424' },
    { id: 3, name: "SUNDARBANS", hints: 'sundarbans', img: sundarvan, bg: '#433e3e'},
    { id: 4, name: "KUAKATA", hints: 'kuakata', img: kuakata, bg: '#131414' },
    { id: 5, name: "KAPTAI", hints: 'kaptai', img: kaptai, bg: '#262626' },
    { id: 6, name: "BATIARI", hints: 'batiari', img: batiari, bg: '#262626' },
]
const Slider = ({handleMenu, currentCategory}) => {
    return (
        <div className="col">
            <Carousel breakPoints={breakPoints}>
                {
                    sliderData.map(slider => {
                        return (
                            <Item key={slider.id} >
                                <div className="card" style={{ width: '18rem', borderRadius: '20px', background: `${slider.bg}` }} >
                                    <img className="card-img-top" src={slider.img} alt="Card cap" />
                                    <div className="card-body">
                                        <h5 className={`card-title text-primary text-center ${currentCategory === `${slider.hints}` ? 'text-danger' : ''}`} onClick={() => handleMenu(`${slider.hints}`)} style={{cursor: 'pointer'}}>{slider.name}</h5>
                                    </div>
                                </div>
                            </Item>
                        )
                    })
                }

                {/* <Item>
                    <img className="w-100" src={sreemangal} alt="" />
                </Item>
                <Item>
                    <img className="w-100" src={sundarvan} alt="" />

                </Item>
                <Item>
                    <img className="w-100" src={sreemangal} alt="" />
                </Item>
                <Item>
                    <img className="w-100" src={sundarvan} alt="" />
                </Item>
                <Item>
                    <img className="w-100" src={sajek} alt="" />
                </Item>
                <Item>
                    <img className="w-100" src={sreemangal} alt="" />
                </Item>
                <Item>
                    <img className="w-100" src={sundarvan} alt="" />
                </Item> */}
            </Carousel>
        </div>
    );
};

export default Slider;