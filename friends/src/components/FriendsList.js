import React from 'react';
import FriendsForm from './FriendsForm';



const FriendsList = (props) => {
    return (
        
        <div>
            <h1>Fake friends</h1> 
            <br/>
            {props.friends.map(friend => (
                <div className="friend-card" key={friend.id}>
                    <h1>Id: {friend.id}</h1>
                    <h1>Name: {friend.name}</h1>
                    <h2>Age: {friend.age}</h2>
                    <h2>Email: {friend.email}</h2>
                </div>
            ))}
            <FriendsForm />
        </div>

    )
}

export default FriendsList;


