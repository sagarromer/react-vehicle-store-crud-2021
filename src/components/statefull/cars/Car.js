import React, { Component } from 'react'

class Car extends Component {
    render() {
        return (
            <>
                <table className="table text-center">
                    <thead>
                        <tr>
                            <th>brand</th>
                            <th>Colour</th>
                            <th>Price</th>
                            <th colspan="2">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Toyota</td>
                            <td>black</td>
                            <td>{50000+" $"}</td>
                            <td><button className="btn btn-warning">edit</button></td>
                            <td><button className="btn btn-danger">Delete</button></td>
                            
                        </tr>
                        <tr>
                            <td>Mercedes</td>
                            <td>green</td>
                            <td>{30000+" $"}</td>
                            <td><button className="btn btn-warning">edit</button></td>
                            <td><button className="btn btn-danger">Delete</button></td>
                            
                        </tr>
                        <tr>
                            <td>Mazda</td>
                            <td>red</td>
                            <td>{50000+" $"}</td>
                            <td><button className="btn btn-warning">edit</button></td>
                            <td><button className="btn btn-danger">Delete</button></td>
                            
                        </tr>
                    </tbody>
                </table>   
            </>
        )
    }
}

export default Car
