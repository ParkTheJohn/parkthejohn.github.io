import React from "react";
import './AboutMe.css';
import Grid from '@material-ui/core/Grid';
import portrait from "./images/aboutMePortraitTest2.jpg";
import GetAppIcon from '@material-ui/icons/GetApp';
import Button from '@material-ui/core/Button';
import { useSpring, animated } from 'react-spring'


const AboutMe = () => {

    const props = useSpring({ 
        to: { opacity: 1 }, 
        from: { opacity: 0 },
        delay: 300,
        config: { duration: 1000},
    })

    const handleResume = () => {
        window.open("https://drive.google.com/file/d/1ToiQ3Hvl05cqtrW-yDxn5iD3Uq2cioNl/view");
    };

    return (
        <animated.div style={props}>
            <div className="aboutMeContainer">
                <div className="aboutMeTitleContainer">
                    <h1 className="aboutMeTitle">About Me</h1>
                </div>
                <Grid container spacing={0}>
                    <Grid item xs={12} sm={6}>
                        <img src={portrait} alt="Wallpaper" className="aboutMeImage" />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <div className="aboutMeContent">
                        Hi! I’m Jongwoo Park and I graduated from UC Santa Cruz in Spring 2021 with a B.S. in Computer Science. Influenced by my father who is a software engineer in Silicon Valley, I was exposed to computers and the internet at a very young age. Though I was not particularly interested in programming, I had many experiences toying with game developing tools and modding the video games I played. In fact, I enjoyed changing the finished product into something different and making it even better than before. Remembering this, I chose my major as computer science, an area of study where I can incorporate my creativity from music and manipulate products to make them better and more efficient. Currently, I have many different experiences in frontend development, with tools such as ReactJS, JavaScript, HTML/CSS, Flutter, and React Native. I enjoy exploring how aspects in UI/UX design intersects with front-end development. I also have worked with many different backend tools, such as PostgreSQL, NodeJS, ExpressJS, MongoDB, and FireBase. 
                        </div>
                        <div className="aboutMeContent">
                        I’m currently looking for full-time entry-level software engineering positions in the San Francisco Bay Area that challenge me to step out of my comfort zone to learn the new state of the art technologies. Results drive me to always pursue the highest standard. In 10 years, I see myself as a mentor and a leader for those with a passion in computer science, just like the mentors and leaders that led me to where I am now for my passion in this field.
                        </div>
                        <div className="aboutMeContent">
                        <Button
                            variant="outlined"
                            color="inherit"
                            startIcon={<GetAppIcon />}
                            style={{color: "black", textTransform: "none"}}
                            onClick={handleResume}
                            size="large"
                        >
                            Resume
                        </Button>
                        </div>
                    </Grid>
                </Grid>
                {/*<button onClick={click}>test</button>*/}
            </div>
        </animated.div>
    )
}

export default AboutMe;