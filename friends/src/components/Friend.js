import React from 'react';


 const Friend = (props) => {
    return (
        <div>
            <div className="friend-card" key={props.friend.id}>
                    <h3>Name: {props.friend.name}</h3>
                    <h3>Age: {props.friend.age}</h3>
                    <h4>Email: {props.friend.email}</h4>
                </div>
        </div>
    )
}
export default Friend;