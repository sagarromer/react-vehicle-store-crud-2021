import React from 'react'

const Car = (props) => {
    
    return (
        <>
            <tr>
                <td>{props.brand}</td>
                <td>props.color</td>
                <td>{props.price+" $"}</td>
                <td><button className="btn btn-warning">edit</button></td>
                <td><button className="btn btn-danger">Delete</button></td>
            </tr>
        </>
        
    )
}

export default Car