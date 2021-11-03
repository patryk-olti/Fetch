import React, { useState, useEffect } from "react";

import UserList from "../Components/UserList";
import UserSearch from "../Components/UserSearch";

const UsersContainer = () => {

    const [ userList, setUserList ] = useState([]);

    useEffect( () => 
        fetch('users.json')
        .then( response => response.json() )
        .then( data => setUserList(data))
    ,[])
 
    return(
        <div>   
            <UserList data={userList} />
            <UserSearch data={userList} />
        </div>
    )
}

export default UsersContainer;