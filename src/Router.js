import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { Route, Link, BrowserRouter as Routing} from 'react-router-dom'


import Login from './login/Login'
import Home from './Home/Home'
import About from './About/About'
class Router extends React.Component{
  render(){
    return(
      <Routing>
      <div>
        <Route exact path="/" component={Login} />
        <Route exact path="/Home" component={Home} />
        <Route exact path="/About" component={About} />

       
      </div>
    </Routing>
    )
  }

}
 
export default Router;
