import React, {Component} from 'react';
import { Tab,Row,Col,Nav,NavItem,Table,Tabs,Image} from 'react-bootstrap';
import { Link} from "react-router-dom";
import './welcome.css';
import EditProfile from './EditProfile';

class Welcome extends Component{
    constructor(props) {
        super(props);
    
        this.state = {
          email: "",
          password: "",
          redirectToReferrer:false
        };
        
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

    EditProfile= event => {
     return(
         alert('hgh')
     );
    }
    
    
   render(){
    //    if (this.state.email==''){
    //        return(
    //            window.location ="/login"
    //        );
    //    }
       return(
           <div>
               <ul className="logoutul">
                <li>
                    <a href="/login" class="btn btn-danger logoutbtn">Sign Out of Your Account</a>
                </li>
                </ul>
              <div className="container">
                <div className="row">
                    <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                        <Row className="clearfix">
                        <Col sm={4} className="sidebartab">
                            <Nav bsStyle="pills" stacked>
                                <NavItem eventKey="first">Dashboard</NavItem>
                                <NavItem eventKey="second">Profile</NavItem>
                                <NavItem eventKey="third">Tech Tutorials</NavItem>
                            </Nav>
                        </Col>
                        <Col sm={8}>
                            <Tab.Content animation>
                            <Tab.Pane eventKey="first">
                            <div className="demo-charts mdl-color--white mdl-shadow--2dp mdl-cell mdl-cell--12-col mdl-grid">
                                <svg fill="currentColor" width="200px" height="200px" viewBox="0 0 1 1" className="demo-chart mdl-cell mdl-cell--4-col mdl-cell--3-col-desktop">
                                <use href="#piechart" mask="url(#piemask)" />
                                <text x="0.5" y="0.5" font-family="Roboto" font-size="0.3" fill="#888" text-anchor="middle" dy="0.1">82<tspan font-size="0.2" dy="-0.07">%</tspan></text>
                                </svg>
                                <svg fill="currentColor" width="200px" height="200px" viewBox="0 0 1 1" class="demo-chart mdl-cell mdl-cell--4-col mdl-cell--3-col-desktop">
                                <use href="#piechart" mask="url(#piemask)" />
                                <text x="0.5" y="0.5" font-family="Roboto" font-size="0.3" fill="#888" text-anchor="middle" dy="0.1">82<tspan dy="-0.07" font-size="0.2">%</tspan></text>
                                </svg>
                                <svg fill="currentColor" width="200px" height="200px" viewBox="0 0 1 1" class="demo-chart mdl-cell mdl-cell--4-col mdl-cell--3-col-desktop">
                                <use href="#piechart" mask="url(#piemask)" />
                                <text x="0.5" y="0.5" font-family="Roboto" font-size="0.3" fill="#888" text-anchor="middle" dy="0.1">82<tspan dy="-0.07" font-size="0.2">%</tspan></text>
                                </svg>
                                <svg fill="currentColor" width="200px" height="200px" viewBox="0 0 1 1" class="demo-chart mdl-cell mdl-cell--4-col mdl-cell--3-col-desktop">
                                <use href="#piechart" mask="url(#piemask)" />
                                <text x="0.5" y="0.5" font-family="Roboto" font-size="0.3" fill="#888" text-anchor="middle" dy="0.1">82<tspan dy="-0.07" font-size="0.2">%</tspan></text>
                                </svg>
                            </div>    
                                
                            </Tab.Pane>
                            <Tab.Pane eventKey="second">
                                 <Table striped bordered condensed hover>
                                    <thead>
                                        <tr>
                                        <th>#</th>
                                        <th>Name</th>
                                        <th>User Name</th>
                                        <th>Email ID</th>
                                        <th>Password</th>
                                        <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                        <td>{this.state.id}</td>
                                        <td>{this.state.name}</td>
                                        <td>{this.state.username}</td>
                                        <td>{this.state.email}</td>
                                        <td>{this.state.password}</td>
                                        {/* <button onClick={(e)=>this.EditProfile(this.state.id)} className="btn btn-info">Edit</button> */}
                                        <Link to={'/EditProfile/id='+this.state.id}><button className="btn btn-info">Edit</button></Link>
                                        </tr>
                                    </tbody>
                                </Table>;
                                </Tab.Pane>
                            <Tab.Pane eventKey="third">
                                <Tabs defaultActiveKey={1} id="uncontrolled-tab-example">
                                <Tab eventKey={1} title="Python">
                                <Image width={200} height={200} src={require('../../img/img_9.jpg')} rounded />
                                    <h4>Python Title</h4>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                                </Tab>
                                <Tab eventKey={2} title="Java">
                                <h4>Java Title</h4>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                                </Tab>
                                <Tab eventKey={3} title="PHP" >
                                <h4>PHP Title</h4>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                                </Tab>
                                <Tab eventKey={4} title="Node Js" >
                                    Tab 3 content
                                </Tab>
                                <Tab eventKey={5} title="Ruby & Rails" >
                                    Tab 3 content
                                </Tab>
                                </Tabs>
                                </Tab.Pane>
                            </Tab.Content>
                        </Col>
                        </Row>
                        </Tab.Container>
                   
                 </div>
               </div>
            </div>
        
        
       );
   }
}

export default Welcome;