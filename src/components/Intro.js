import React from "react";
import wallpaper from "./images/whiteBackground.jpg";
import Typography from '@material-ui/core/Typography';
import './Intro.css';

const Intro = () => {

    return (
        <div className="introContainer">
            <img src={wallpaper} alt="Wallpaper" className="introImage" />
            <div className="introText">
                <h1>Hi,</h1>
                <h1>I'm Jongwoo Park</h1>
                <h1>A Software Engineer.</h1>
            </div>
        </div>
    )
}

export default Intro;