import React from 'react'
import Spinner from 'react-bootstrap/Spinner'

export const Loader = () => {

    const spinnerStyle = {
        marginTop: "50px",
        textAlign: "center"
    }

    return(
        <div style={spinnerStyle}>
            <Spinner animation="grow" variant="danger" />
        </div>
    )
}