// This will handle all the routing 
import { Route, Redirect } from 'react-router-dom'
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
import EmployeeDetail from './employee/EmployeeDetail';
import OwnerDetail from './owner/OwnerDetail'
import LocationDetail from './location/LocationDetail'
import AnimalForm from './animal/AnimalForm'
import EmployeeForm from './employee/EmployeeForm'
import OwnerForm from './owner/OwnerForm'
import Login from './authentication/Login'


class ApplicationViews extends Component {

    //check for authentication is in local session storage
    isAuthenticated = () => sessionStorage.getItem("credentials") !== null

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
            .then(() => EmployeeManager.all())
            .then(employees => {
                this.props.history.push("/employees")
                this.setState({employees: employees})
            })
    }

    //This function will delete the owners from the OwnerList
    deleteOwner = id => {
        OwnerManager.delete(id)
            .then(() => OwnerManager.all())
            .then(owners => {
                this.props.history.push("/owners")
                this.setState({owners: owners})
            })
    }

    // this function will delete a location from the Location 
    deleteLocation = id => {
        LocationManager.delete(id)
        .then(() => LocationManager.all())
        .then(locations => {
            this.props.history.push('/')
            this.setState({locations: locations})
        })
    }

    // this function will make a post to the database for the animals resource
    addAnimal = newAnimalObj => {
        AnimalManager.post(newAnimalObj)
        .then(() => AnimalManager.all())
        .then(animals => {
            this.props.history.push("/animals")
            this.setState({animals:animals})
        })
    }

    // this function will make a post to the db for employees
    addEmployee = newEmployeeObj => {
        EmployeeManager.post(newEmployeeObj)
        .then(() => EmployeeManager.all())
        .then(employees => {
            this.props.history.push("/employees")
            this.setState({employees: employees})
        })
    }

    // this function will make a post request to the db for owners
    addOwner = newOwnerObj => {
        OwnerManager.post(newOwnerObj)
        .then(() => OwnerManager.all())
        .then(owners => {
            this.props.history.push("/owners")
            this.setState({owners:owners})
        })
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
                <Route path="/login" component={Login} />
                <Route exact path="/" render={(props) => {
                    if(this.isAuthenticated()){
                        return <LocationList locations={this.state.locations} />
                    }else{
                        return <Redirect to="/login" />
                    }
                }} />
                <Route path="/:locationId(\d+)" render={(props) => {
                    let location = this.state.locations.find( location => 
                        location.id === parseInt(props.match.params.locationId)
                    )
                    if(!location){
                        location ={
                            id:"404",
                            name: "Not Found",
                            address: "Lost on the web"
                        }
                    }
                    return <LocationDetail location={location} deleteLocation={this.deleteLocation}/>
                }}/>
                <Route exact path="/animals" render={(props) => {
                    if (this.isAuthenticated()){
                        return <AnimalList {...props} animals={this.state.animals} deleteAnimal={this.deleteAnimal} />
                    }else{
                        return <Redirect to="/login"/>
                    }
                }} />
                <Route path="/animals/new" render={(props) =>{
                    return <AnimalForm {...props} addAnimal={this.addAnimal} employees={this.state.employees}/>
                }}/>
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
                <Route exact path="/employees" render={(props) => {
                        if (this.isAuthenticated()) {
                            return <EmployeeList 
                                deleteEmployee={this.deleteEmployee}
                                {...props}
                                animals={this.state.animals}
                                employees={this.state.employees} />
                        } else {
                            return <Redirect to="/login" />
                        }
                }} />
                <Route path="/employees/new" render={(props) => {
                    return <EmployeeForm {...props} addEmployee={this.addEmployee} />
                }}/>
                <Route path="/employees/:employeeId(\d+)" render={(props) => {
                    let employee = this.state.employees.find(emp => 
                        emp.id === parseInt(props.match.params.employeeId)    
                    )

                    if(!employee){
                        employee = {
                            id: 404,
                            name: "Not Found"
                        }
                    }

                    return <EmployeeDetail employee={employee} 
                        deleteEmployee={this.deleteEmployee}/>
                }} />
                <Route exact path="/owners" render={(props) => {
                    if (this.isAuthenticated()){
                        return <OwnerList {...props} owners={this.state.owners} deleteOwner={this.deleteOwner} />
                    }else{
                        return <Redirect to="/login" />
                    }
                }} />
                <Route path="/owners/new" render={(props) => {
                    return <OwnerForm {...props} addOwner={this.addOwner} animals={this.state.animals}/>
                }} />
                <Route path="/owners/:ownersId(\d+)" render={(props) => {
                    let owner = this.state.owners.find(owner => 
                        owner.id === parseInt(props.match.params.ownersId))
                    if(!owner){
                        owner = {
                            id: "404",
                            name: "Not Found"
                        }
                    }

                    return <OwnerDetail owner={ owner } 
                    deleteOwner={this.deleteOwner} 
                    animals={this.state.animals}/>
                }} />
            </React.Fragment>
        )
    }
}
export default withRouter(ApplicationViews)
