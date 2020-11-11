import React from 'react';
import { useContext } from 'react';
import { Container } from 'react-bootstrap';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
} from "react-router-dom";
import { UserContext } from '../../App';
const PrivateRoute = ({ children, ...rest }) => {

  const [loggedInUser, SetLoggedInUser] = useContext(UserContext);
  return (
    <Container>
      <Route
        {...rest}
        render={({ location }) =>
          loggedInUser.email || loggedInUser.name ? (
            children
          ) : (
              <Redirect
                to={{
                  pathname: "/login",
                  state: { from: location }
                }}
              />
            )
        }
      />
    </Container>

  );
};

export default PrivateRoute;