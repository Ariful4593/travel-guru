import React from 'react';
import './App.css';
import Header from './component/Header/Header';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Login from './component/Travel/Login';
import Travel from './component/Travel/Travel';
import { createContext } from 'react';
import { useState } from 'react';
import Home from './component/Home/Home/Home';
import Destination from './component/Page/Destination/Destination';
import Blog from './component/Page/Blog/Blog';
import Contact from './component/Page/Contact/Contact';
import News from './component/Page/News/News';
import DestinationForm from './component/DestinationForm/DestinationForm';
import PrivateRoute from './component/PrivateRoute/PrivateRoute';
import Hotel from './component/Hotel/Hotel';
export const UserContext = createContext();
function App() {
  const [loggedInUser, SetLoggedInUser] = useState({})

  return (
    <UserContext.Provider value={[loggedInUser, SetLoggedInUser]}  >
      <div className="App">
        <Router>

          <Switch>
            <Route exact path="/">
              <Home></Home>
              {/* <Travel></Travel> */}
            </Route>
            <Route path="/destination">
              <Destination></Destination>
            </Route>
            <Route path="/blog">
              <Blog></Blog>
            </Route>
            <Route path="/contact">
              <Contact></Contact>
            </Route>
            <Route path="/news">
              <News></News>
            </Route>
            <Route path="/form">
              <DestinationForm></DestinationForm>
            </Route>
            <PrivateRoute path="/hotel/:districtname">
              <Hotel></Hotel>
            </PrivateRoute>
            <Route path="/login">
              <Login></Login>
            </Route>
          </Switch>
        </Router>

      </div>

    </UserContext.Provider>
  );
}

export default App;
