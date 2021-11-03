import React from "react";

import User from "./User";

const UserList = ({ data }) => {

    const allUsers = data.map( item => (
        <User key={item.id} firstName={item.firstName} lastName={item.lastName} age={item.age}  />
    ))

    return(
        <div>
            <span> All users: </span>
           {allUsers}
        </div>
    )
}

export default UserList;