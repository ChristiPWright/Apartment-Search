import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { 
    Button, Form, FormGroup, Label, Input, FormText 
} from 'reactstrap'
import { createApartment } from '../../api'

class NewApartment extends Component {
    constructor(props) {
        super(props)
        this.state = {
            success: false,
            form: {
                bldg_name: '',
                address: '',
                city:'',
                state: '',
                zip: '',
                bldg_ammenities: '',
                rental_range: '',
                contact_name: '',
                contact_number: '',
                contact_hours: ''
            }
        }
    }
    
    // as user types in form line entry, state is updated with that form data
    handleChange = (event) => {
        let {form} = this.state
        form[event.target.name] = event.target.value
        this.setState({form: form})
    }
    
   
    //submit button calls fetch POST function with paramater of form state to push form data to Rails
    handleClick = () => {
        createApartment(this.state.form)
        .then(response => {
            console.log("Success! New Apartment: ",response);
        })
    }
    
    render () {
        return (
            <div>
                <Form>
                    <FormGroup>
                        <Label for="bldg_name"> Building Name</Label>
                        <Input 
                            type="bldg_name" 
                            name="bldg_name" 
                            id="bldg_name" 
                            placeholder="Ex. The Grand on 5th"
                            onChange={this.handleChange}
                            value={this.state.form.bldg_name}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="address"> Street Address</Label>
                        <Input 
                            type="address" 
                            name="address" 
                            id="address" 
                            placeholder="Ex. 123 Main St"
                            onChange={this.handleChange}
                            value={this.state.form.address}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="city"> City</Label>
                        <Input 
                            type="city" 
                            name="city" 
                            id="city" 
                            placeholder="Ex. San Diego"
                            onChange={this.handleChange}
                            value={this.state.form.city}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="state"> State Abbreviation</Label>
                        <Input 
                            type="state" 
                            name="state" 
                            id="state" 
                            placeholder="Ex. CA"
                            onChange={this.handleChange}
                            value={this.state.form.state}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="zip"> Zip Code</Label>
                        <Input 
                            type="zip" 
                            name="zip" 
                            id="zip" 
                            placeholder="Ex. 92112"
                            onChange={this.handleChange}
                            value={this.state.form.zip}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="bldg_ammenities"> Building Ammentities</Label>
                        <Input 
                            type="bldg_ammenities" 
                            name="bldg_ammenities" 
                            id="bldg_ammenities" 
                            placeholder="Ex. Heated salt water pool "
                            onChange={this.handleChange}
                            value={this.state.form.bldg_ammenities}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="rental_range"> Rental Range</Label>
                        <Input 
                            type="rental_range" 
                            name="rental_range" 
                            id="rental_range" 
                            placeholder="Ex. $1,000-$1,500"
                            onChange={this.handleChange}
                            value={this.state.form.rental_range}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="contact_name"> Rental Contact</Label>
                        <Input 
                            type="contact_name" 
                            name="contact_name" 
                            id="contact_name" 
                            placeholder="Ex. Jane Smith"
                            onChange={this.handleChange}
                            value={this.state.form.contact_name}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="contact_number"> Rental Contact's Phone Number</Label>
                        <Input 
                            type="contact_number" 
                            name="contact_number" 
                            id="contact_number" 
                            placeholder="Ex. (619) 867-5309"
                            onChange={this.handleChange}
                            value={this.state.form.contact_number}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="contact_hours"> Hours of Operation</Label>
                        <Input 
                            type="contact_hours" 
                            name="contact_hours" 
                            id="contact_hours" 
                            placeholder="Ex. MWF 9am-3pm, TTh 2pm-5pm"
                            onChange={this.handleChange}
                            value={this.state.form.contact_hours}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Button onClick={this.handleClick} >Submit</Button>
                    </FormGroup>
                </Form>
            </div>
            )
    }
}

export default NewApartment