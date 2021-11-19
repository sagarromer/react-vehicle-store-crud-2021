import React, { Component } from 'react'
import Button from "../../../stateless/button/Button"

class formtoedit extends Component {
    state = {
        brand : this.props.brand,
        color : this.props.color,
        price : this.props.price
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
                </tr>
            </>
        )
    }
}

export default formtoedit
