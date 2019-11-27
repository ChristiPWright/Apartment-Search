import React from "react"
import { Nav, NavItem, NavLink } from 'reactstrap'
import { BrowserRouter as  Router, Route, Link } from 'react-router-dom'
import { getApartments } from '../../api'

import NewApartment from './NewApartment'

class MyListings extends React.Component {
  render() {
    return(
      <div>
         <Router>  
            <Nav>
               <NavItem>
                 <NavLink to="/NewApartment" tag={Link}>NewApartment</NavLink>
               </NavItem>
            </Nav>
            <Route path="/NewApartment" component={NewApartment} />
          </Router> 
       </div>
    )
  }
}

export default MyListings
 