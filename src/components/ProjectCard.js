import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import projectList from "./ProjectsData.js";
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import './ProjectCard.css';
import Carousel from 'react-material-ui-carousel'
import { Button } from '@material-ui/core'
import CardActions from '@material-ui/core/CardActions';


const useStyles = makeStyles({
  root: {
    maxWidth: 800,
  },
  media: {
    height: 300,
  },
});

const styles = (theme) => ({
    root: {
      margin: 0,
      padding: theme.spacing(2),
    },
    closeButton: {
      position: 'absolute',
      right: theme.spacing(1),
      top: theme.spacing(1),
      color: theme.palette.grey[500],
    },
  });

const DialogTitle = withStyles(styles)((props) => {
    const { children, classes, onClose, ...other } = props;
    return (
      <MuiDialogTitle disableTypography className={classes.root} {...other}>
        <Typography variant="h6">{children}</Typography>
        {onClose ? (
          <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
            <CloseIcon />
          </IconButton>
        ) : null}
      </MuiDialogTitle>
    );
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
            <Card className={classes.root} align="left">
                <CardMedia
                    className={classes.media}
                    image={projectList[param.index].logo}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {projectList[param.index].name}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {projectList[param.index].shortDescription}
                    </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" color="inherit" onClick={handleClickOpen} align="center">
                    Learn More
                  </Button>
                </CardActions>
            </Card>
                <Dialog
                    fullScreen={fullScreen}
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="responsive-dialog-title"
                    maxWidth="sm"
                >
                <DialogTitle id="responsive-dialog-title" onClose={handleClose}>
                    {projectList[param.index].name}
                </DialogTitle>
                <DialogContent dividers>



                  <Carousel
                    navButtonsAlwaysVisible="true"
                    autoPlay="false"
                    animation="slide"
                  >
                  {param.index === 3 ? <img className="contentLandscape" src={projectList[param.index].image1} 
                      alt="Project Img 1"/> 
                      : fullScreen ? <img className="contentMobile" src={projectList[param.index].image1} 
                      alt="Project Img 1"/> 
                      : <img className="contentPortrait" src={projectList[param.index].image1} 
                      alt="Project Img 1"/> 
                    }
                      {param.index === 3 ? <img className="contentLandscape" src={projectList[param.index].image2} 
                      alt="Project Img 2"/> 
                      : fullScreen ? <img className="contentMobile" src={projectList[param.index].image2} 
                      alt="Project Img 2"/> 
                      : <img className="contentPortrait" src={projectList[param.index].image2} 
                      alt="Project Img 2"/> 
                    }
                      {param.index === 3 || param.index === 1 ? <img className="contentLandscape" src={projectList[param.index].image3} 
                      alt="Project Img 3"/> 
                      : fullScreen ? <img className="contentMobile" src={projectList[param.index].image3} 
                      alt="Project Img 3"/> 
                      : <img className="contentPortrait" src={projectList[param.index].image3} 
                      alt="Project Img 3"/> 
                    }
                  </Carousel>
                  <Typography >
                      {projectList[param.index].shortDescription}
                    </Typography>

                  {param.index === 2 || param.index === 3 ? "" 
                      : fullScreen ? <video className="contentMobile"  controls src={projectList[param.index].demo}/> 
                      : param.index === 0 ? <video className="contentPortrait" controls src={projectList[param.index].demo}/> 
                      : <video className="contentLandscape" controls src={projectList[param.index].demo}/> 
                      }
                      
{/*
                    <Typography >
                      {projectList[param.index].shortDescription}
                    </Typography>
                    {param.index === 3 ? <img className="contentImageLandscape" src={projectList[param.index].image1} 
                      alt="Project Img 1"/> 
                      : fullScreen ? <img className="contentImagePortraitMobile" src={projectList[param.index].image1} 
                      alt="Project Img 1"/> 
                      : <img className="contentImagePortraitWeb" src={projectList[param.index].image1} 
                      alt="Project Img 1"/> 
                    }
                    <Typography >
                      {projectList[param.index].shortDescription}
                    </Typography>
                    {param.index === 3 ? <img className="contentImageLandscape" src={projectList[param.index].image2} 
                      alt="Project Img 2"/> 
                      : fullScreen ? <img className="contentImagePortraitMobile" src={projectList[param.index].image2} 
                      alt="Project Img 2"/> 
                      : <img className="contentImagePortraitWeb" src={projectList[param.index].image2} 
                      alt="Project Img 2"/> 
                    }
                    <Typography >
                      {projectList[param.index].shortDescription}
                    </Typography>
                    {param.index === 3 || param.index === 1 ? <img className="contentImageLandscape" src={projectList[param.index].image3} 
                      alt="Project Img 3"/> 
                      : fullScreen ? <img className="contentImagePortraitMobile" src={projectList[param.index].image3} 
                      alt="Project Img 3"/> 
                      : <img className="contentImagePortraitWeb" src={projectList[param.index].image3} 
                      alt="Project Img 3"/> 
                    }
                    <Typography >
                      {projectList[param.index].shortDescription}
                    </Typography>
                    {param.index === 2 || param.index === 3 ? "" 
                      : param.index === 0 ? <video className="contentVideoPortrait" controls
                      src={projectList[param.index].demo}/> 
                      : <video className="contentVideoLandscape" controls
                      src={projectList[param.index].demo}/>
                      }
                    */}
                </DialogContent>
            </Dialog>
        </div>
    )
}

export default ProjectCard;