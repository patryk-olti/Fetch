import React, { useEffect, useRef } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import gsap from 'gsap';

const Icon = ({ src }) => {

    const iconRef = useRef();

    const styles = {
        padding: '5px',
        fontSize: '30px',
        color: 'rgb(192,192,192)',
        cursor: 'pointer'
    }

    useEffect( () => {
        gsap.to(iconRef.current, {
            color: 'red',
            duration: '2'
        })
    },[])



    return(
        <div style={styles} ref={iconRef} >
            <FontAwesomeIcon icon={src}  />
        </div>
    )
}

export default Icon;