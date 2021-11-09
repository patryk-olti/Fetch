import React from 'react';

const Button = ({ content, handleClick }) => {


    const styles = {
        padding: '10px 20px',
        margin: '5px',
        border: '1px solid black',
        borderRadius: '10px',
        backgroundColor: 'white',
        fontSize: '20px',
        cursor: 'pointer'
    }


    return(
        <button onClick={handleClick} style={styles} >
            {content}
        </button>
    )
}

export default Button;
