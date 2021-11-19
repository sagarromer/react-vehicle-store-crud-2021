import React, { Component } from 'react'
import Button from "../../../stateless/button/Button"

class formtoedit extends Component {
    state = {
        brand : this.props.brand,
        color : this.props.color,
        price : this.props.price
    }
    updateValidationHandler = () => {
        console.log('updation validation running');
        this.props.updateCar(this.props.id, this.state.brand, this.state.color, this.state.price);
        
    }
    render() {
        return (
            <>
                <tr>
                    <td><input className="form-control" type="text" value={this.state.brand}
                    onChange={event => this.setState({brand : event?.target.value})}/></td>
                    <td><input className="form-control" type="text" value={this.state.color}
                    onChange={event => this.setState({color : event?.target.value})}/></td>
                    <td><input className="form-control" type="text" value={this.state.price}
                    onChange={event => this.setState({price : event?.target.value})}/></td>                
                    <td><Button clic={this.updateValidationHandler} typebtn="btn-warning">update</Button></td>
                </tr>
            </>
        )
    }
}

export default formtoedit
