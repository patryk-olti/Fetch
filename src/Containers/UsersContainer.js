import React, { useState, useEffect } from "react";

import UserList from "../Components/UserList";

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
            { console.log(userList) }
        </div>
    )
}

export default UsersContainer;