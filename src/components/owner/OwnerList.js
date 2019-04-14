import React, { Component } from 'react'


export default class OwnerList extends Component {
    render() {
        return (  
            <section className="content">
                <h3>Our Owners</h3>
                {
                    this.props.owners.map(owner => 
                        <div key={owner.id}>
                            Name: {owner.name}
                            <p>Phone: {owner.phoneNumber}
                            <p>Animal:                        
                            {
                                this.props.animals.find(animal => animal.id === owner.animalId).name 
                            }
                            </p>  
                            </p>
                        </div>
                    )
                }
            </section>
        )
    }
}