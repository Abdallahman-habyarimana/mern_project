import React, { Component } from 'react';
import { Switch, BrowserRouter, Link, Route } from 'react-router-dom';
import ChatHistory from '../Lists/ChatHistory';
import Events from '../Lists/Events';
//import { Tabs } from '@material-ui/core';

import FormContainer from '../chat/FormContainer';
import { Button, List, ListItem } from '@material-ui/core';


class Main extends Component {
    state = {  }
    render() { 
        return (
            <BrowserRouter>
                <nav class="navbar navbar-expand-lg navbar-light bg-light">

                    <div class="collapse navbar-collapse" id="navbarText">
                        <List class="navbar-nav mr-auto">
                            <ListItem class="nav-item active">
                                <Link class="nav-link" to="/"> Chat History </Link>
                            </ListItem>
                            <ListItem class="nav-item">
                                <Link class="nav-link" to="/events">Events</Link>
                            </ListItem>
                            <ListItem class="nav-item">
                                <Link class="nav-link" to="/addroom">Add Room</Link>
                            </ListItem>
                            <ListItem class="nav-item">
                                <Link class="nav-link" to="/formcontainer">Chat</Link>
                            </ListItem>
                        </List>
                    </div>
                    <select> 
                            <option> Select Room </option>
                        </select>
                    <Button class="btn btn-sm btn-outline-secondary" type="button">Add Room</Button>
                </nav>
                <div>
                    <Switch>
                        <Route exact path="/" component={ChatHistory} />
                        <Route path="/events" component={Events} />
                        <Route path="/formcontainer" component={FormContainer} />
                    </Switch>
                </div>
            </BrowserRouter> 
        );
    }
}
 
export default Main;