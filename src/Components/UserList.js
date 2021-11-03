import React from "react";

import User from "./User";

const UserList = ({ data }) => {

    const allUsers = data.map( item => (
        <User name={item.firstName} />
    ))

    return(
        <div>
            <span> All users: </span>
           {allUsers}
        </div>
    )
}

export default UserList;