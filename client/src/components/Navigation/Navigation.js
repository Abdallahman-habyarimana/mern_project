import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Link from '@material-ui/core/Link'
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Redirect, Route, Switch, BrowserRouter } from 'react-router-dom'
import AdminLogin from '../Layout/AdminLogin';

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
    redirect: false
  }
  setRedirect = () => {
    this.setState({
      redirect: true
    })
  }
  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to='/adminlogin' />
    }
  }
    render(){
      const {classes} = this.props
     
  return ( 
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" color="inherit" className={classes.grow}>
             Chat Application 
          </Typography>
          <BrowserRouter>
            <Link to="/adminlogin">
              <Button color="inherit">Admin Login</Button>
            </Link>     
            <Switch>
                <Route path="/adminlogin" component={AdminLogin} />
           </Switch>
      </BrowserRouter>  
        </Toolbar>
      </AppBar>
      
    </div>
  );
}
}

Navigation.propTypes = {
    classes: PropTypes.object.isRequired
}
 
export default withStyles(styles)(Navigation);