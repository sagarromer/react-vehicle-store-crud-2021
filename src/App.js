import React, { Component } from 'react'
import Heading from "./components/stateless/heading/Heading"
import Cars from "./components/statefull/cars/Cars"
class App extends Component {
  render() {
    return (
      <div className="container">

        <Heading>vehicle center</Heading>
        <Cars></Cars>        
        <button>Add</button>
      </div>
    );
  }
}

export default App;