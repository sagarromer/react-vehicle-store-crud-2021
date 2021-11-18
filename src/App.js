import React, { Component } from 'react'
import Heading from "./components/stateless/heading/Heading"

class App extends Component {
  render() {
    return (
      <div className="container">

        <Heading>vehicle center</Heading>
        <h2>Cars</h2>
        <button>Add</button>
      </div>
    );
  }
}

export default App;