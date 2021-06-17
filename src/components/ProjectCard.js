import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import projectList from "./ProjectsData.js";
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
  root: {
    maxWidth: 800,
  },
  media: {
    height: 300,
  },
});

const ProjectCard = (param) => {
    const [open, setOpen] = React.useState(false);
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));
    const classes = useStyles();

    const handleClickOpen = () => {
        setOpen(true);
      };
    
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Card className={classes.root}>
                <CardActionArea
                    onClick={handleClickOpen}
                >
                    <CardMedia
                    className={classes.media}
                    image={projectList[param.index].image}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {projectList[param.index].name}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {projectList[param.index].shortDescription}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
                <Dialog
                    fullScreen={fullScreen}
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="responsive-dialog-title"
                >
                <DialogTitle id="responsive-dialog-title">{projectList[param.index].name}</DialogTitle>
                <DialogContent dividers>
                    <Typography >
                            {projectList[param.index].shortDescription}
                    </Typography>
                </DialogContent>
                <DialogActions>
                    <Button autoFocus onClick={handleClose} >
                        Close
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}

export default ProjectCard;