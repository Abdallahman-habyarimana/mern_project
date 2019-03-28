import React, { Component } from 'react';
import { Switch, BrowserRouter, Link, Route } from 'react-router-dom';
import ChatHistory from './ChatHistory';
import Events from './Events';
//import { Tabs } from '@material-ui/core';
import AdminLogin from './AdminLogin';
import FormContainer from './FormContainer';
import { Button } from '@material-ui/core';

class Main extends Component {
    state = {  }
    render() { 
        return (
            <BrowserRouter>
                <nav class="navbar navbar-expand-lg navbar-light bg-light">

                    <div class="collapse navbar-collapse" id="navbarText">
                        <ul class="navbar-nav mr-auto">
                            <li class="nav-item active">
                                <Link class="nav-link" to="/"> Chat History </Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/events">Events</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/adminlogin">Admin Login</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/formcontainer">Chat</Link>
                            </li>
                        </ul>
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
                        <Route path="/adminlogin" component={AdminLogin} />
                        <Route path="/formcontainer" component={FormContainer} />
                    </Switch>
                </div>
            </BrowserRouter> 
        );
    }
}
 
export default Main;