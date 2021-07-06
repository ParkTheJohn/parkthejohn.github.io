import React from "react";
import wallpaper from "./images/whiteBackground.jpg";
import portrait from "./images/portraitTest2.jpg";
import { useSpring, animated } from 'react-spring'
import './Intro.css';

const Intro = () => {

    const props = useSpring({ 
        to: { opacity: 1 }, 
        from: { opacity: 0 },
        delay: 300,
        config: { duration: 1000},
    })

    return (
        <animated.div style={props}>
        <div className="introContainer">
            <img src={wallpaper} alt="Wallpaper" className="introImage" />
            <img src={portrait} alt="Portrait" className="portraitImage" />
            <div className="introText">
                <h1 className="introTextName">Jongwoo Park</h1>
                <h1 className="introTextTitle">Software Engineer</h1>
            </div>
        </div>
        </animated.div>
    )
}

export default Intro;