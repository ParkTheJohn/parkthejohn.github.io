import React from "react";
import wallpaper from "./images/whiteBackground.jpg";
import './Intro.css';
import Button from '@material-ui/core/Button';

const Intro = () => {

    return (
        <div className="introContainer">
            <img src={wallpaper} alt="Wallpaper" className="introImage" />
            <div className="introText">
                <h1 className="introTextHello">Hi,</h1>
                <h1 className="introTextName">I'm Jongwoo Park,</h1>
                <h1 className="introTextTitle">A Software Engineer.</h1>
                <Button variant ="outlined" size="large" style={{color:"black"}}>
                    About Me
                </Button>
            </div>
        </div>
    )
}

export default Intro;