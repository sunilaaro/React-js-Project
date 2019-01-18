import React, { Component } from 'react';

class Footer extends Component {
    render() {
      return (
            <div className="container-fluid footer">
                <div className="row">
                    <div className="col-sm-4">
                    <h3>Column 1</h3>
                    <p>Lorem ipsum dolor..</p>
                    <p>Ut enim ad..</p>
                    </div>
                    <div className="col-sm-4">
                    <h3>Column 2</h3>
                    <p>Lorem ipsum dolor..</p>
                    <p>Ut enim ad..</p>
                    </div>
                    <div className="col-sm-4">
                    <h3>Column 3</h3> 
                    <p>Lorem ipsum dolor..</p>
                    <p>Ut enim ad..</p>
                    </div>
                </div>
                <p>&copy; or & #169;</p>
            </div>
      );
    }
}
export default Footer;