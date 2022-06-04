import React, { useState } from "react"
import { Card, Button, Alert, Navbar } from "react-bootstrap"
import { useAuth } from "../backends/AuthCont"
import { Link, useHistory } from "react-router-dom"
import './styling.css'
import { Nav } from "react-bootstrap"
import { NavDropdown } from "react-bootstrap"

export default function Dashboard() {
  const [error, setError] = useState("")
  const { currentUser, logout } = useAuth()
  const history = useHistory()

  async function handleLogout() {
    setError("")

    try {
      await logout()
      history.push("/login")
    } catch {
      setError("Failed to log out")
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
          <NavDropdown title="Classes">
            <NavDropdown.Item href="Classes/Class1">Class 1</NavDropdown.Item>
            <NavDropdown.Item href="Classes/Class2">Class 2</NavDropdown.Item>
            <NavDropdown.Item href="Classes/Class3">Class 3</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="Account">Account</Nav.Link>
          <Button variant="link" onClick={handleLogout}>
          Log Out
        </Button>
        </Nav>
        </Navbar.Collapse>
      </Navbar>


      <div className="content">
        <h1>Welcome to 3MS Face Recognition System</h1>

        <h2>Student Registry</h2>
        <form>
          <label for='studentName'>Write Student Name</label><br></br>
          <input type="text" id="studentName" name="studentName"></input><br></br>
          <label for='studentPicture'>Upload Student Picture</label><br></br>
          <input type="file" id="studentPicture" name="studentPicture" accept="image/*"></input><br></br><br></br>
          <input type="submit" name="Submit"></input>
        </form>

        <h2>Teacher Registry</h2>
        <form>
          <label for='teacherName'>Write Teacher Name</label><br></br>
          <input type="text" id="teacherName" name="teacherName"></input><br></br><br></br>
          <input type="submit" name="Submit"></input>
        </form>

        <h2>Lesson Registry</h2>
        <form>
          <label for='lessonName'>Write Lesson Name</label><br></br>
          <input type="text" id="lessonName" name="lessonName"></input><br></br>
          <label for='teacherID'>Write Teacher Name</label><br></br>
          <input type="text" id="teacherID" name="teacherID"></input><br></br><br></br>
          <input type="submit" name="Submit"></input>
        </form>

        <h2>Attendance Registry</h2>
      </div>
   </div>
  )
}
