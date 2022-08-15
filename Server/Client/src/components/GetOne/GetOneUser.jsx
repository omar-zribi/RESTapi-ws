import React from 'react'
import "./GetOneUser.css";


const GetOneUser = ({user}) => {
  
  return (
    <div class="contact-form-wrapper">
      <form>
        <div class="form-item">
          <h1>{user.fullName}</h1>
          <label>Name:</label>
        </div>
        <div class="form-item">
         <h1>{user.email}</h1>
          <label>Email:</label>
        </div>
        <div class="form-item">
         <h1>{user.phone}</h1>
          <label>Phone:</label>
        </div>
        <button class="submit-btn">return</button>  
      </form>
    </div>
  )
}

export default GetOneUser