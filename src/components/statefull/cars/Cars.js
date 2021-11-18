import React, { Component } from 'react'
import Car from "../../../components/stateless/car/Car"
class Cars extends Component {

    state ={
        myCars : [
            {id : 1, brand : "Toyota", color: "black", price: 50000},
            {id : 2, brand : "Mercedez", color: "green", price: 30000},
            {id : 3, brand : "Mazda", color: "red", price: 20000},
        ]
    }



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
                        
                        {
                            this.state.myCars.map((car) => {
                                return (<Car brand={car.brand} color={car.color} price= {car.price} clicDel= {this.deleteCarHandler} 
                                clicEdit={this.editCarHandler} />)
                            })
                        }
                        
                        {/* <Car brand="Toyota" color="black" price= {5000} clicDel= {this.deleteCarHandler} 
                            clicEdit={this.editCarHandler} />
                        <Car brand="Mercedes" color="green" price= {30000} 
                            clicDel= {this.deleteCarHandler}
                            clicEdit={this.editCarHandler}/>
                        <Car brand="Mazda" color="red" price= {5000} 
                        clicDel= {this.deleteCarHandler}
                        clicEdit={this.editCarHandler}/> */}
                    </tbody>
                </table>   
            </>
        )
    }
}

export default Cars
