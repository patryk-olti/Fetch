import React, { useState } from "react";

import Container from "../Containers/Container";
import Button from "../Components/Button";

import api from '../api';

const Admin = () => {

    const [ users , setUsers ] = useState([])

    const handleClickGet = () => {
        api.get("")
            .then( data => setUsers(data))
    }



    return(
        <div>
           <Container>
            <Button content="show" handleClick={handleClickGet}/>
            <Button content="show" handleClick={handleClickGet}/>
           </Container>
           

            <div>
                users: {JSON.stringify(users)}
            </div>
        </div>
    )
}

export default Admin;