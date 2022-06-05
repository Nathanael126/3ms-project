import React, { useState } from "react";
import axios from "axios";
import { Card, Button, Alert, Navbar, Form } from "react-bootstrap";
import { useAuth } from "../backends/AuthCont";
import { Link, useHistory } from "react-router-dom";
import './styling.css';
import { Nav } from "react-bootstrap";
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
          <table className="studentdatabase">
                <thead>
                    <tr>
                        <th>Class</th>
                        <th>Attendance</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                      <td>Class 1 - WDOASNDO</td>
                        <td>
                        <Link to={'/studDatabase'} style={{marginRight: "10px"}}>Edit</Link>
                        </td>
                    </tr>
                    <tr>
                        <td>Class 2 - NONOMNKOP</td>
                        <td>
                        <Link to={'/studDatabase'} style={{marginRight: "10px"}}>Edit</Link>
                        </td>
                    </tr>
                </tbody>
            </table>
          </Card.Body>
        </Card>
      </Container>
      </div>
   </div>
  )
}
