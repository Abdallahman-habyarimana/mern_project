import React, { Component } from 'react';
import Navigation from './components/Navigation/Navigation';
import Main from './components/Navigation/Main';
import Footer from './components/Layout/Footer' 


class App extends Component {
  render() {
    return (
      <div>
          <Navigation />
          <Main />
          <Footer />
      </div>
      
      );
  }
}

export default App;
