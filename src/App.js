//import './App.css';
import React from "react";
import { CssBaseline, Grid, makeStyles } from "@material-ui/core";
import bg from "./static/dataClient/design/bg.jpg";
import Cover from './components/Cover';
import ItemsToVisit from "./components/ItemsToVisit";
import Bounce from "./components/Bounce";

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
    backgroundImage: `url(${bg})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: "100%",
    backgroundColor: 'black',
    backgroundPositionY: 0,
    [theme.breakpoints.down('md')]: { backgroundPositionY: 320, },
  },
  container: {
    color: '#0aasb6',
    backgroundColor: '#aaasb6',
    justifyContent: 'center',
  },
  item: {
    display: 'flex',
    flex: 1,
    //alignItems: 'center',
    flexGrow: 1,
  }
}))

function App() {
  const classes = useStyles();
  return <div className={classes.root}>
    <CssBaseline />
    <Bounce />
    <Cover />
    <ItemsToVisit />
    <Grid container className={classes.container}>
      <Grid item className={classes.item}>100</Grid>
      <Grid item className={classes.item}>200</Grid>
      <Grid item className={classes.item}>300</Grid>
      <Grid item className={classes.item}>400</Grid>
    </Grid>
  </div>
}

export default App;
