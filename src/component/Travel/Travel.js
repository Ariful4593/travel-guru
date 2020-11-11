import React from 'react';
import { useState } from 'react';
import './Travel.css'
import { Container } from 'react-bootstrap';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Hotel from '../Hotel/Hotel';
import Login from './Login';
import Params from './Params';
import PrivateRoute from '../PrivateRoute/PrivateRoute';
import Nomatch from '../Nomatch/Nomatch';
import Sidebar from '../Sidebar/Sidebar';

const Travel = () => {

  const [booking, setBooking] = useState({
    isBooking: true,
  })
  return (
    <Container style={{ maxWidth: '100%',padding: 0 }} className="travel">
      <Router >
        
            <Switch>
              <Route exact path="/">
                <Sidebar></Sidebar>
              </Route>
              <Route path="/login">
                <Login></Login>
              </Route>
              <Route path="/about/:dist">
                <Params booking={[booking, setBooking]}></Params>
              </Route>
              <PrivateRoute path="/hotel/:districtName">
                <Hotel></Hotel>
              </PrivateRoute>
              <Route path="*">
                <Nomatch></Nomatch>
              </Route>
            </Switch>
        
      </Router>
    </Container>
  );
};

export default Travel;