import React, {Component} from 'react';
import { Grid, Row,Col,Thumbnail,Button } from 'react-bootstrap';
//import './sidebar.css';


class Services extends Component{
   constructor(props){
       super(props);
       this.start={

       }
   }
   render(){
       return(
           <div>
              <Grid>
                <Row>
                    <Col xs={6} md={4}>
                    <Thumbnail src={require('../../img/python.jpg')} alt="242x200">
                        <h3>Thumbnail label</h3>
                        <p>Description</p>
                        <p>
                        <Button bsStyle="primary">Button</Button>
                        &nbsp;
                        <Button bsStyle="default">Button</Button>
                        </p>
                    </Thumbnail>
                    </Col>
                    <Col xs={6} md={4}>
                    <Thumbnail src={require('../../img/go.png')} alt="242x200">
                        <h3>Thumbnail label</h3>
                        <p>Description</p>
                        <p>
                        <Button bsStyle="primary">Button</Button>
                        &nbsp;
                        <Button bsStyle="default">Button</Button>
                        </p>
                    </Thumbnail>
                    </Col>
                    <Col xs={6} md={4}>
                    <Thumbnail src={require('../../img/php.jpg')} alt="242x200">
                        <h3>Thumbnail label</h3>
                        <p>Description</p>
                        <p>
                        <Button bsStyle="primary">Button</Button>
                        &nbsp;
                        <Button bsStyle="default">Button</Button>
                        </p>
                    </Thumbnail>
                    </Col>
                </Row>
                </Grid>
           </div>
       );
   }
}

   export default Services;
