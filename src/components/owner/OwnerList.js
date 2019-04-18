import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import owner from './owners.svg'
import './owner.css'


export default class OwnerList extends Component {
    render() {
        return (  
            <section className="content">
                <h3>Our Owners</h3>
                {
                    this.props.owners.map(owner => 
                        <div key={owner.id} className="card">
                            <div className="card-body">
                                <h5 className="card-title">
                                <img src={ owner } className="owner--icon" alt="owner--icon"/>
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
            </section>
        )
    }
}
