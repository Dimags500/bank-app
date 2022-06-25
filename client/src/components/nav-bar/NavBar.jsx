import React from "react";
import {
  BrowserRouter as Router,
  Routes ,
  Route,
  Link
} from "react-router-dom";
import Home from "../../pages/home/Home";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import UserProfile from "../../pages/user/UserProfile";


export default function  NavBar  () {

  return (

    <Router>
  <div>
        <Container>
      <Navbar expand="sm" variant="dark" bg="light">
        <Container>
          <Navbar.Brand > <Link to="/">Home</Link></Navbar.Brand>
          <Navbar.Brand ><Link to="/about">About</Link></Navbar.Brand>
          <Navbar.Brand > <Link to="/users">Users</Link></Navbar.Brand>
          <Navbar.Brand > <Link to="/user">Create User</Link></Navbar.Brand>
          <Navbar.Brand > <Link to="/account">Create Account</Link></Navbar.Brand>
          <Navbar.Brand > <Link to="/Admin">Admin</Link></Navbar.Brand>

        </Container>
      </Navbar>
            </Container>

        <Routes >
          <Route path="/about">
            {/* <About /> */}
          </Route>
          <Route path="/users">
            {/* <Users /> */}
          </Route>
          <Route path="/" element={<Home />}/>
          <Route path="/user/:id" element={<UserProfile />}/>

        </Routes >
      </div>
    </Router>
  );
}
