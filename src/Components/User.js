import React from "react";

import Img from "./Img";

const User = ({ data }) => {

    const userObject = {
        gender: data.gender,
        firstName: data.name.first,
        lastName: data.name.last,
        city: data.location.city,
        street: data.location.street.name ,
        email: data.email,
        age: data.dob.age,
        img: data.picture.large
    }

    const { gender, firstName, lastName, city, street, email, age, img } = userObject;

    const styles = {
        position: 'relative',
        fontSize: '20px',
        width: '500px',
        height: '250px',
        textTransform: 'capitalize',

        padding: '10px 20px',
        border: '1px solid rgba(243, 241, 239, 1)',

        container: {
            display: 'flex',
            justifyContent: 'center',
            padding: '5px'
        },
        backgroundDiv: {
            width: '100%',
            height: '40%',
            position: 'absolute',
            top: '0',
            left: 0,
            backgroundColor: 'rgba(232, 236, 241, 1)',
            borderBottom: '1px solid gray',
            zIndex: -10
        },
        text: {
            marginTop: '10px',
            fontSize: '30px',
            letterSpacing: '2px'
        }
    }

    return(
        <div style={styles} >
            <div style={styles.container} >
                <Img src={img} size={150} />
            </div>
            
            <div style={styles.text}> {firstName} {lastName} </div>

        {/*  
            <div> {gender} </div>
            
            <div> {city} </div>
            <div> {street} </div>
            <div> {email} </div>
            <div> {age} </div>

            */}

            <div style={styles.backgroundDiv} ></div>
        </div>
    )
}

export default User;