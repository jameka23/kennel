import React, { Component } from 'react'
import "./location.css"

export default class LocationList extends Component {
    render() {
        return (
            <React.Fragment>
                <h1>Our Locations</h1>
                <div className="locationWrapper">
                <section className="locationContainer">
                    <h4>Nashville North Location</h4>
                    <h5>500 Puppy Way</h5>
                </section>
                <section className="locationContainer">
                    <h4>Nashville South Location</h4>
                    <h5>1600 Doggy Lane</h5>
                </section>
                </div>
            </React.Fragment>
        )
    }
}