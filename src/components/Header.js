import React, { useEffect, useState } from "react";
import { Toolbar, AppBar, makeStyles, IconButton, Fade } from "@material-ui/core";
import SortIcon from '@material-ui/icons/Sort'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Link as Scroll } from 'react-scroll'


const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    fontFamily: 'Nunito',
    color: '#eeeddd',
  },
  appBar: {
    background: 'none',
  },
  icon: {
    color: '#eeeddd',
    fontSize: '1rem'
  },
  appBarTitle: { flexGrow: 1 },
  colorText: { color: '#00a4c5' },
  title: {
    color: '#eeeddd',
    fontSize: '4.5rem',
    marginTop: '-20rem'
  },
  container: {
    textAlign: 'center',
  },
  appBarWrapper: {
    width: '80%',
    margin: '0 auto'
  },
  goDownIcon: {
    color: '#eeeddd',
    fontSize: '4rem',
  }
}))

function Header() {
  const classes = useStyles();
  const [checked, setChecked] = useState(false);
  useEffect(() => {
    setChecked(true)
  }, [])
  return <div className={classes.root} id='header'>
    <AppBar className={classes.appBar} elevation={0}>
      <Toolbar className={classes.appBarWrapper}>
        <h1 className={classes.appBarTitle}>js<span className={classes.colorText}>.dev</span></h1>
        <IconButton className={classes.icon}>
          <SortIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
    <Fade
      in={checked}
      {...checked ? { timeout: 1000 } : {}}
      collapsedSize={150}
    >

      <div className={classes.container}>
        <h1 className={classes.title}>
          Welcome to<br />
          <span>
            js<span className={classes.colorText}>.dev</span>
          </span>
        </h1>
        <Scroll to='item-to-visit' smooth={true}>
          <IconButton>
            <ExpandMoreIcon className={classes.goDownIcon} />
          </IconButton>
        </Scroll>
      </div>

    </Fade>
  </div>
}

export default Header;
