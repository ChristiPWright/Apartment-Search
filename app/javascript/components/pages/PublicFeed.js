 import React, { Component } from 'react'
 import {
  Col, Container, Row, ListGroup
} from 'reactstrap'

 class PublicFeed extends Component {
    constructor(props) { 
    super(props)
      this.state = {
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
        apartments: [
          {
            address: "3972 Mount Everest Blvd",
            city: "Walnut Creek",
            state: "CA",
            zip: "94596",
            contact_name: "Christi",
            contact_number: "925-286-6407"
          },
          {
            address: "16 Fraser Dr",
            city: "San Diego",
            state: "CA",
            zip: "92111",
            contact_name: "Loren",
            contact_number: "925-935-8453"
          }
        ]
      }
    } 
     
   render() {
     return(
        <div>   
           <h1>Public Feed</h1>
            <Container>   
               <Row>
                {this.state.apartments.map((apartment, index) => {
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
               </Row>
            </Container>    
        </div>
     )
   }
 }

 export default PublicFeed