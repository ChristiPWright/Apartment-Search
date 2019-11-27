 import React, { Component } from 'react'
 import {
  Col, Container, Row, ListGroup
} from 'reactstrap'
import { getApartments } from '../../api'

 class PublicFeed extends Component {
    constructor(props) { 
    super(props)
      this.state = {
        errors: null,  
        apartments: [],
        units: [],
        
      }
      this.loadApartments()
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
     
   render() {
     return(
        <div>   
           <h1>Public Feed</h1>
            <React.Fragment>
                {this.state.errors &&
                    <div>
                        <h3> There is a problem</h3>
                        <ul>
                            {this.state.errors.map((error)=> <li>error</li>)}
                        </ul>
                    </div>
                }
                
                {this.state.apartments.map((apartment, index)=>{
                    return(
                        <div key={index}>
                        <h2 >{apartment.address}, {apartment.city}, {apartment.state} {apartment.zip} </h2>
                        <ul>
                             <li > Bulding Name: {apartment.bldg_name} </li>
                             <li > Bulding Ammenities: {apartment.bldg_ammenities} </li>
                             <li > Rental Range: {apartment.rental_range}</li>
                             <li > Bulding Contact: {apartment.contact_name}</li>
                             <li > Phone Number: {apartment.contact_number}</li>
                             <li > Hours of Operation: {apartment.contact_hours}</li>
                        </ul>
                    </div>
                    )
                })}
            </React.Fragment>
        </div>
     )
   }
 }

 export default PublicFeed