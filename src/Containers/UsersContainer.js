import React, { useState, useEffect } from "react";

const UsersContainer = () => {

    const [ userList, setUserList ] = useState([]);

    useEffect( () => 
        fetch('users.json')
        .then( response => response.json() )
        .then( data => setUserList(data))
    ,[])
 
    return(
        <div>   
            ello
            { console.log(userList) }
        </div>
    )
}

export default UsersContainer;