//import './App.css';
import React from "react";
import { CssBaseline, makeStyles } from "@material-ui/core"
import bg from "./assets/bg.jpg"
import Header from './components/Header'
import ItemsToVisit from "./components/ItemsToVisit";

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
    backgroundImage: `url(${bg})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: "100%",
    backgroundColor: 'black'
  }
}))

function App() {
  const classes = useStyles();
  return <div className={classes.root}>
    <CssBaseline />
    <Header />
    <ItemsToVisit />
  </div>
}

export default App;
