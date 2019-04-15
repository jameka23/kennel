import React, { Component } from 'react'

export default class EmployeeList extends Component {
    render() {
        return (
            <section className="content">
            <h3>Employee List</h3>
            {
                this.props.employees.map(employee =>
                    <div key={employee.id} className="card">
                        <div className="card-body">
                            <h5 className="card-title">
                                {employee.name}
                                <button onClick={()=>this.props.deleteItem(employee.id,"employees")} className="card-link">Delete</button>
                            </h5>
                        </div>

                    </div>
                )
            }
            </section>
        );
    }
}