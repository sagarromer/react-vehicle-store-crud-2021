import React, { Component } from 'react'
import Formtitle from "../../../components/stateless/formtitle/formtitle"
class formadd extends Component {
    render() {
        return (
            <>
                <Formtitle>Add car</Formtitle>
                <form>
                    <div className="form-group">
                        <label>brand</label>
                        <input className="form-control" type="text" id="brand"></input>
                    </div>
                    <div className="form-group">
                        <label>color</label>
                        <input className="form-control" type="text" id="color"></input>
                    </div>
                    <div className="form-group">
                        <label>price</label>
                        <input className="form-control" type="number" id="price"></input>
                    </div>
                    <div className="form-group">
                        <button className="btn btn-primary">validate</button>
                                            </div>
                </form>
            </>
        )
    }
}

export default formadd
