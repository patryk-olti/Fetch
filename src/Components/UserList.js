import React, { useState, useEffect } from "react";

import User from "./User";
import WaitingComponent from "./WaitingComponent";

const URL_API = "https://randomuser.me/api/";

const fetchFunction = (url, numbers, fetchStatusFunction) => {
    const usersArray = [];

    for(let i=0; i<=numbers-1; i++){
        fetch(url)
        .then( res => res.json())
        .then( data => {
            usersArray.push(data)
            fetchStatusFunction(1)   
        })
        .catch( err => {
            console.log(err)
            fetchStatusFunction(-1)
        })
    }
    return usersArray;
}


const UserList = () => {

    const [ users, setUsers ] = useState([])
    const [ fetchStatus, setFetchStatus ] = useState(0); /* 0 - loading, -1 - error, 1 - succes, 10 - disenable  */

    useEffect( () => {
        
        setTimeout( () => {
            const usersList = fetchFunction(URL_API, 10, setFetchStatus);
            setUsers(usersList);
        }, 2000)

    },[])
    
    return(
        <div>
            <WaitingComponent status={fetchStatus} />

            { users.map( (user) => (
                <User key={user.info.seed} data={user.results[0] } />
            ))}

            <button onClick={ () => console.log(users) } > console.log </button>
        </div>
    )
}

export default UserList;