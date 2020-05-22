import React, { Component } from 'react'
import Faker from 'faker'

class App extends Component {
    state = { 
      users: [] ,
    }

  componentDidMount() {
    for (let i = 0; i < 15; i++) {
     
      const user = {
        name: Faker.name.firstName(),
        lastName: Faker.name.lastName(),
        email: Faker.internet.email(),
        avatar: "https://picsum.photos/200/300?random=" + Math.random()*100 ,
        // avatar: Faker.internet.avatar(),
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


  getUsers(user) {
    return (
      <div class="center" style={{ padding: '10px' ,border: 'solid 6px #eee'}}>
        <img src={user.avatar} alt={user.name} width="100" height="100" />
        <h4>Name: {user.name} {user.lastName}</h4>
        <h4>Email: {user.email}</h4>
        <h4>Description: {user.description}</h4>
        <h4>Address: {user.streetName}, {user.city}, {user.country}</h4>
        <h4>Company: {user.company}</h4>
      </div>
    )
  }


  render() {
    return( 
    <div> {this.state.users.map(user => this.getUsers(user))} </div>
    )
  }
}

export default App;