import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';

// import Test from '../Lists/test'
import  Events  from '../Lists/Events'
import  Rooms  from '../Lists/Rooms'
import ChatHistory  from '../Lists/ChatHistory'

function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
});

class AdminHomepage extends Component {
  state = {
    value: 0
  }

  handleChange = (event, value)=>{
    this.setState({value})
  }

  render(){
    const {classes} = this.props
    const {value} = this.state
    return(
      <div className={classes.root}>
      <AppBar position="static">
        <Tabs value={value} onChange={this.handleChange}>
          <Tab label="Events" />
          <Tab label="Chat History" />
          <Tab label="Rooms" />
        </Tabs>
      </AppBar>
      {value === 0 && <TabContainer><Events/></TabContainer>}
      {value === 1 && <TabContainer><ChatHistory/></TabContainer>}
      {value === 2 && <TabContainer><Rooms /></TabContainer>}
    </div>
  );
}
}

AdminHomepage.propTypes = {
classes: PropTypes.object.isRequired,
};
export default withStyles(styles) (AdminHomepage);