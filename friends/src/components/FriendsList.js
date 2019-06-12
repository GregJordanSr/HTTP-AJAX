import React from 'react';



const FriendsList = (props) => {
    return (
        <div>
            {props.friends.map(friend => (
                <div className="friend-card" key={friend.id}>
                    <h1>friend.id</h1>
                    <h1>{friend.name}</h1>
                    <h2>{friend.age}</h2>
                    <h2>{friend.email}</h2>
                </div>
            ))}
             
               
            
            <h1>FriendsList</h1>
        </div>
    )
}

export default FriendsList


