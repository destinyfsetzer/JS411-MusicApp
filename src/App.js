import React from "react";
import {
  makeStyles,
  AppBar,
  Toolbar,
  Typography,
  IconButton,
} from "@material-ui/core";
import LoginComp from "./components/LoginComp";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="primary"
            aria-label="menu"
          ></IconButton>
          <Typography variant="h6" className={classes.title}>
            My Music App
          </Typography>
        </Toolbar>
      </AppBar>
      <LoginComp />
    </div>
  );
}
