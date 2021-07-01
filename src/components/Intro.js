import React from "react";
import wallpaper from "./images/whiteBackground.jpg";
import portrait from "./images/portraitTest.jpg";
import './Intro.css';

const Intro = () => {

    return (
        <div className="introContainer">
            <img src={wallpaper} alt="Wallpaper" className="introImage" />
            <img src={portrait} alt="Portrait" className="portraitImage" />
            <div className="introText">
                <h1 className="introTextName">Jongwoo Park</h1>
                <h1 className="introTextTitle">Software Engineer</h1>
            </div>
        </div>
    )
}

export default Intro;