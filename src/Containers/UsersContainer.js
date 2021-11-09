import React from "react";

import UserList from "../Components/UserList";

const UsersContainer = ({ userList }) => {

    return(
        <div>   
            <UserList data={userList} />
        </div>
    )
}

export default UsersContainer;