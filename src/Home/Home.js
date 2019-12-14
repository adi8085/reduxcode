import React, { Component } from 'react';
import './home.css';

class Home extends Component {
	constructor(props){
		console.log(props);
		
		super(props);
	

        }
        
        render() {
            return (
                <div>
                   <div className="login">
                   <h2>Home</h2>
                   </div>
                </div>
            )
    
        }
    }
    
export default Home;