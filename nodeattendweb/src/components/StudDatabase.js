import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card, Button, Alert, Navbar, Form } from "react-bootstrap";
import { useAuth } from "../backends/AuthCont";
import { Link, useHistory } from "react-router-dom";
import './styling.css';
import { Nav } from "react-bootstrap";
import { Container } from "react-bootstrap";

export default function Dashboard() {

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

  //database functions
  const [users, setUsers] = useState([]);
    useEffect(() => {
        getStudents();
    }, []);
  
  function getStudents(){
    axios.get('http://localhost/PHP-Stuff-3ms/user').then(function(response){
      console.log(response.data);
    });
  }
  function deleteStudent(userID){
    axios.delete('http://localhost/PHP-Stuff-3ms/user').then(function(response){
      console.log(response.data);
      getStudents();
    });
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
      <Container className="databasestyling">
        <Card className="databasebody">
          <Card.Body>
          <h1 className="registrytitle">Class 1 - WAOSUND</h1><br/>
          <table className="studentdatabase">
                <thead>
                    <tr>
                      <td colspan="8"  style={{textAlign:'center'}}>
                        <Link to={'user/${user.id}/edit'}>Check Attendance</Link>
                      </td>
                    </tr>
                    <tr>
                        <th>Student ID</th>
                        <th>Student Name</th>
                        <th>Student Photo</th>
                        <th>Session 1</th>
                        <th>Session 2</th>
                        <th>Session 3</th>
                        <th>Session 4</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, key) =>
                        <tr key={key}>
                            <td>{user.studentID}</td>
                            <td>{user.studentName}</td>
                            <td>{user.studentPicture}</td>
                            <td>{user.studentSession1}</td>
                            <td>{user.studentSession1}</td>
                            <td>{user.studentSession1}</td>
                            <td>{user.studentSession1}</td>
                            <td>
                                <button onClick={() => deleteStudent(user.id)}>Delete</button>
                            </td>
                        </tr>
                    )}
                    
                </tbody>
            </table>
          </Card.Body>
        </Card>
      </Container>
      </div>
   </div>
  )
}
