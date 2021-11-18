import React, { Component } from 'react'
import Car from "../../../components/stateless/car/Car"
class Cars extends Component {
    deleteCarHandler = () => {
        console.log("you have clicked on the delete button");
        
    }
    editCarHandler = () => {
        console.log('you have clicked on edit button');
        
    }
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
                        {/* <tr>
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
                            
                        </tr> */}
                        <Car brand="Toyota" color="black" price= {5000} clicDel= {this.deleteCarHandler} 
                            clicEdit={this.editCarHandler} />
                        <Car brand="Mercedes" color="green" price= {30000} 
                            clicDel= {this.deleteCarHandler}
                            clicEdit={this.editCarHandler}/>
                        <Car brand="Mazda" color="red" price= {5000} 
                        clicDel= {this.deleteCarHandler}
                        clicEdit={this.editCarHandler}/>
                    </tbody>
                </table>   
            </>
        )
    }
}

export default Cars
