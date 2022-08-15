import React ,{ useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import UserCards from './UserCards';
import { getUsers} from '../redux/action'
import LoadingCards from './Loading/LoadingCards';
import "./UserListeStyle.css"
// import GetOneUser from './GetOne/GetOneUser';


const UserListe=() => {


    const {User,loading}=useSelector(state=>state)
    const dispatch=useDispatch()
    useEffect(() => {
        dispatch(getUsers())
    },[])
    
    return (
    <div className='body'>
{   loading?(<LoadingCards/>):User&&React.Children.toArray(User.map(el=><UserCards user={el}/>))}
{/* <div>
{
    loading?(<LoadingCards/>):User&&React.Children.toArray(getOneUser?
        User.filter(el=>el._id===true).map(el=><GetOneUser user={el}/>)
        :User.map(el=>loading?(<LoadingCards/>):User&&React.Children.toArray(User.map(el=><UserCards user={el}/>))))
}
</div> */}
</div>
)}
export default UserListe