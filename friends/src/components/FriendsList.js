import React from 'react';
import FriendsForm from './FriendsForm';
import Friend from './Friend';




const FriendsList = (props) => {
    return (
        
        <div className="friends-list">
            <FriendsForm />
            {props.friends.map(friend => 
                <Friend key={friend.id} friend={friend}/>
            )}
        </div>

    )
}

export default FriendsList;


