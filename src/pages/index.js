import React from "react"
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from "../components/Login.component";
import SignUp from "../components/signup.component";
import  Home  from "../components/Home.component";
import "./styles.css"

export default function App() {
  return(
    <Router>
    <div className="App">
     
      <nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <div className="container" style={{ margin:"10px 0px"}}>
          <Link className="navbar-brand" to={"/login"}>positronX.io</Link>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to={"/login"}>Login</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/signup"}>Sign up</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/home"}>Home</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="auth-wrapper" style={{marginTop:'80px', flexDirection:'row', flex:1, backgroundColor:'yellow'}}>
        <div className="auth-inner" style={{ justifyContent:'center' , alignItems:'center'}}>
          <Switch>
            <Route exact path='/' component={Login}  />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={SignUp} />
            <Route path="/home" component={Home}/>

          </Switch>
        </div>
      </div>
    </div>
    </Router>
 
  )
 
}
