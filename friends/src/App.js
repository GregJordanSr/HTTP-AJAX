import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import FriendsList from './components/FriendsList';

import FriendsForm from './components/FriendsForm';


export default class App extends Component {
    state = {
      friends: []
    };
  

  componentDidMount() {
    axios
    .get("http://localhost:5000/friends")
    .then(response => {
      console.log(response);
       this.setState({ friends: response.data })
    })
    .catch(error => {
      console.log(error);
        this.setState({ error: error})
    })
  }

  render() {
    return (
      <div className="App">
        <h2>Friends List</h2>
        <FriendsForm />
        <FriendsList friends={this.state.friends}/>
      </div>
    )
  }
}
