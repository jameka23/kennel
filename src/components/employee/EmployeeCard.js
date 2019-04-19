import React, { Component } from "react"
import { Link } from "react-router-dom"
import './employee.css'
import employee from './employee-icon.jpg'

export default class EmployeeCard extends Component {
    render(){
        return (
            <h5 className="card-title">
                <img src={employee} className="emp--icon" alt="employee-icon" />
                {this.props.employee.name}
                <Link className="nav-link" to={`/employees/${this.props.employee.id}`}>Details</Link>
                <button
                onClick={ () => {this.props.deleteEmployee(this.props.employee.id)}}
                className="btn btn-danger"
                >Delete</button>
            </h5>
        )
    }
}