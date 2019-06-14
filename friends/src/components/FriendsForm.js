import React from 'react'
import './friendsForm.css';

 class FriendsForm extends React.Component {
    render() {
        return (
            <div className="form-container">
                <form className="form">
                    Friend's Name:
                    <br/>
                    <input type="text" placeholder="Name" required /><br/>
                    Friend's Age:
                    <br/>
                    <input type="text" placeholder="Age" required /><br/>
                    Friend's Email:
                    <br/>
                    <input type="email" placeholder="Email" required /><br/>
                    <br/>
                </form>
                <div className="update-button"> 
                    <button>Add</button>
                </div>
            
            </div>
        )
    }
}
export default FriendsForm;