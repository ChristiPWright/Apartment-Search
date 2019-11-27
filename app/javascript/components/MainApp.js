import React from "react"
import { Nav, NavItem, NavLink } from 'reactstrap'
import PropTypes from "prop-types"
import { BrowserRouter as  Router, Route, Link } from 'react-router-dom'
import { getApartments, getUnits } from '../api'

import PublicFeed from './pages/PublicFeed'
import MyListings from './pages/MyListings'

class MainApp extends React.Component {
  constructor(props) { 
    super(props)
      this.state = {
        errors: null,  
        apartments: [],
        units: [],
        
      }
      this.loadApartments()
      this.loadUnits()
    } 
    
    loadApartments = () => {
        getApartments()
        .then((response) => {
            if(response.error){
                this.setState({errors: response.errors})
            }else{
                this.setState({apartments: response})
            }
        })
    } 
    loadUnits = () => {
        getUnits()
        .then((response) => {
            if(response.error){
                this.setState({errors: response.errors})
            }else{
                this.setState({units: response})
            }
        })
    } 
  
  render () {
    const {
      logged_in,
      sign_in_route,
      sign_out_route,
      current_user_id
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
                 <NavLink to="/PublicFeed" tag ={Link}>PublicFeed</NavLink>
               </NavItem>
               <NavItem>
                 <NavLink to="/MyListings" tag={Link}>MyListings</NavLink>
               </NavItem>
            </Nav>
            
            <Route path="/MyListings" component={MyListings} />
            <Route path="/PublicFeed" render={(props) =><PublicFeed apartments={this.state.apartments} errors={this.state.errors}/>  } />
          </Router>  
        </div>
    );
  }
}

export default MainApp
