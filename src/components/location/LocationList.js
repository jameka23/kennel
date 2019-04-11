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
                            {location.name}
                            {location.address}
                        </div>
                    )
                }
            </section>
        )
    }
}