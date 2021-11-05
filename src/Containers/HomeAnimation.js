import React, { useEffect, useRef } from 'react';

import { gsap } from 'gsap';

const HomeAnimation = () => {

    const allBoxes = useRef();
    const allRefs = gsap.utils.selector(allBoxes);

    const tl = gsap.timeline();

    const textRef = useRef();

    useEffect( () => {
        tl.to(textRef.current ,{
            autoAlpha: 0
        })
        .to(allRefs('.box'), {
            x: 100,
            stagger: 0.33,
            duration: 2,
        })
        .to(allRefs(`.box:nth-child(2)`), {
            y:100
        })
        .set(allRefs(`.box:nth-child(3)`), {
            y: 100
        })
        .to(allRefs(`.box:nth-child(3)`), {
            x: 0
        })
        .set(allRefs('.box:nth-child(4)'), {
            x:0,
            y:100
        })
        .to(allRefs('.box:nth-child(4)'), {
            y:0
        })
        .to(allBoxes.current, {
            backgroundColor: 'gray'
        })
        .to(allRefs('.box'), {
            backgroundColor: 'white',
            borderColor: 'transparent'
        })
        .to(allRefs('.box'), {
            scaleX: 10,
            duration: 2
        })
        .to(textRef.current, {
            autoAlpha: 1,
            color: 'black',
            duration: 1
        })


    })

    /*
    const q = gsap.utils.selector(boxRef);
    useEffect(() => {
        gsap.to(q(".box"), {
          x: 100,
          stagger: 0.33,
          repeat: -1,
          repeatDelay: 1,
          yoyo: true
        });
    }, []);
    */

    const styles = {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        overflow: 'hidden',

        box: {
            position: 'absolute',
            width: '100px',
            height: '100px',
            marginBottom: '50px',
            border: '2px solid black'
        },
        textBox: {
            color: 'transparent',
            fontSize: `70px`,
            zIndex: 100
        }
    }

    return(
        <div style={styles} ref={allBoxes} >

            <div style={styles.box} className="box" > </div>
            <div style={styles.box} className="box" > </div>
            <div style={styles.box} className="box" > </div>
            <div style={styles.box} className="box" > </div>

            <div style={styles.textBox} ref={textRef} > Hello World ! </div>

        </div>
    )
}

export default HomeAnimation;