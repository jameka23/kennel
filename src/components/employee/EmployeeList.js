import React, { Component } from 'react'
import { Link } from 'react-router-dom'
// import EmployeeDetail from './EmployeeDetail'
import emp from './employee-icon.jpg'
import './employee.css'

export default class EmployeeList extends Component {
    render() {
        return (
            <section>
                <h3 className="employee-head">Employee List</h3>
                <div className="employee">
                {
                    this.props.employees.map(employee =>
                        <div key={employee.id} className="card">
                            <div className="card-body">
                                <h5 className="card-title">
                                    <img src={emp} className="emp--icon" alt="employee-icon" />
                                    {employee.name}
                                    <Link className="nav-link" to={`/employees/${employee.id}`}>Detail</Link>
                                    <button onClick={()=>this.props.deleteEmployee(employee.id)} className="card-link">Delete</button>
                                </h5>
                            </div>

                        </div>
                    )
                }
                </div>
            </section>
        );
    }
}