import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import building from './building.png'
import "./location.css"

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
                        </div>
                        </div>
                    )
                }
            </div>
            </section>
        )
    }
}
