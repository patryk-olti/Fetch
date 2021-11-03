import React from "react";

const User = ({ firstName, lastName, age }) => {

    const styles = {
        fontSize: '20px',
        textTransform: 'capitalize'
    }

    return(
        <div style={styles} >
            <span> {firstName} </span>
            <span> {lastName} </span>
            <span> {age} </span>
        </div>
    )
}

export default User;