import React from "react"
import { Nav, NavItem, NavLink } from 'reactstrap'
import PropTypes from "prop-types"
import { BrowserRouter as  Router, Route, Link } from 'react-router-dom'

import PublicFeed from './pages/PublicFeed'
import MyListings from './pages/MyListings'
import Login from './pages/Login'

class MainApp extends React.Component {
  render () {
    const {
      logged_in,
      sign_in_route,
      sign_out_route
    } = this.props
  
      return (
        <div>
          <React.Fragment>
            {logged_in &&
              <div>
                <a href={sign_out_route}>Sign Out</a>
              </div>
            }
            {!logged_in &&
              <div>
                <a href={sign_in_route}>Sign In</a>
              </div>
            }
          </React.Fragment>
          <Router>  
            <Nav>
              <NavItem>
                 <NavLink to="/" tag ={Link}>PublicFeed</NavLink>
               </NavItem>
               <NavItem>
                 <NavLink to="/Login" tag={Link}>Login</NavLink>
               </NavItem>
               <NavItem>
                 <NavLink to="/MyListings" tag={Link}>MyListings</NavLink>
               </NavItem>
            </Nav>
            <Route path="/" exact component={PublicFeed}/>
            <Route path="/Login" component={Login} />
            <Route path="/MyListings" component={MyListings} />
          </Router>  
        </div>
    );
  }
}

export default MainApp
