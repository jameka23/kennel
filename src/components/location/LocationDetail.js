import React, { Component } from 'react'
import building from './building.png'

export default class Location extends Component {
    state = {
        saveDisabled: false
    }

    render() {
        return (
            <section className="animal">
                <div key={ this.props.location.id } className="card">
                    <div className="card-body">
                        <h4 className="card-title">
                            <img src={ building } className="icon--bldg"  alt="bldg-icon"/>
                            { this.props.location.name }
                        </h4>
                        <p className="card-title">{ this.props.location.address }</p>
                        <button onClick={
                                () => {
                                    this.setState(
                                        { saveDisabled: true },
                                        () => this.props.deleteLocation(this.props.location.id)
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