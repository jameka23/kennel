import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './owner.css'
import owners from './owner.png'


export default class OwnerList extends Component {
    render() {
        return (  
            <section>
                <h3 className="owner--head">Our Owners</h3>
                <div className="ownerButton">
                    <button type="button"
                        className="btn btn-success"
                        onClick={() => {this.props.history.push("/owners/new")}}>
                        Add Owner
                    </button>
                </div>
                <div className="owner">
                {
                    this.props.owners.map(owner => 
                        <div key={owner.id} className="card">
                            <div className="card-body">
                                <h5 className="card-title">
                                <img src={ owners } className="owner--icon" alt="owner--icon"/>
                                Name: {owner.name}
                                <p className="phone-card">Phone: {owner.phoneNumber}
                                <Link className="nav-link" to={`/owners/${owner.id}`}>Details</Link>
                                </p>
                                <button onClick={() => this.props.deleteOwner(owner.id)} className="card-link">Delete</button>
                                </h5>
                            </div>
                        </div>
                    )
                }
                </div>
            </section>
        )
    }
}
