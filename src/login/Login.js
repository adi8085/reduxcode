import React, { Component } from 'react';
import './Login.css';
import { Route, Link, BrowserRouter as Routing , useHistory} from 'react-router-dom'

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import { login } from '../Actions/LoginAction';



class Login extends Component {
	constructor(props){
		console.log(props);
		
		super(props);
	

        }

        login(){
          
            this.props.history.push('/Home')
}
componentWillReceiveProps(nextProps){
  console.log(nextProps);
  if(nextProps.userinfo){
      console.log(nextProps.userinfo);
      
  }
  
  }
componentDidMount(){
    const sendrequest={
          name:" token",
          password: "web"
        
      }
      this.props.login(sendrequest)

}
        
        render() {
            return (
                <div>
                   <div className="login">
                   <h2>Login Form</h2>

                   <form>
                        <div className="imgcontainer">
                           
                        </div>

                        <div className="container">
                            <label ><b>Username</b></label>
                            <input type="text" placeholder="Enter Username" name="uname" />

                            <label ><b>Password</b></label>
                            <input type="password" placeholder="Enter Password" name="psw" />
                                
                            <button type="submit" onClick={()=>this.login()}>Login</button>
                          
                        </div>

                        <div className="container" >
                            <button type="button" className="cancelbtn">Cancel</button>
                            <span className="psw">Forgot <a href="#">password?</a></span>
                        </div>
                        </form>

                   </div>
                </div>
            )
    
        }
    }

const mapStateToProps = (state) => {
    console.log(state);
    
return {
    userinfo: state.LoginReducer.userRole,
    // dialogData: state.ShowDialog.data
};
};

const mapDispatchToProps = (dispatch) => {
return bindActionCreators({
    login,
}, dispatch)
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
      