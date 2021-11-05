import React from "react";

import { NavLink } from "react-router-dom";

const Link = ({ path, content }) => {

    const styles = {
        margin: '5px',
        padding: '2px',
        textDecoration: 'none',
        color: 'black',
        fontSize: '20px',
        borderBottom: '1px solid black'
    }

    return(
        <NavLink style={styles} to={path}>
            {content}
        </NavLink>
    )
}

export default Link;