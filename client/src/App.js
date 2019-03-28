import React, { Component } from 'react';
import Navigation from './components/Navigation';
import Main from './components/Main';
import Footer from './components/Footer';


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
