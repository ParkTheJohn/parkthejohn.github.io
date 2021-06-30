import React from "react";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { Link as Scroll } from 'react-scroll';
import IconButton from '@material-ui/core/IconButton';
import HomeIcon from '@material-ui/icons/Home';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ContactsIcon from '@material-ui/icons/Contacts';

const Nav = () => {

    return (
        <AppBar style={{backgroundColor: "white"}} position="sticky" /*style={{ background: 'transparent', boxShadow: 'none'}}*/>
        <Toolbar>
          <Scroll to="App" smooth="false">
            <IconButton style={{color: "black"}} color="inherit">
              <HomeIcon/>
            </IconButton>
          </Scroll>
          <Scroll to="aboutMeContainer" smooth="false">
            <IconButton style={{color: "black"}} color="inherit">
              <AccountCircleIcon/>
            </IconButton>          
          </Scroll>
          <Scroll to="projectsContainer" smooth="false">
            <IconButton style={{color: "black"}} color="inherit">
              <DashboardIcon/>
            </IconButton>          
          </Scroll>
          <Scroll to="contactsContainer" smooth="false"> 
            <IconButton style={{color: "black"}} color="inherit">
              <ContactsIcon/>
            </IconButton>          
          </Scroll>
          
        </Toolbar>
      </AppBar>
    )
}

export default Nav;