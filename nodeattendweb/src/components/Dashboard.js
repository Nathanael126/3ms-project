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
        This is a content
      </div>
   </div>
  )
}
