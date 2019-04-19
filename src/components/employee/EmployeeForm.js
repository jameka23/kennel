import React, { Component } from 'react'
import './employee.css'

export default class EmployeeForm extends Component {
    // set the initial state
    state = {
        employeeName: ""
    }

    // update the state whenever the input form is edited/changed
    handleFieldChange = event => {
        const stateToChange = {}
        stateToChange[event.target.id] = event.target.value;
        this.setState(stateToChange)
    };

    constructNewEmployee = event => {
        event.preventDefault();
        if(this.state.employeeName === ""){
            window.alert("Please fill out the form completely, add the employee name")
        }else{
            const employee = {
                name: this.state.employeeName
            }
            this.props.addEmployee(employee)
            // .then(() => this.props.history.push('/employees'))
        }
    };

    render(){
        return (
            <React.Fragment>
                <form className="employeeForm">
                    <div className="form-group">
                        <label htmlFor="employeeName">Name</label>
                        <input
                        type="text"
                        onChange={this.handleFieldChange}
                        required
                        className="form-control"
                        defaultValue=""
                        id="employeeName"
                        placeholder="First Last"
                        />
                    </div>
                    <button 
                    type="submit"
                    onClick={this.constructNewEmployee}
                    className="btn btn-primary"
                    >
                    Submit
                    </button>
                </form>
            </React.Fragment>
        )
    }
}