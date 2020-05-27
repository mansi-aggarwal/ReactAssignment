import React, { Component } from 'react'
import ReactDom from 'react-dom';
import Faker from 'faker';
import SearchBar from './SearchBar';

class App extends Component {
    state = {
        users: [],
       
        found :false
    }

    componentDidMount() {
        for (let i = 0; i < 15; i++) {

            const user = {
                name: Faker.name.firstName(),
                lastName: Faker.name.lastName(),
                email: Faker.internet.email().toLowerCase(),
                avatar: "https://picsum.photos/200/300?random=" + Math.random() * 100,
                // avatar:Faker.internet.avatar(),
                description: Faker.name.jobTitle(),
                city: Faker.address.city(),
                streetName: Faker.address.streetName(),
                country: Faker.address.country(),
                company: Faker.company.companyName(),
            }



            this.setState(prevUser => ({
                users: [...prevUser.users, user],
            }))
        }
    }
    


    search = (argument) => {
        console.log(argument)

        var j = -1;
        for(let i=0; i<this.state.users.length; i++){

            var a = this.state.users[i].name +" "+ this.state.users[i].lastName;
            if (a.toLowerCase().includes(argument.toLowerCase())) {
                j = i;

                this.state.users.splice(0, 0, this.state.users.splice(i, 1)[0]);

                this.setState({
                    found: true,

                })
                break;
            }
            
        }


        if (j === -1) {
            alert("Not Found")
        }
        else if ( this.state.found === true) {
            this.setState({
                found : false

            })
        }


        
    }
    getUsers(user) {
        return (
            <div class="center" style={{ padding: '10px', 'border-top': 'double 5px #1f7813', 'border-left': 'double 5px #1f7813', 'border-right': 'double 5px #1f7813'  }}>
                <img src={user.avatar} alt={user.name} width="180" height="180" />
                <h4>Name: {user.name} {user.lastName}</h4>
                <h4>Email: {user.email}</h4>
                <h4>Description: {user.description}</h4>
                <h4>Address: {user.streetName}, {user.city}, {user.country}</h4>
                <h4>Company: {user.company}</h4>
            </div>
        )
    }
    

    render() {
        return (
            <span>
            <SearchBar className="search" search={this.search} />
            <div>{this.state.users.map(user => this.getUsers(user))}</div>
            </span>
        )
    }
}

ReactDom.render(
    <App/>,
    document.getElementById('root')
)