import React, { Component } from 'react';
//import { withStyles } from '@material-ui/core/styles';
//import PropTypes from 'prop-types';
import '../../styles/Styles.css'
import { Input } from '@material-ui/core';

/*const styles = {
    root: {
      flexGrow: 1,
    },
    grow: {
      flexGrow: 1,
    },
    messages: {
        maxWidth: 300
    }
  };
  */
class FormContainer extends Component {
    state = {  }
    render() { 
       // const { classes } = this.props
        return ( 
            <div className="container">
                <div className="row">
                    <div className="col-md-6 offset-md-3 col-sm-12">
                        <h5 className="text-left">
                            chat Application
                        </h5>
                    
                        <div id="status"></div>
                        <div id="chat">
                            <Input type="text" id="username" className="form-control" placeholder="Enter your name...." />
                            <br/>         
                            <div className="card">
                                <div id="messages" className="card-block">
                            </div>
                        </div>
                        <br/>
                        <textarea id="textarea" className="form-control"  placeholder="Enter message"></textarea>
                    </div>
                </div>
            </div>
        </div>
    );
    }
}
/*
FormContainer.propTypes = {
    classes: PropTypes.object.isRequired
}
*/
 
export default FormContainer;