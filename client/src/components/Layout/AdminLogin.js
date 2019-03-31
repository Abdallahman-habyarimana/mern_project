import React from 'react'
import { withRouter } from 'react-router-dom'

import {
     Card,
     CardContent,
     withStyles, 
     CardActions, 
     Typography, 
     CssBaseline,
     FormControl, 
     Input,
     Icon,
     InputLabel, 
     Button
    } from '@material-ui/core';
import { PropTypes } from 'prop-types';
import API from '../Lists/api';

// Declare the styling for the form
const styles = (theme) => ({
    card: {
        width: 'auto',
        maxWidth: 550,
        marginLeft: theme.spacing.unit * 3,
        marginRight: theme.spacing.unit * 3,
        marginTop: theme.spacing.unit * 5,
        [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]:{
            width: 400,
            marginLeft:'auto',
            marginRight: 'auto'
        },
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    paper: {
        marginTop: theme.spacing.unit * 5,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    form:{
        width:'100%',
        marginTop:theme.spacing.unit * 3,
    },
    submit:{
        marginTop:theme.spacing.unit * 3
    }
})

class AdminLogin extends React.Component {

    // State for the username and password
    state = { 
        username: '',
        password: '',
        users: [],
     }

     // Handle the username

     handleInput = (e) => {
        this.setState({ username: e.target.value })
     }

     // Handle the password
     handlePassword =(e) => {
        this.setState({ password: e.target.value })
     }

     // When the user Submit the form
     handleSubmit = (e) => {
         e.preventDefault();

            // Take all the data in the form
             let username = this.state.username
             let password = this.state.password

        // Use Axios to post to the server and retrieve the data
         API.post(`/admin/login/${username}&${password}`).then( res => {
            this.setState({ users:res.data })
            //console.log(this.state.users)
            this.props.history.push('/events')
         })
     }

    render() { 
        const { classes } = this.props
        return ( 
            <Card className={classes.card}>
            <CssBaseline />
            <Typography component="h1" variant="h5">
                Sign in   
            </Typography> 
            <form className={classes.form}>
                <CardContent>
                    <FormControl margin="normal" fullWidth>
                        <InputLabel htmlFor="email"> email </InputLabel>
                        <Input name="email" autoComplete="email" onKeyUp={this.handleInput}/>
                        <Icon color="primary">email</Icon>
                    </FormControl>
                    <FormControl margin="normal" fullWidth>
                        <InputLabel htmlFor="password"> Password </InputLabel>
                        <Input name="password" type="password" onKeyUp={this.handlePassword}/>
                    </FormControl>  
                </CardContent>
                <Button type="submit" fullWidth color="inherit"
                    className={classes.submit} onClick={this.handleSubmit}>Login</Button>
                <CardActions>
                </CardActions>
            </form>
        </Card>

         );
    }
}

AdminLogin.propTypes = {
    classes: PropTypes.object.isRequired,
};

AdminLogin = withRouter(AdminLogin)
 
export default withStyles(styles)(AdminLogin);