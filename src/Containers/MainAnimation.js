import React, { useEffect, useRef } from 'react';

import { gsap } from 'gsap';

const MainAnimation = () => {

    const dotRef = useRef();
    const backgroundRef = useRef();
    const tl = gsap.timeline();

    const styles = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: 'black',
        dot: {
            position: 'absolute',
            height: '50px',
            width: '50px',
            borderRadius: '50%',
            backgroundColor: 'white'
        },
        text: {
            zIndex: 10
        }
    }

    useEffect( () => {
        tl.set(dotRef.current,{
            scale: 0.1
        })
        .to(dotRef.current, {
            scale: 18,
            duration: 2,
            ease: "bounce.out"
        })

    })


    return(
        <div style={styles} ref={backgroundRef} >
            <div style={styles.text} >
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                when an unknown printer took a galley of type and scrambled it to make a type 
                specimen book. It has survived not only five centuries, but also the leap into 
                electronic typesetting, remaining essentially unchanged. It was popularised in 
                the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
                and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </div>
            <div ref={dotRef} style={styles.dot} > </div>
        </div>
    )
}

export default MainAnimation;