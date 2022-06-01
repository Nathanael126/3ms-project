import React from "react"
import Register from "./FirebaseRegister"
import { AuthProvider } from "../backends/AuthCont"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import Dashboard from "./Dashboard"
import Login from "./Login"
import PrivRoute from "./PrivateRoute"
import ForgotPassword from "./ForgotPassword"
import UpdateProfile from "./UpdateProfile"
import Account from './Account'

function App() {
  return (
      <>
        <BrowserRouter>
          <AuthProvider>
            <Switch>
              <PrivRoute exact path="/" component={Dashboard} />
              <PrivRoute path="/update-profile" component={UpdateProfile} />
              <PrivRoute path="/Account" component={Account} />
              <Route path="/signup" component={Register} />
              <Route path="/login" component={Login} />
              <Route path="/forgot-password" component={ForgotPassword} />
            </Switch>
          </AuthProvider>
        </BrowserRouter>
      </>
  )
}

export default App
