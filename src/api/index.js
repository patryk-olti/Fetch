const API_URL = "users.json";

function request( endpoint = "" , method = "GET", data = null ){

    const config = {
        method,
        headers: {
            "Content-Type": "application/json",
        }
    };

    if(method === "POST" || method === "PATCH"){
        config.body = JSON.stringify(data);
    }

    const url = `${API_URL}${endpoint}`;

    return fetch( url,config ).then( response => response.json())
}

const get = ( endpoint ) => request( endpoint );
const post = ( endpoint, data ) => request( endpoint, "POST", data );
const patch = ( endpoint, data ) => request( endpoint, "PATCH", data );
const _delete = ( endpoint ) => request( endpoint, "DELETE" );

export default {
    get,
    post,
    patch,
    delete: _delete
}