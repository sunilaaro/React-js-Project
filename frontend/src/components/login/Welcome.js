import React, {Component} from 'react';
import { } from 'react-bootstrap';

class Welcome extends Component{
    constructor(props) {
        super(props);
    
        this.state = {
          email: "",
          password: ""
        };
        let id=sessionStorage.getItem('id');
        console.log(id);
    }
    
   render(){
       return(
           <div>
             <div class="page-header">
                <h1>Hi, <b></b>. Welcome to our site.</h1>
             </div>
                <p>
                    <a href="reset-password.php" class="btn btn-warning">Reset Your Password</a>
                    <a href="http://localhost:3000/login" class="btn btn-danger">Sign Out of Your Account</a>
                </p>
           </div>
       );
   }
}

export default Welcome;