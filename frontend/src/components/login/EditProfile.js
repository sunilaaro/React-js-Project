import React, {Component} from 'react';
import { } from 'react-bootstrap';
import  { Link } from 'react-router-dom'
import './registration.css';

class EditProfile extends Component{
    constructor(props){
		super(props);
		this.state={
			title: 'User Profile Update!',
			datas:[]
		}

	}
	componentDidMount(){
        let id = sessionStorage.getItem('id') ? sessionStorage.getItem('id') : "";
        let email = sessionStorage.getItem('email') ? sessionStorage.getItem('email') : "";
        let username = sessionStorage.getItem('username') ? sessionStorage.getItem('username') : "";
        let name = sessionStorage.getItem('name') ? sessionStorage.getItem('name') : "";
        let password = sessionStorage.getItem('password') ? sessionStorage.getItem('password') : "";

        this.setState({
            id:id,
            name:name,
            email: email,
            username:username,
            password:password

        });
    }
	  
	  EditUser = (e)=>{
		e.preventDefault();
		
	
		let datas = this.state.datas;
		let id= this.refs.id.value;
		let name= this.refs.name.value;
		let email= this.refs.email.value;
		let username= this.refs.username.value;
		let password= this.refs.password.value;

		let data = {
			id, name, email, username, password
		  }
		  datas.push(data);
          console.log(data);
          
		  fetch('http://localhost/svreactphp/backend/login/update.php', {
			method: 'PUT',
			mode: 'cors',
			headers: { 'Accept': 'application/json' },
			body: JSON.stringify({data})
			}).then((response) => response.text())
			.then((responseData) => { alert("Response: " + responseData); 
			if(responseData){
				window.location  = "http://localhost:3000/login"
			}
		})
		    		
			.catch((err) => { console.log(err); });
		  
	  }

    render(){
        return(
            <div>
                <div className="container">
			<div className="row main">
				<div className="panel-heading">
	               <div className="panel-title text-center">
	               		<h1 className="title">{this.state.title}</h1>
	               		<hr />
	               	</div>
	            </div> 
				<div className="main-login main-center">
					<form className="form-horizontal" method="post" action="#" ref="myform">
					<input type="hidden" className="form-control" ref="id"  id="id"  value={this.state.id} />
						<div className="form-group">
							<label for="name" className="cols-sm-2 control-label">Your Name</label>
							<div className="cols-sm-10">
								<div className="input-group">
									<span className="input-group-addon"><i className="fa fa-user fa" aria-hidden="true"></i></span>
									<input type="text" className="form-control" ref="name"  id="name"  defaultValue={this.state.name} />
								</div>
							</div>
						</div>

						<div className="form-group">
							<label for="email" className="cols-sm-2 control-label">Your Email</label>
							<div className="cols-sm-10">
								<div className="input-group">
									<span className="input-group-addon"><i className="fa fa-envelope fa" aria-hidden="true"></i></span>
									<input type="text" className="form-control" ref="email" id="email" defaultValue={this.state.email} />
								</div>
							</div>
						</div>

						<div className="form-group">
							<label for="username" className="cols-sm-2 control-label">Username</label>
							<div className="cols-sm-10">
								<div className="input-group">
									<span className="input-group-addon"><i className="fa fa-users fa" aria-hidden="true"></i></span>
									<input type="text" className="form-control" ref="username" id="username"  defaultValue={this.state.username} />
								</div>
							</div>
						</div>

						<div className="form-group">
							<label for="password" className="cols-sm-2 control-label">Password</label>
							<div className="cols-sm-10">
								<div className="input-group">
									<span className="input-group-addon"><i className="fa fa-lock fa-lg" aria-hidden="true"></i></span>
									<input type="password" className="form-control" ref="password" id="password"  defaultValue={this.state.password}/>
								</div>
							</div>
						</div>
						<div className="form-group ">
							<button type="button" onClick={(e)=>this.EditUser(e)} className="btn btn-primary btn-lg btn-block login-button">Update</button>
						</div>
						<div className="login-register">
				            <Link to="/Login">Login</Link>
				         </div>
					</form>
				</div>
			</div>
		</div>

		<script type="text/javascript" src="assets/js/bootstrap.js"></script>
            </div>
            
        );
    }
}

export default EditProfile;


