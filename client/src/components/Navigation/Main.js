import React, { Component } from 'react';

//import { Tabs } from '@material-ui/core';

import { Button, List, ListItem } from '@material-ui/core';
import Link from 'react-router-dom'

class Main extends Component {
    state = {  }
    render() { 
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">

                    <div className="collapse navbar-collapse" id="navbarText">
                        <List className="navbar-nav mr-auto">
                            <ListItem className="nav-item active">
                                <Link className="nav-link" to="/"> Chat History </Link>
                            </ListItem>
                            <ListItem className="nav-item">
                                <Link className="nav-link" to="/events">Events</Link>
                            </ListItem>
                            <ListItem className="nav-item">
                                <Link className="nav-link" to="/addroom">Add Room</Link>
                            </ListItem>
                            <ListItem className="nav-item">
                                <Link className="nav-link" to="/formcontainer">Chat</Link>
                            </ListItem>
                            <ListItem className="nav-item">
                                <Link className="nav-link" to="/adminlogin">Admin Login</Link>
                            </ListItem>
                        </List>
                    </div>
                    <select> 
                            <option> Select Room </option>
                        </select>
                    <Button className="btn btn-sm btn-outline-secondary" type="button">Add Room</Button>
                </nav>
        
                
                
            </div> 
        );
    }
}
 
export default Main;