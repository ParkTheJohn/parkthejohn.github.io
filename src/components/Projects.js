import React from "react";
import './Projects.css';
import Grid from '@material-ui/core/Grid';
import ProjectCard from "./ProjectCard";

const Projects = () => {

    const indices = [0, 1, 2, 3];

    return (
        <div className="projectsContainer">
            <div className="projectsTitleContainer">
                <h1 className="projectsTitle">Projects.</h1>
            </div>
            <Grid container spacing={0}>
                {indices.map((index) => (
                    <Grid key={index} item xs={12} sm={6}>
                    <div className="projectsContent">
                        <ProjectCard index={index}/>
                    </div>
                </Grid>
                ))}
            </Grid>
        </div>
    )
}

export default Projects;