import React from "react";
import './Projects.css';
import Grid from '@material-ui/core/Grid';
import ProjectCard from "./ProjectCard";
import { useSpring, animated } from 'react-spring'

const Projects = () => {

    const props = useSpring({ 
        to: { opacity: 1 }, 
        from: { opacity: 0 },
        delay: 300,
        config: { duration: 1000},
    })

    const indices = [0, 1, 2, 3];

    return (
        <animated.div style={props}>
            <div className="projectsContainer">
                <div className="projectsTitleContainer">
                    <h1 className="projectsTitle">Projects</h1>
                </div>
                <Grid container spacing={0} >
                    {indices.map((index) => (
                        <Grid key={index} item xs={12} sm={6} align="center">
                        <div className="projectsContent">
                            <ProjectCard index={index}/>
                        </div>
                    </Grid>
                    ))}
                </Grid>
            </div>
        </animated.div>
    )
}

export default Projects;