import React from 'react'
import Button from "../button/Button"

const Car = (props) => {
    
    return (
        <>
            <tr>
                <td>{props.brand}</td>
                <td>props.color</td>
                <td>{props.price+" $"}</td>
                {/* <td><button className="btn btn-warning">edit</button></td>
                <td><button className="btn btn-danger">Delete</button></td> */}
                <Button typebtn="btn-warning">Edit</Button>
                <Button typebtn="btn-danger">delete</Button>
            </tr>
        </>
        
    )
}

export default Car