import React, { useState } from "react";

import User from "./User";

const UserSearch = ({ data }) => {

    const [ searchUser, setSearchUser ] = useState("");
    const [ finder, setFinder ] = useState("");

    const handleChange = (e) => {
        let value = e.target.value;
        setSearchUser(value);
    }

    const handleClick = (e) => {
        e.preventDefault();
        let value = data.find( item => item.firstName.toUpperCase() == searchUser.toUpperCase() );
        setFinder(value);
        setSearchUser("");
    }

    return(
        <form>
            <input type="text" value={searchUser} onChange={handleChange} />
            <button onClick={handleClick} >search</button>
            <User firstName={finder.firstName} lastName={finder.lastName} age={finder.age} />
        </form>
    )
}

export default UserSearch;