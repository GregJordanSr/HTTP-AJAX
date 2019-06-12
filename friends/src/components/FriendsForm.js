import React from 'react'

 const FriendsForm = () => {
    return (
        <div className="form-container">
           
            <form className="form">Friend's Id:<br/>
                <input type="text" placeholder="Id"/><br/>
                Friend's Name:<br/>
                <input type="text" placeholder="Name"/><br/>
                Friend's Age:<br/>
                <input type="text" placeholder="Age"/><br/>
                Friend's Email:<br/>
                <input type="email" placeholder="Email"/><br/>
            </form>
        
        </div>
    )
}
export default FriendsForm;