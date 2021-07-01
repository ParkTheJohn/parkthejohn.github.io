import React from "react";
import './Contacts.css';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import EmailIcon from '@material-ui/icons/Email';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import InstagramIcon from '@material-ui/icons/Instagram';

const Contacts = () => {

    const handleEmail = () => {
        window.location.href="mailto:parkjohn981001@gmail.com";
    };

    const handleLinkedIn = () => {
        window.open("https://www.linkedin.com/in/jongwoo-park/");
      };

    const handleGithub = () => {
        window.open("https://github.com/ParkTheJohn");
    };

    const handleInstagram = () => {
        window.open("https://www.instagram.com/parkthejohn/");
    };

    return (
        <div className="contactsContainer">
            <Grid container spacing={0}>
                <Grid item xs={6} sm={3} align="center">
                    <Button
                        color="inherit"
                        startIcon={<EmailIcon />}
                        style={{color: "white", textTransform: "none"}}
                        onClick={handleEmail}
                        size="large"
                    >
                        Email
                    </Button>
                </Grid>
                <Grid item xs={6} sm={3} align="center">
                    <Button
                        color="inherit"
                        startIcon={<LinkedInIcon />}
                        style={{color: "white", textTransform: "none"}}
                        onClick={handleLinkedIn}
                        size="large"
                    >
                        LinkedIn
                    </Button>
                </Grid>
                <Grid item xs={6} sm={3} align="center">
                    <Button
                        color="inherit"
                        startIcon={<GitHubIcon />}
                        style={{color: "white", textTransform: "none"}}
                        onClick={handleGithub}
                        size="large"
                    >
                        Github
                    </Button>
                </Grid>
                <Grid item xs={6} sm={3} align="center">
                    <Button
                        color="inherit"
                        startIcon={<InstagramIcon />}
                        style={{color: "white", textTransform: "none"}}
                        onClick={handleInstagram}
                        size="large"
                    >
                        Instagram
                    </Button>
                </Grid>
            </Grid>
            <div className="contactsText">
                © 2021 Jongwoo Park.
                All Rights Reserved.
            </div>
        </div>
    )
}

export default Contacts;