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
        units: [
          {
            bed: 2,
            bath: 1,
            sf: 900,
            pets: "cats only",
            features: "in unit washer/dryer"
          },
          {
            unit_name: "301",
            bed: 3,
            bath: 2,
            sf: 1500,
            pets: "fish only",
            features: "in unit washer/dryer"
          }
        ],
        
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