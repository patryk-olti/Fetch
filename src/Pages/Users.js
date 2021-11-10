import React, { useState, useEffect }  from "react";
import UserList from "../Components/UserList";

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

const Users = () => {

    const [ users, setUsers ] = useState([])
    const [ fetchStatus, setFetchStatus ] = useState(0); /* 0 - loading, -1 - error, 1 - succes, 10 - disenable  */

    useEffect( () => {
        setTimeout( () => {
            if( fetchStatus==0){
                const usersList = fetchFunction(URL_API, 10, setFetchStatus);
                setUsers(usersList);
            }
        }, 2000)
    },[])

    


    const styles = {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        border: '1px solid black'
    }

    return(
        <div style={styles} >
            <UserList users={users} fetchStatus={fetchStatus} />
        </div>
    )
}

export default Users;