import React from "react";
import './AboutMe.css';
import Grid from '@material-ui/core/Grid';

const AboutMe = () => {

    return (
        <div className="aboutMeContainer">
            <div className="aboutMeTitleContainer">
                <h1 className="aboutMeTitle">About Me.</h1>
            </div>
            <Grid container spacing={0}>
                <Grid item xs={12} sm={6}>
                    <div className="aboutMeContent">
                    Lorem ipsum odor amet, consectetuer adipiscing elit. Ac purus in massa egestas mollis varius;
    dignissim elementum. Mollis tincidunt mattis hendrerit dolor eros enim, nisi ligula ornare.
    Hendrerit parturient habitant pharetra rutrum gravida porttitor eros feugiat. Mollis elit
    sodales taciti duis praesent id. Consequat urna vitae morbi nunc congue.
                    </div>
                </Grid>
                <Grid item xs={12} sm={6}>
                Lorem ipsum odor amet, consectetuer adipiscing elit. Ac purus in massa egestas mollis varius;
    dignissim elementum. Mollis tincidunt mattis hendrerit dolor eros enim, nisi ligula ornare.
    Hendrerit parturient habitant pharetra rutrum gravida porttitor eros feugiat. Mollis elit
    sodales taciti duis praesent id. Consequat urna vitae morbi nunc congue.
                </Grid>
            </Grid>
        </div>
    )
}

export default AboutMe;