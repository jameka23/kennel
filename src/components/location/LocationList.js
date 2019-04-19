import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import building from './building.png'
import "./location.css"
import EmployeeCard from '../employee/EmployeeCard'

export default class LocationList extends Component {
    render() {
        return (
            <section className="content">
            <h3>Our Locations</h3>
            <div className="locations">
                {
                    this.props.locations.map(location => 
                        <div key={location.id} className="card">
                        <div className="card-body">
                            <h5 className="card-title">
                                <img src={ building } className="icon--bldg"  alt="bldg-icon"/>
                                <p>Location:"{location.name}", Address:{location.address}</p>
                                <Link className="nav-link" to={`/${location.id}`}>Details</Link>
                            </h5>
                            <div>
                                Employees:
                                <div>
                                {
                                    this.props.employees
                                        .filter(employee => employee.locationId === location.id)
                                        .map(employee => <EmployeeCard key={employee.id} employee={employee} {...this.props} />)
                                }
                                </div>
                            </div>
                        </div>
                        </div>
                    )
                }
            </div>
            </section>
        )
    }
}
