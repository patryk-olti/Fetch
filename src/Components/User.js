import React from "react";

const User = ({ name }) => {

    const styles = {
        fontSize: '20px',
        textTransform: 'capitalize'
    }

    return(
        <div style={styles} >
            <span> {name} </span>
        </div>
    )
}

export default User;