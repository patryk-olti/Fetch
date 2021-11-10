import React from "react";
import UserList from "../Components/UserList";

const Users = () => {

    const styles = {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        border: '1px solid black'
    }

    return(
        <div style={styles} >
            <UserList />
        </div>
    )
}

export default Users;