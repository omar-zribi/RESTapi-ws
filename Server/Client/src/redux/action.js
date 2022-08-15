import { ADD, DELETE, EDIT, GET, GETONE } from "./actionTypes";
import axios from "axios";

export const getUsers = () => async (dispatch) => {
  try {
    const res = await axios.get("/getall");
    dispatch({
      type: GET,
      payload: res.data
    });
  } catch (error) {
    console.log(error);
  }
};
export const deleteUser=(_id)=>async(dispatch)=>{
  try {
      const res=await axios.delete(`/delete/${_id}`)
      dispatch({
        type:DELETE,  
        payload:res.data
      })
  } catch (error) {
    alert("delete Error");
  }
};
export const addUser=(newUser)=>async(dispatch)=>{
  try {
    const res=await axios.post('/add',newUser)
     dispatch({
      type:ADD,
      payload:res.data,
      
     })
  } catch (error) {
    alert('Add Eroor')
  }
};
export const editUser=(editUser)=>async(dispatch)=>{
  try {
    const res=await axios.put(`/edit/${editUser._id}`,editUser)
    dispatch({
      type:EDIT,
      payload:res.data
    })
  } catch (error) {
    alert ('Edit Error')
  }
}

export const getOneUser=(theUser)=>async(dispatch)=>{ 
  try {
    const res=await axios.get(`/get/${theUser._id}`,theUser)
    dispatch({
      type:GETONE,
      payload:res.data
    })
    
  } catch (error) {
    alert('Get The User Error')
  }
}