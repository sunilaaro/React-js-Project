import React, {Component} from 'react';
import { Tab,Row,Col,Nav,NavItem,Table,Tabs,Image} from 'react-bootstrap';

class UserTech extends Component{
    render(){
        return(
            <div>
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
            </div>
        );
    }
}

export default UserTech;