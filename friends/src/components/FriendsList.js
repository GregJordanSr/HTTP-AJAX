import React from 'react';
import FriendsForm from './FriendsForm';



const FriendsList = (props) => {
    return (
        
        <div className="friend-container">
            <br/>
            <br/>
            <FriendsForm />
            <h1>Fake friends</h1> 
            <br/>
            {props.friends.map(friend => (
                <div className="friend-card" key={friend.id}>
                    <h1>Name: {friend.name}</h1>
                    <h2>Age: {friend.age}</h2>
                    <h2>Email: {friend.email}</h2>
                </div>
            ))}
            
        </div>

    )
}

export default FriendsList;


