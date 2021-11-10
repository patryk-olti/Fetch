import React from "react";

import User from "./User";
import WaitingComponent from "./WaitingComponent";

const UserList = ({ users, fetchStatus }) => {

    
    return(
        <div>
            <WaitingComponent status={fetchStatus} />
            { users.map( (user) => (
                <User key={user.info.seed} data={user.results[0] } />
            ))}
        </div>
    )
}

export default UserList;