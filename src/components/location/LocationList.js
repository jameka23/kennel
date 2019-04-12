import React, { Component } from 'react'
import "./location.css"

export default class LocationList extends Component {
    render() {
        return (
            <section className="content">
            <h3>Our Locations</h3>
                {
                    this.props.locations.map(location => 
                        <div key={location.id}>
                            <p>Name:"{location.name}", Breed:{location.breed}</p>
                        </div>
                    )
                }
            </section>
        )
    }
}