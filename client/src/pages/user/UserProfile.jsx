import {useState, useEffect}from 'react' ;
import {getUserById} from '../../services/users.service' ;
import { Routes, Route, useParams } from 'react-router-dom';

export default function UserProfile() {

const [user, setUser] = useState({}) ;
let {id}= useParams();

useEffect(() => {
  

  return async() => {
    const data = await getUserById(id) ;
    setUser(data);
  }
}, [])


function showUserDeteils(user){
    let deteils = Object.entries(user) ;

    return deteils.map((item, i ) => <p key={i} >{item[1]}</p> ) ;
}


    return(
    <>
    { showUserDeteils(user)}
    </>)
}