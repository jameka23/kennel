import React, { Component } from 'react'

export default class EmployeeList extends Component {
    render() {
        return (
            <section className="employees">
            <h3>Our Employees</h3>
            {
                this.props.employees.map(employee =>
                    <div key={employee.id}>
                        {employee.name}
                    </div>
                )
            }
            </section>
        );
    }
}