import React, { Component } from 'react'
import AnimalCard from './AnimalCard'
// import { Link } from 'react-router-dom'
// import dog from "./DogIcon.svg"
import "./animal.css"

export default class AnimalList extends Component {
    render() {
        return (
            <section >
                <h3 className="animal-head">Our Animals</h3>
                <div className="animalButton">
                    <button type="button"
                            className="btn btn-success"
                            onClick={() => {
                                this.props.history.push("/animals/new")}
                            }>
                        Admit Animal
                    </button>
                </div>
                <div className="content animals">
                {
                    this.props.animals.map(animal =>
                        <AnimalCard key={animal.id} animal={animal} {...this.props} />
                    )
                }
                </div>
            </section>
        )
    }
}