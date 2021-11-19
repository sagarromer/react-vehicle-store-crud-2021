import React, { Component } from 'react'
import Formtitle from "../../../components/stateless/formtitle/formtitle"
import Button from "../../../components/stateless/button/Button"
import Fade from 'react-reveal/Fade'

class formadd extends Component {

    state = {
        brand : "", 
        color: "",
        price: ""
    }
    validationHandler = (event) => {
        event.preventDefault();
        console.log(this.state);
        
    }
    render() {
        return (
            <>
                <Formtitle>Add car</Formtitle>
                <Fade top cascade>
                <form>
                    <div className="form-group">
                        <label>brand</label>
                        <input className="form-control" type="text" 
                        id="brand" onChange={(event) => this.setState({brand : event.target.value})}
                        value={this.state.brand}/>
                    </div>
                    <div className="form-group">
                        <label>color</label>
                        <input className="form-control" 
                        type="text" id="color" 
                        onChange={(event) => this.setState({color : event.target.value})}
                        value={this.state.color}/>
                        
                    </div>
                    <div className="form-group">
                        <label>price</label>
                        <input className="form-control" type="number" id="price" 
                        onChange={(event) => this.setState({price : event.target.value})}
                        value={this.state.price}/>
                        
                    </div>
                    <div className="form-group">
                        <Button clic = {this.validationHandler} className="btn btn-primary">validate</Button>
                                            </div>
                </form>
                </Fade>
                
            </>
        )
    }
}

export default formadd
