import React from "react";
import './Projects.css';
import Grid from '@material-ui/core/Grid';
import ProjectCard from "./ProjectCard";

const Projects = () => {

    return (
        <div className="projectsContainer">
            <div className="projectsTitleContainer">
                <h1 className="projectsTitle">Projects.</h1>
            </div>
            <Grid container spacing={0}>
                <Grid item xs={12} sm={6}>
                    <div className="projectsContent">
                        <ProjectCard index="0"/>
                    </div>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <div className="projectsContent">
                        <ProjectCard index="1"/>
                    </div>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <div className="projectsContent">
                        <ProjectCard index="2"/>
                    </div>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <div className="projectsContent">
                        <ProjectCard index="3"/>
                    </div>
                </Grid>
            </Grid>
        </div>
    )
}

export default Projects;