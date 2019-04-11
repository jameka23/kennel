import React, { Component } from 'react'
import "./location.css"

export default class LocationList extends Component {
    render() {
        return (
            <section>
                <h3>Our Locations</h3>
                {
                    this.props.locations.map(location => 
                        <div key={location.id}>
                            <p>{location.name}, {location.address}</p>
                        </div>
                    )
                }
            </section>
        )
    }
}