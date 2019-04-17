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
import AnimalDetail from "../components/animal/AnimalDetail"
import { withRouter } from 'react-router'



class ApplicationViews extends Component {

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
    
    // this function will handle the delete btn from AnimalList
    deleteAnimal = id => {
        AnimalManager.delete(id)
            .then(() => AnimalManager.all())
            .then(animals => {
                this.props.history.push("/animals")
                this.setState({ animals: animals })
            })
    }

    // this function will delete and fire an employee
    deleteEmployee = id => {
        EmployeeManager.delete(id)
            .then(() => fetch(`http://localhost:5002/employees`))
            .then(e => e.json())
            .then(employees => this.setState({
                employees: employees
            }))
    }

    //This function will delete the owners from the OwnerList
    deleteOwner = id => {
        OwnerManager.delete(id)
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
                <Route exact path="/animals" render={(props) => {
                    return <AnimalList animals={this.state.animals} deleteAnimal={this.deleteAnimal} />
                }} />
                {/*
                    This is a new route to handle a URL with the following pattern:
                        http://localhost:3000/animals/1

                    It will not handle the following URL because the `(\d+)`
                    matches only numbers after the final slash in the URL
                        http://localhost:3000/animals/jack
                */}
                <Route path="/animals/:animalId(\d+)" render={(props) => {
                    // Find the animal with the id of the route parameter
                    let animal = this.state.animals.find(animal =>
                        animal.id === parseInt(props.match.params.animalId)
                    )

                    // If the animal wasn't found, create a default one
                    if (!animal) {
                        animal = { id: 404, name: "404", breed: "Dog not found" }
                    }

                    return <AnimalDetail animal={animal}
                        deleteAnimal={this.deleteAnimal} />
                }} />
                <Route path="/employees" render={(props) => {
                    return <EmployeeList employees={this.state.employees} deleteEmployee={this.deleteEmployee} />
                }} />
                <Route path="/owners" render={(props) => {
                    return <OwnerList owners={this.state.owners} animals={this.state.animals} deleteOwner={this.state.owners} />
                }} />
            </React.Fragment>
        )
    }
}
export default withRouter(ApplicationViews)
