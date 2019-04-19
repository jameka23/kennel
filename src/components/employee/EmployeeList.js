import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import emp from './employee-icon.jpg'
import './employee.css'
import '../animal/animal.css'
import AnimalCard from '../animal/AnimalCard'

export default class EmployeeList extends Component {
    render() {
        return (
            <section>
                <h3 className="employee-head">Employee List</h3>
                <div className="employeeButton">
                    <button type="button"
                            className="btn btn-success"
                            onClick={() => {this.props.history.push("/employees/new")}}>
                        Add Employee
                    </button>
                </div>
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
                                <h6 class="card-subtitle mb-2 text-muted">Caretaker For</h6>
                                <div className="animals--caretaker">
                                {
                                    this.props.animals
                                        .filter(theAnimal => theAnimal.employeeId === employee.id)
                                        .map(theAnimal => <AnimalCard key={theAnimal.id} animal={theAnimal} {...this.props} />)
                                }
                                </div>
                            </div>

                        </div>
                    )
                }
                </div>
            </section>
        );
    }
}