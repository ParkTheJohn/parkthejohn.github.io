import React from "react";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Button from '@material-ui/core/Button';

const Nav = () => {
    return (
        <AppBar style={{backgroundColor: "white"}} position="static" /*style={{ background: 'transparent', boxShadow: 'none'}}*/>
        <Toolbar>
          <IconButton style={{color: "black"}} edge="start" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Button style={{color: "black"}} color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    )
}

export default Nav;