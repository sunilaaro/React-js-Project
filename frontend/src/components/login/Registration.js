import React, {Component} from 'react';
import { } from 'react-bootstrap';
import  { Link } from 'react-router-dom'
import './registration.css';

class Registration extends Component{
    constructor(props){
		super(props);
		this.state={
			title: 'SV Training SingUp',
			datas:[]
		}

	}
	componentDidMount(){
		this.refs.name.focus();
	  }
	  fSubmit = (e)=>{
		e.preventDefault();
		
	
		let datas = this.state.datas;
		let name= this.refs.name.value;
		let email= this.refs.email.value;
		let username= this.refs.username.value;
		let password= this.refs.password.value;

		let data = {
			name, email, username, password
		  }
		  datas.push(data);
		  console.log(data);
		//   fetch('http://localhost/svproject/index.php', {
		// 	  method: 'POST',
		// 	  mode: "cors",
		// 	  body: JSON.stringify(data),
			  
		//   }).then(res=>{
		// 	  res.json().then(txt=>console.log(txt))
		//   })


		  fetch('http://localhost/svreactphp/backend/index.php', {
			method: 'POST',
			mode: 'cors',
			headers: { 'Accept': 'application/json' },
			body: JSON.stringify({data})
			}).then((response) => response.text())
			.then((responseData) => { alert("Response: " + responseData); })
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
						
						<div className="form-group">
							<label for="name" className="cols-sm-2 control-label">Your Name</label>
							<div className="cols-sm-10">
								<div className="input-group">
									<span className="input-group-addon"><i className="fa fa-user fa" aria-hidden="true"></i></span>
									<input type="text" className="form-control" ref="name"  id="name"  placeholder="Enter your Name"/>
								</div>
							</div>
						</div>

						<div className="form-group">
							<label for="email" className="cols-sm-2 control-label">Your Email</label>
							<div className="cols-sm-10">
								<div className="input-group">
									<span className="input-group-addon"><i className="fa fa-envelope fa" aria-hidden="true"></i></span>
									<input type="text" className="form-control" ref="email" id="email"  placeholder="Enter your Email"/>
								</div>
							</div>
						</div>

						<div className="form-group">
							<label for="username" className="cols-sm-2 control-label">Username</label>
							<div className="cols-sm-10">
								<div className="input-group">
									<span className="input-group-addon"><i className="fa fa-users fa" aria-hidden="true"></i></span>
									<input type="text" className="form-control" ref="username" id="username"  placeholder="Enter your Username"/>
								</div>
							</div>
						</div>

						<div className="form-group">
							<label for="password" className="cols-sm-2 control-label">Password</label>
							<div className="cols-sm-10">
								<div className="input-group">
									<span className="input-group-addon"><i className="fa fa-lock fa-lg" aria-hidden="true"></i></span>
									<input type="password" className="form-control" ref="password" id="password"  placeholder="Enter your Password"/>
								</div>
							</div>
						</div>

						<div className="form-group">
							<label for="confirm" className="cols-sm-2 control-label">Confirm Password</label>
							<div className="cols-sm-10">
								<div className="input-group">
									<span className="input-group-addon"><i class="fa fa-lock fa-lg" aria-hidden="true"></i></span>
									<input type="password" className="form-control" ref="confirmpassword" id="confirm"  placeholder="Confirm your Password"/>
								</div>
							</div>
						</div>

						<div className="form-group ">
							<button type="button" onClick={(e)=>this.fSubmit(e)} className="btn btn-primary btn-lg btn-block login-button">Register</button>
						</div>
						<div className="login-register">
				            <Link to="Login">Login</Link>
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

export default Registration;


