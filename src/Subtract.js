import React from 'react'

const Subtract = ({func}) => {
    return (
        <div id="subtract" className="text-center">
        <button className="btn btn-outline-dark subtract" onClick={func}>-</button>
        </div>
    )
}

export default Subtract
