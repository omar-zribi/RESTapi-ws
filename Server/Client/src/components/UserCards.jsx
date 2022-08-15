import React from "react";
import { deleteUser, getOneUser, getUsers } from "../redux/action";
import { useDispatch } from 'react-redux';
import "./UserCardsStyle.css";
import EditUser from "./EDIT/EditUser";
// import { GETONE } from "../redux/actionTypes";
// import GetOneUser from "./GetOne/GetOneUser";

const UserCards = ({ user }) => {
const dispatch=useDispatch();
  return (
    <div className="card">
      <div className="content">
        <h2 id={user.sex === "male" ? "male" : "female"} className="title">
      <p >{`REF: ${user._id.substring(
        user._id.length - 4,
        user._id.length
      )}`}</p>
          {user.fullName}
        </h2>
        <span>
          <h4>E-mail</h4>
          <h6 className="copy" id="email">
            {user.email}{" "}
          </h6>{" "}
        </span>
        <span>
          <h4>Phone Number</h4>
          <h6 className="copy" id="phone">
            {user.phone}
          </h6>
        </span>
        <button id="delete" onClick={()=>{dispatch(deleteUser(user._id));dispatch(getUsers())}}>
          Delete</button>
      <EditUser user={user}/>
      <div>
    <button id="getOne" onClick={()=>{dispatch(getOneUser(/*user._id*/))}}>only this user</button>
        </div>
      </div>
    </div>
  );
};

export default UserCards;
