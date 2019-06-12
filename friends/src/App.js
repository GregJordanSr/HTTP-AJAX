import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import FriendsList from './components/FriendsList';


export default class App extends Component {
  constructor() {
    super();
    this.state = {
      friends: []
    };
  }

  componentDidMount() {
    axios
    .get("http://localhost:5000/friends")
    .then(resolve => {
      console.log(resolve);
       this.setState({ friends: resolve.data })
    })
    .catch(error => {
      console.log(error);
    })
  }

  render() {
    return (
      <div>
        <FriendsList friends={this.state.friends}/>
      </div>
    )
  }
}
