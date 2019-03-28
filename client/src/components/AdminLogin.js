import React from 'react'
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

    state = { 
        username: '',
        password: '',
     }

     handleInput = (e) => {
        this.setState({ username: e.target.value })
     }

     handlePassword =(e) => {
        this.setState({ password: e.target.value })
     }

     handleSubmit = (e) => {
         e.preventDefault();
         console.log(this.state.username)
         console.log(this.state.password)
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
                    <FormControl margin="normal" required fullWidth>
                        <InputLabel htmlFor="email"> email </InputLabel>
                        <Input name="email" autoComplete="email" onKeyUp={this.handleInput}/>
                        <Icon color="primary">email</Icon>
                    </FormControl>
                    <FormControl margin="normal" required fullWidth>
                        <InputLabel htmlFor="password"> Password </InputLabel>
                        <Input name="password" type="password" onKeyUp={this.handlePassword}/>
                    </FormControl>  
                </CardContent>
                <Button type="submit" fullWidth variant="contained" color="primary"
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
 
export default withStyles(styles)(AdminLogin);