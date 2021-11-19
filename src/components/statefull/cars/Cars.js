import React, { Component } from 'react'
import Car from "../../../components/stateless/car/Car"
import Formtoedit from "../form/formtoedit/Formtoedit"
import Fade from 'react-reveal/Fade'

class Cars extends Component {

    state ={
        myCars : localStorage.getItem("newcars") ? JSON.parse(localStorage.getItem("newcars")) : [],
        lastid : localStorage.getItem("lastid") ? JSON.parse(localStorage.getItem("lastid")) : 0, 
        isDataEditing : 0
    }
    updateCarHandler = (id, brand, color, price) => {
        const index = this.state.myCars.findIndex(
            index => {
                return index.id === id
            }
        )
        const newCar = {
            id, 
            brand, 
            color,
            price 
        }
        const newCars = [...this.state.myCars];
        newCars[index] = newCar;

        this.setState({
            myCars : newCars
        })
    }



    deleteCarHandler = (id) => {
        console.log("you have clicked on the delete button");
        const index = this.state.myCars.findIndex(index => {
            return index.id === id;
        })
        const newCars = [...this.state.myCars];
        newCars.splice(index,1);
        this.setState({
            myCars :newCars,
            isDataEditing : 0
        })
        localStorage.setItem("newCars", JSON.stringify(newCars));

        
    }
    editCarHandler = () => {
        console.log('you have clicked on edit button');
        
    }
    addCarHandler = (brand, color, price) => {
        console.log('you have clicked on edit button');
        const newCar = {
            id : this.state.lastId + 1, 
            brand: brand, 
            color: color,
            price : price
        }
        const lastId = this.state.lastid + 1;
        const newCars = [...this.state.myCars];
        newCars.push(newCar);
        this.setState((prevState) => ({
            myCars : newCars,
            lastId : prevState.lastid +1
        }))
        localStorage.setItem("newCars", JSON.stringify(newCars));
        localStorage.setItem("lastid", JSON.stringify(lastId));
    }
    render() {
        return (
            <>  <Fade>
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
                                    updateCar = {this.updateCarHandler}
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
                </Fade>
            </>
        )
    }
}

export default Cars
