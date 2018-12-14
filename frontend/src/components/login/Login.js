import React, { Component } from "react";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import  { Link } from 'react-router-dom'
//import Registration from './Registration.js';
//import PostData from './PostData.js';

import './registration.css';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };
  }

  validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 0;
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  
  handleSubmit = event => {
    event.preventDefault();
    let email=this.state.email;
    let password=this.state.password;
    let data = {
      email,
      password
      };
      //datas.push(data);
		  console.log(data);
    // if(this.state.username && this.state.password){
    //   PostData('handleSubmit',this.state).then((result) => {
    //   let responseJson = result;
    //   if(responseJson.userData){
    //   sessionStorage.setItem('userData',JSON.stringify(responseJson));
    //   this.setState({redirectToReferrer: true});
    //   }
    //   });
    //   }

    fetch('http://localhost/svreactphp/backend/login/login.php', {
			method: 'POST',
		  //mode: 'no-cors',
			headers: { 'Accept': 'application/text' },
			body: JSON.stringify({data})
			}).then((response) => response.text())
			.then((responseData) => { 
        console.log("Response: " + responseData);
        //alert('Response: ' + responseData);
        const userData = responseData;
        //const userResult= JSON.parse(userData);
        console.log(userData);
        //sessionStorage.setItem(userResult);
        //localStorage.setItem( 'objectToPass', userResult );

        if(responseData==1){
          
          window.location  = "http://localhost:3000/welcome";
          
        }else{
          alert('Response: ' + responseData);
        }
       })
      .catch((err) => { console.log(err); });
   }

  render() {
    return (
      <div className="Login main-login h-100 row align-items-center">
         <form onSubmit={this.handleSubmit}>
          <FormGroup controlId="email" bsSize="large">
            <ControlLabel>Email</ControlLabel>
            <FormControl
              autoFocus
              type="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup controlId="password" bsSize="large">
            <ControlLabel>Password</ControlLabel>
            <FormControl
              value={this.state.password}
              onChange={this.handleChange}
              type="password"
            />
          </FormGroup>
          <Button
            block
            bsSize="large" class="btn btn danger"
            disabled={!this.validateForm()}
            type="submit"
          >
            Login
          </Button>
          <p>Don't have an account? <Link to="Registration">Sign up now</Link>.</p>
        </form> 

    </div>
    );
  }
}
export default Login;