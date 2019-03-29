import React, { Component } from 'react';
import Navigation from './components/Navigation/Navigation';
//import Main from './components/Navigation/Main';
//import Footer from './components/Layout/Footer' 
import FormContainer from './components/chat/FormContainer';


// Render the header
// And the Form Container
class App extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <FormContainer />
      </div>
      
      );
  }
}

export default App;
