// This will handle all the routing 
import { Route } from 'react-router-dom'
import React, { Component } from "react"
import AnimalList from './animal/AnimalList'
import LocationList from './location/LocationList'
import EmployeeList from './employee/EmployeeList'
import OwnerList from './owner/OwnerList'
import AnimalManager from '../components/modules/AnimalManager'
import OwnerManager from '../components/modules/OwnerManager'
import EmployeeManager from '../components/modules/EmployeeManager'
import LocationManager from '../components/modules/LocationManager'


export default class ApplicationViews extends Component {

    state = {
        animals: [],
        employees: [],
        locations: [],
        owners: []
    }

    componentDidMount() {
        const newState = {}

            AnimalManager.getAll()
            .then(animals => newState.animals = animals)
            EmployeeManager.getAll()
            .then(employees => newState.employees = employees)
            LocationManager.getAll()
            .then(locations => newState.locations = locations)
            OwnerManager.getAll()
            .then(owners => newState.owners = owners)
            .then(() => this.setState(newState))
    }

    //this function will handle the delete btn from AnimalList
    // deleteAnimal = id => {
    //     return fetch(`http://localhost:5002/animals/${id}`, {
    //         method: "DELETE"
    //     })
    //     .then(e => e.json())
    //     .then(() => fetch(`http://localhost:5002/animals`))
    //     .then(e => e.json())
    //     .then(animals => this.setState({
    //         animals: animals
    //     })
    //   )
    // }

    deleteItem = (id,resource) => {
        return fetch(`http://localhost:5002/${resource}/${id}`, {
            method: "DELETE"
        })
        .then(e => e.json())
        .then(() => fetch(`http://localhost:5002/${resource}`))
        .then(e => e.json())
        .then(obj => this.setState({
            [resource]: obj
        })
      )
    }

    render() {
        return (
            <React.Fragment>
                <Route exact path="/" render={(props) => {
                    return <LocationList locations={this.state.locations} />
                }} />
                <Route path="/animals" render={(props) => {
                    return <AnimalList animals={this.state.animals} deleteItem={this.deleteItem}/>
                }} />
                <Route path="/employees" render={(props) => {
                    return <EmployeeList employees={this.state.employees} deleteItem={this.deleteItem} />
                }} />
                <Route path="/owners" render={(props) => {
                    return <OwnerList owners={this.state.owners} animals={this.state.animals} deleteItem={this.deleteItem}/>
                }} />
            </React.Fragment>
        )
    }
}

 