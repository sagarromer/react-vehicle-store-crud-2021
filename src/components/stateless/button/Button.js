import React from 'react'

const Button = (props) => {
    
    return (
        <>
            <td>
                <button className={`btn ${props.typebtn}`}>
                    {props.children}
                </button>
            </td>
        </>
        
    )
}

export default Button