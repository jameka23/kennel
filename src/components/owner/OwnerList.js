import React, { Component } from 'react'
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
                                Name: {owner.name}
                                <p className="phone-card">Phone: {owner.phoneNumber}
                                {"Animal: "+ " "}
                                {
                                    this.props.animals.find(animal => animal.id === owner.animalId).name 
                                }  
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
