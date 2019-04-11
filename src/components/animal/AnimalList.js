import React, { Component } from 'react'

export default class AnimalList extends Component {
    render() {
        return (
            <section>
                <h3>Our Animals</h3>
                {
                    this.props.animals.map(animal => 
                        <div key={animal.id}>
                            <p>Name:"{animal.name}", Breed:{animal.breed}</p>
                        </div>
                    )
                }
            </section>
        )
    }
}
