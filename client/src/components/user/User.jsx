import {useState, useEffect}from 'react' ;
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from "react-router-dom";


import React from 'react'
import getRandomImage from '../../services/image.service';
// const paragraph = <ImageComponent src='https://cdn-icons-png.flaticon.com/512/149/149071.png' />

const avatar = 'https://cdn-icons-png.flaticon.com/512/149/149071.png';
const User = (props) => {

    const [user ,setUser] = useState([]);

    let navigate = useNavigate();

    useEffect(() => {
    return ()=>{

        setUser(props.data);
        console.log(props.data._id);
    }
      }, [props])
    
//navigate(`/user${user.item._id}`)
  
    return(
        // <div>{props.data !== undefined ? <p>{props.data.firstName}</p> : <p>no user</p>}</div>

        <div >
             <Card style={{ width: '10rem' }}>
      <Card.Img variant="top" src={ props.data.avatar.length > 10  ? user.avatar :  avatar } />
      <Card.Body>
        <Card.Title>{user.firstName}</Card.Title>
        <Card.Text>{user.info}</Card.Text>
        <Button variant="primary" onClick={() => { navigate(`/user/${user._id}`)}}>Show User</Button>
      </Card.Body>
    </Card>
        </div>
    )
    }

export default User 

