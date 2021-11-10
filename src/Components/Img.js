import React from 'react';

const Img = ({ src, size }) => {

    const styles = {
        padding: '5px',
        width: `${size}px`,
        height: `${size}px`,
        borderRadius: `100%`,
        border: '1px solid gray',
        backgroundColor: 'white',
        img: {
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            borderRadius: `100%`
        }
    }

    return(
        <div style={styles} >
            <img src={src} alt="img" style={styles.img} />
        </div>
    )
}

export default Img