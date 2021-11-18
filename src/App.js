import React, { Component } from 'react'
import Heading from "./components/stateless/heading/Heading"
import Cars from "./components/statefull/cars/Cars"
import Button from "./components/stateless/button/Button"
import Formadd from "./components/statefull/form/formadd"
class App extends Component {

  state = {
    isFormOpen : false
  }
  render() {
    return (
      <div className="container">

        <Heading>vehicle center</Heading>
        <Cars></Cars>  
        {
          this.state.isFormOpen && <Formadd />
        }      
        <Button clic = {
          () => this.setState((prevState) => ({isFormOpen : !prevState.isFormOpen}))
        } typebtn="btn-success w-100">
          {this.state.isFormOpen ? "close" : "Add"}
        </Button>
      </div>
    );
  }
}

export default App;