import React from "react";

import UserList from "../Components/UserList";
import UserSearch from "../Components/UserSearch";

const UsersContainer = ({ userList }) => {


 
    return(
        <div>   
            <UserList data={userList} />
        </div>
    )
}

export default UsersContainer;