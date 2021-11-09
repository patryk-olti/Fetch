import React from "react";

const Container = ({ children }) => {

    const styles = {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        padding: '10px',
        borderBottom: '2px solid black'
    }

    return(
        <div style={styles} >
            {children}
        </div>
    )
}

export default Container;