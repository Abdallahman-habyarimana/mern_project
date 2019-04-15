import React, { Component } from 'react';
import Navigation from './components/Navigation/Navigation';
import { Switch, BrowserRouter, Route } from 'react-router-dom';
import ChatHistory from './components/Lists/ChatHistory';
import Events from "./components/Lists/Events";
import AdminLogin from './components/Layout/AdminLogin';
import ChatContent from './components/chat/ChatContent';
import Pagination from './components/helper/Pagination';
import AdminHomepage from './components/Layout/AdminHomepage'
import AddRoom from './components/Layout/AddRoom'
import EditRoom from './components/Layout/EditRoom';
//import Main from './components/Navigation/Main';
//import Footer from './components/Layout/Footer' 


// Render the header
// And the Form Container
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Navigation />
        <Switch>
            <Route exact path="/" component={ChatContent} />
            <Route path="/events" component={Events} />
            <Route path="/history" component={ChatHistory} />
            <Route path="/adminlogin" component={AdminLogin}/>       
            <Route path="/pagination" component={Pagination}/>
            <Route path="/adminHomepage" component={AdminHomepage}/>
            <Route path="/addRoom" component={AddRoom}/>
            <Route path="/editRoom/:rowId" component={EditRoom}/>
        </Switch>
      </BrowserRouter>
      
      );
  }
}

export default App;
