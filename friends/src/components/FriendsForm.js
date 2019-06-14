import React from 'react'
import './friendsForm.css';

 const FriendsForm = () => {
    return (
        <div className="form-container">
            <form className="form">
                Friend's Name:
                <br/>
                <input type="text" placeholder="Name"/><br/>
                Friend's Age:
                <br/>
                <input type="text" placeholder="Age"/><br/>
                Friend's Email:
                <br/>
                <input type="email" placeholder="Email"/><br/>
                <br/>
            </form>
            <div className="update-button"> 
                <button>Update</button>
            </div>
        
        </div>
    )
}
export default FriendsForm;