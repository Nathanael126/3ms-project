import React, { useState } from "react";
import axios from "axios";
import { Card, Button, Alert, Navbar, Form } from "react-bootstrap";
import { useAuth } from "../backends/AuthCont";
import { Link, useHistory } from "react-router-dom";
import './styling.css';
import { Nav } from "react-bootstrap";
import { NavDropdown } from "react-bootstrap";
import { Container } from "react-bootstrap";

export default function Dashboard() {
  // To Do: connect to teacher table which is connected to the firebase, which will output different ammount of classes specific to the teacher. 
  // Logout functions
  const [error, setError] = useState("");
  const { currentUser, logout } = useAuth();
  const history = useHistory();

  async function handleLogout() {
    setError("")

    try {
      await logout();
      history.push("/login");
    } catch {
      setError("Failed to log out");
    }
  }

  // PHP Input handling
  const [inputs,setInputs] = useState({})

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]:value}));
  }

  const handleSubmit = (event) =>{
    event.preventDefault();
    // axios.post
    console.log(inputs);
  }
  return (

    <div className="page">
      <Navbar bg='basecolor' variant="dark" sticky='top' expand='sm' collapseOnSelect >
        <Navbar.Brand>
        <img src={require('../images/3msFaceRecog.png')} alt="logo"/>
          3msFaceRecog
        </Navbar.Brand>

        <Navbar.Toggle />
        <Navbar.Collapse className="right-align">
        <Nav>
          <Nav.Link href="/">Registry</Nav.Link>
          <Nav.Link href="StudClass">Classes</Nav.Link>
          <Nav.Link href="Account">Account</Nav.Link>
          <Button variant="link" onClick={handleLogout}>
          Log Out
        </Button>
        </Nav>
        </Navbar.Collapse>
      </Navbar>


      <div className="content">
      <Container className="insertregistry">
        <Card className="registrybody">
          <Card.Body>
          <h1 className="registrytitle">Select Student Class</h1><br/>
          <div>
            <h2>Class 1 - get name from sql - this one works</h2> 
            <Button href='StudDatabase'>Open Database</Button>
            <br/><br/><h2>Class 2 - get name from sql</h2> 
            <Button href='/'>Open Database</Button>
            <br/><br/><h2>Class 3 - get name from sql</h2> 
            <Button href='/'>Open Database</Button>
          </div>  
          </Card.Body>
        </Card>
      </Container>
      </div>
   </div>
  )
}
