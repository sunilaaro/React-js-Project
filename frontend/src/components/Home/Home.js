import React, { Component } from 'react';
import { Tabs, Tab,Image,Carousel, Grid, Row,Col,Thumbnail,Button } from 'react-bootstrap';
import './home.css';
class Home extends Component {
    render() {
      return (
          <div>
          <div className="row">
            <div className="container-fluid">
               <Carousel>
                    <Carousel.Item>
                        <img className="sliderimg" alt="900x500" src={require('../../img/img_9.jpg')} />
                        <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img  className="sliderimg" alt="900x500" src={require('../../img/img_12.jpg')} />
                        <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img  className="sliderimg" alt="900x500" src={require('../../img/img_11.jpg')} />
                        <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    </Carousel>
            </div>
            </div>
            <div className="row techlist" >
             <div className="container-fluid">
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
              </div>
            <div className="row">
            <div className="container-fluid">
                <Tabs defaultActiveKey={1} id="uncontrolled-tab-example">
                <Tab eventKey={1} title="Python">
                <Image width={200} height={200} src={require('../../img/img_9.jpg')} rounded />
                    <h4>Python Title</h4>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                </Tab>
                <Tab eventKey={2} title="Java">
                    Tab 2 content
                </Tab>
                <Tab eventKey={3} title="PHP" >
                    Tab 3 content
                </Tab>
                <Tab eventKey={4} title="Node Js" >
                    Tab 3 content
                </Tab>
                <Tab eventKey={5} title="Ruby & Rails" >
                    Tab 3 content
                </Tab>
                </Tabs>
            </div>
        </div>
        
        </div>
      );
    }
}

export default Home;