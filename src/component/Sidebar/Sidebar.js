import React, { useState } from 'react';
import './Sidebar.css'
import Coxbazar from '../Travel/Coxbazar';
import img1 from '../../images/Image/Sajek.png';
import img2 from '../../images/Image/Sreemongol.png';
import img3 from '../../images/Image/sundorbon.png';
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";
import { Col, Container, Nav, Navbar, Row } from 'react-bootstrap';
const Sidebar = () => {
  const [booking, setBooking] = useState({
    isBooking: true,
  })
  return (
    <Container style={{maxWidth: '100%',height: '100vh'}} className="sidebar">
      <Row>
        <Col sm={12} md={12} lg={6}>
          <Coxbazar></Coxbazar>
        </Col>
        <Col>
          {
            booking.isBooking &&
            <Row
              style={{
                padding: "10px",
                marginTop: '100px'
              }}
            >
              <Col sm={4} md={4} lg={4}>
                <Link to={`/about/coxsbazar`} style={{ textAlign: 'center', textDecoration: 'none' }}>
                  <img src={img1} style={{ width: '100%' }} alt="" />
                  <h5> COX'S BAZAR</h5>
                </Link>
              </Col>
              <Col sm={4} md={4} lg={4}>
                <Link to={`/about/shreemangal`} style={{ textAlign: 'center', textDecoration: 'none' }} >
                  <img src={img2} style={{ width: '100%' }} alt="" />
                     <h5>SREEMANGAL</h5>
                  </Link>
              </Col>
              <Col sm={4} md={4} lg={4}>
                <Link to={`/about/sundarban`} style={{ textAlign: 'center', textDecoration: 'none' }}>
                  <img src={img3} style={{ width: '100%' }} alt="" />
                     <h5 className="sundarbans">SUNDARBANS</h5>
                  </Link>
              </Col>
            </Row>
          }
        </Col>
      </Row>



    </Container>
  );
};

export default Sidebar;