import React from "react";
import wallpaper from "./images/whiteBackground.jpg";
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import Fab from '@material-ui/core/Fab';
import './Intro.css';

const Intro = () => {

    return (
        <div className="introContainer">
            <img src={wallpaper} alt="Wallpaper" className="introImage" />
            <div className="introText">
                <h1 className="introTextHello">Hi,</h1>
                <h1 className="introTextName">I'm Jongwoo Park</h1>
                <h1 className="introTextTitle">A Software Engineer.</h1>
                <Fab color="primary" style={{color:"grey"}} variant="extended">
                    About Me
                    <ArrowRightIcon style={{ fontSize: "3vw"}}/>
                </Fab>
            </div>
        </div>
    )
}

export default Intro;