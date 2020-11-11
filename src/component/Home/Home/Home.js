import React from 'react';
import Header from '../../Header/Header';
import MainHome from '../MainHome/MainHome';
import './Home.css';
const Home = () => {
    return (
        <div className="home" >
            <Header></Header>
            <MainHome></MainHome>
        </div>
    );
};

export default Home;