// This will handle all the routing 
import { Route } from 'react-router-dom'
import React, { Component } from "react"
import AnimalList from './animal/AnimalList'
import LocationList from './location/LocationList'
import EmployeeList from './employee/EmployeeList'
import OwnerList from './owner/OwnerList'
import AnimalManager from '../components/modules/AnimalManager'
import EmployeeManager from '../components/modules/EmployeeManager'
import OwnerManager from '../components/modules/OwnerManager'
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

            AnimalManager.all()
            .then(animals => newState.animals = animals)
            .then(() => EmployeeManager.all())
            .then(employees => newState.employees = employees)
            .then(() => LocationManager.all())
            .then(locations => newState.locations = locations)
            .then(() => OwnerManager.all())
            .then(owners => newState.owners = owners)
            .then(() => this.setState(newState))
    }
s
    // this function will handle the delete btn from AnimalList
    deleteAnimal = id => {
        AnimalManager.removeAndList(id)
        .then(animals => this.setState({
            animals: animals
        })
      )
    }

    // this function will delete and fire an employee
    deleteEmployee = id => {
        return fetch(`http://localhost:5002/employees/${id}`, {
            method: "DELETE"
        })
        .then(e => e.json())
        .then(() => fetch(`http://localhost:5002/employees`))
        .then(e => e.json())
        .then(employees => this.setState({
            employees: employees
        }))
    }

    //This function will delete the owners from the OwnerList
    deleteOwner = id => {
        return fetch(`http://localhost:5002/owners/${id}`, {
            method: "DELETE"
        })
        .then(e => e.json())
        .then(() => fetch(`http://localhost:5002/owners`))
        .then(e => e.json())
        .then(owners => this.setState({
            owners: owners
        }))
    }
    // deleteItem = (id,resource) => {
    //     APIManager.delete(id, resource)
    //     .then(() => fetch(`http://localhost:5002/${resource}`))
    //     .then(e => e.json())
    //     .then(obj => this.setState({
    //         [resource]: obj
    //     })
    //   )
    // }

    // deleteItem = (id,manager,resource) => {
    //     return `${manager}`.delete(`${id}`)
    //     .then(e => e.json())
    //     `${manager}`.getAll()
    //     .then(e => e.json())
    //     .then(obj => this.setState({
    //         [resource]: obj
    //     })
    //   )
    // }

    render() {
        return (
            <React.Fragment>
                <Route exact path="/" render={(props) => {
                    return <LocationList locations={this.state.locations} />
                }} />
                <Route path="/animals" render={(props) => {
                    return <AnimalList animals={this.state.animals} deleteAnimal={this.deleteAnimal}/>
                }} />
                <Route path="/employees" render={(props) => {
                    return <EmployeeList employees={this.state.employees} deleteEmployee={this.deleteEmployee}/>
                }} />
                <Route path="/owners" render={(props) => {
                    return <OwnerList owners={this.state.owners} animals={this.state.animals} deleteOwner={this.state.owners} />
                }} />
            </React.Fragment>
        )
    }
}

 