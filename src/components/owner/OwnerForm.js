import React, { Component } from 'react'
import './owner.css'

export default class OwnerForm extends Component{
    // set the initial state 
    state = {
        ownerName: "",
        phoneNumber: "",
        animalId:""
    }

    // function that will handle the change of the input field
    handleFieldChange = event => {
        const stateToChange = {}
        stateToChange[event.target.id] = event.target.value;
        this.setState(stateToChange)
    }

    constructNewOwner = event => {
        //prevent the page from going to another page
        event.preventDefault()
        if(this.state.animal === ""){
            alert("Please choose your fur baby! ")
        }else{
            const owner = {
                name: this.state.ownerName,
                phoneNumber: this.state.phoneNumber,
                animalId: this.state.animalId
            }

            this.props.addOwner(owner)
        }

    };

    render() {
        return(
            <React.Fragment>
                <form className="ownerForm">
                    <div className="form-group">
                        <label htmlFor="ownerName">Name:</label>
                        <input 
                        type="text"
                        required
                        placeholder="First Last"
                        className="form-control"
                        id="ownerName"
                        onChange={this.handleFieldChange}
                        />
                    </div>
                    <div className="form-group">
                    <label htmlFor="phoneNumber">Phone Number:</label>
                        <input 
                        type="number"
                        required
                        placeholder="phone number"
                        className="form-control"
                        id="phoneNumber"
                        onChange={this.handleFieldChange}
                        />
                    </div>
                    <div className="form-group">
                    <label htmlFor="animals">Pet:</label>
                    <select 
                    defaultValue=""
                    name="animals"
                    id="animalId"
                    onChange={this.handleFieldChange}
                    >
                    <option value="">Select a fur baby</option>
                    {this.props.animals.map(animal => (
                        <option key={animal.id} id={animal.id} value={animal.id}>
                            {animal.name}
                        </option>
                    ))}
                    </select>
                    </div>
                    <button className="btn btn-primary"
                    type="submit"
                    onClick={this.constructNewOwner}
                    >
                        Submit
                    </button>
                </form>
            </React.Fragment>
        )
    }
}