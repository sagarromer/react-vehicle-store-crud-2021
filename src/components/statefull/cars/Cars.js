import React, { Component } from 'react'
import Car from "../../../components/stateless/car/Car"
import Formtoedit from "../form/formtoedit/Formtoedit"
class Cars extends Component {

    state ={
        myCars : [
            {id : 1, brand : "Toyota", color: "black", price: 50000},
            {id : 2, brand : "Mercedez", color: "green", price: 30000},
            {id : 3, brand : "Mazda", color: "red", price: 20000},
        ],
        lastid : 3,
        isDataEditing : 0
    }



    deleteCarHandler = (id) => {
        console.log("you have clicked on the delete button");
        const index = this.state.myCars.findIndex(index => {
            return index.id === id;
        })
        const newCars = [...this.state.myCars];
        newCars.splice(index,1);
        this.setState({
            myCars :newCars
        })
        
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
                            this.state.myCars.map((car,index) => {
                                if(this.state.isDataEditing !== car.id){
                                    return (<Car brand={car.brand} color={car.color} 
                                        price= {car.price} 
                                    clicDel= {() => this.deleteCarHandler(index)} 
                                    clicEdit={() => this.setState({isDataEditing : car.id})} />)
                                }else {
                                    return <Formtoedit
                                    key = {car.id}
                                    id = {car.id}
                                    brand = {car.brand}
                                    color = {car.color}
                                    price = {car.price}
                                    />
                                }
                                
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
