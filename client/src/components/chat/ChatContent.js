/*import React, {Component} from 'react'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
//import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import { Card } from '@material-ui/core';

const styles = theme => ({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
      marginTop: theme.spacing.unit * 8,
      marginLeft: theme.spacing.unit * 16,
      marginRight: theme.spacing.unit * 16,

    },
    textField: {
      marginLeft: theme.spacing.unit,
      marginRight: theme.spacing.unit,
    },
    dense: {
      marginTop: 16,
    },
    menu: {
      width: 200,
    },
    card: {
        minWidth: 275,
    }
  });

class ChatContent extends Component {
    state = { 
        name: ''
     }

     handleChange = event => {
        this.setState({
          name: event.target.value,
        });
      };

    render() { 
        const {classes} = this.props
        return ( 

            <div className={classes.container}>
                <TextField
                    id="filled-name"
                    label="Name"
                    className={classes.textField}
                    value={this.state.name}
                    //onChange={this.handleChange('name')}
                    margin="normal"
                    variant="filled"/>
                <br/><br/>
                <Card className={classes.card}/>
                <TextField
                    id="outlined-textarea"
                    label="Multiline Placeholder"
                    placeholder="Placeholder"
                    multiline
                    className={classes.textField}
                    margin="normal"
                    variant="outlined"
        />
            
            </div>
         );
    }
}

ChatContent.propTypes = {
    classes: PropTypes.object.isRequired,
}
 
export default withStyles(styles)(ChatContent);
*/

import React, { Component } from 'react';
import { Widget, addResponseMessage } from 'react-chat-widget';
 
import 'react-chat-widget/lib/styles.css';
 
class ChatContent extends Component {

    componentDidMount() {
        addResponseMessage("Chat assignment!");
    }

    handleNewUserMessage = (newMessage) => {
        console.log(`New message incomig! ${newMessage}`);
        // Now send the message throught the backend API
        //addResponseMessage(response);
    }

      
  render() {
    return (
      <div>
        <Widget
          handleNewUserMessage={this.handleNewUserMessage}
          title="Chat Assignment"
        />
      </div>
    );
  }
}
 
export default ChatContent;