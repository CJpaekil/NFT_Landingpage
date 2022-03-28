import React from "react";
import {
  AppBar,
  Toolbar,
  CssBaseline,
  Typography,
  makeStyles,
  useTheme,
  useMediaQuery,
} from "@material-ui/core";
import { MdOutlineNotifications } from 'react-icons/md'
import { Link } from "react-router-dom";
import DrawerComponent from "./Drawer";

const useStyles = makeStyles((theme) => ({
  navlinks: {
    marginLeft: theme.spacing(5),
    display: "flex",
  },
  logo: {
    flexGrow: "1",
    cursor: "pointer",
  },
  link: {
    textDecoration: "none",
    color: "white",
    fontSize: "15px",
    marginLeft: theme.spacing(5),
    "&:hover": {
      color: "yellow",
      borderBottom: "1px solid white",
    },
  },
}));

function Navbar() {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <AppBar position="static">
      <CssBaseline />
      <Toolbar>
        <Typography variant="h4" className={classes.logo} style={{flexGrow:'0'}}>
        
              <MdOutlineNotifications style={{color: 'white'}} />
              
           
        </Typography>
        <img src="assets/images/text_only.png" alt="" width="110" height="40" style={{margin:'auto'}}/>
        <DrawerComponent style={{position:'absolute', right:'0'}} />

      </Toolbar>
    </AppBar>
  );
}
export default Navbar;
