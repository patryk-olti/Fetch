import React, { useState } from "react";

import Container from "../Containers/Container";
import Button from "../Components/Button";

import api from '../api';

const Admin = () => {

    const [ users , setUsers ] = useState([])

    const handleClickReset = () => {
        setUsers([]);
    }

    const handleClickGet = () => {
        api.get("")
            .then( data => setUsers(data))
    }

    const newObj = {
        id: 10,
        firstName: "patryk",
        lastName: "oltuch",
        age: 26
    }

    const handleClickPost = () => {
        api.post("", {
            id: 10,
            firstName: "patryk",
            lastName: "oltuch",
            age: 26
        })
    }


    const handleClickTest = () => {

        fetch("posts.json", {
            method: "POST",
            body: JSON.stringify({
                name: 'Patryk'
            })
        })
        .then( res => {
            return res.json()
        })
        .then( data => console.log(data))

    }


    return(
        <div>
           <Container>
           <Button content="test" handleClick={handleClickTest}/>

            <Button content="reset" handleClick={handleClickReset}/>
            <Button content="get" handleClick={handleClickGet}/>
            <Button content="post" handleClick={handleClickPost}/>
           </Container>
           

            <div>
                users: {JSON.stringify(users)}
            </div>

            {console.log(users)}
        </div>
    )
}

export default Admin;