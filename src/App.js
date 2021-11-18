import React, { Component } from 'react'
import Heading from "./components/stateless/heading/Heading"
import Cars from "./components/statefull/cars/Cars"
import Button from "./components/stateless/button/Button"
class App extends Component {
  render() {
    return (
      <div className="container">

        <Heading>vehicle center</Heading>
        <Cars></Cars>        
        <Button typebtn="btn-success w-100">Add</Button>
      </div>
    );
  }
}

export default App;