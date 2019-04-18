import React, { Component } from 'react'
import emp from './employee-icon.jpg'
import './employee.css'

export default class EmployeeDetail extends Component {
    state = {
        saveDisabled: false
    }
    
    render() {
        return (
            <section className="employee">
                <div key={this.props.employee.id} className="card">
                    <div className="card-body">
                        <h4 className="card-title">
                            <img src={ emp } className="emp--icon"  alt="employee-icon"/>
                            { this.props.employee.name }
                        </h4>
                        {/* <h6 className="card-title">{ this.props.animal.breed }</h6> */}
                        <button onClick={
                                () => {
                                    this.setState(
                                        { saveDisabled: true },
                                        () => this.props.deleteEmployee(this.props.employee.id)
                                    )
                                }
                            }
                            disabled={ this.state.saveDisabled }
                            className="card-link">Delete</button>
                    </div>
                </div>
            </section>
        )
    }
}