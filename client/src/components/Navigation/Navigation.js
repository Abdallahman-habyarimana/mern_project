import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Link from '@material-ui/core/Link'
import Typography from '@material-ui/core/Typography';
//import Button from '@material-ui/core/Button';
//import { Redirect, Route, Router /* Switch, BrowserRouter*/ } from 'react-router-dom'
import { Button } from '@material-ui/core';
//import AdminLogin from '../Layout/AdminLogin';
import { withRouter } from 'react-router-dom'

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
};

class Navigation extends React.Component {
  state = {
    redirect:false,
  }

  handleClick = () => {
   this.props.history.push("/adminlogin")
   }
  render(){
  const {classes} = this.props
  return ( 
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" color="inherit" className={classes.grow}>
             <Link to="/chat" className="brand-logo" > Chat Application </Link>
          </Typography>
              <Button type="button" onClick={()=> this.props.history.push("/adminlogin")} className="btn btn-primary btn-sm primary">Admin Login</Button>       
        </Toolbar>
      </AppBar>
    
    </div>
  );
}
}

Navigation.propTypes = {
    classes: PropTypes.object.isRequired
}

Navigation = withRouter(Navigation)

export default withStyles(styles)(Navigation);