import React, { Component } from 'react'
import owners from './owner.png'
import './owner.css'

export default class Owner extends Component {
    state = {
        saveDisable: false
    }

    render() {
        return (
            <section className="owner">
                <div key={ this.props.owner.id } className="card">
                    <div className="card-body">
                        <h4 className="card-title">
                            <img src={ owners } className="icon--owner"  alt="owner-icon"/>
                            { this.props.owner.name }
                            { this.props.owner.phoneNumber }
                            {/* <div>                            {
                                this.props.animals.find(animal => (
                                    animal.id === this.props.owner.animalId
                                )).name
                            }
                            </div> */}
                        </h4>
                        <button onClick={
                                () => {
                                    this.setState(
                                        { saveDisabled: true },
                                        () => this.props.deleteOwner(this.props.owner.id)
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