import React from 'react';



const FriendsList = (props) => {
    return (
        <div>
            {props.friends.map(friend => (
                <div className="friend-card" key={friend.id}>
                    <h1>Id: {friend.id}</h1>
                    <h1>Name: {friend.name}</h1>
                    <h2>Age: {friend.age}</h2>
                    <h2>Email: {friend.email}</h2>
                </div>
            ))}
             
               
            
            <h1>FriendsList</h1>
        </div>
    )
}

export default FriendsList


