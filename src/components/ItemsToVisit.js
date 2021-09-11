import { makeStyles } from "@material-ui/core";
import React from "react";
import ItemsCard from "./ItemsCard";
import items from '../static/items'
import useWindowPosition from '../hooks/useWindowPosition'

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
    display: 'flex',
    flexWrap: "wrap",
    justifyContent: 'center',
    alignItems: 'center',
    [theme.breakpoints.down('md')]: { flexDirection: 'column' },
  }
}))

function ItemsToVisit() {
  const classes = useStyles();
  const checked = useWindowPosition('header')
  //const [checked, setChecked] = useState(false);
  // useEffect(() => {
  //   setChecked(true)
  // }, [])
  return <div className={classes.root} id='item-to-visit'>
    <ItemsCard item={items[0]} checked={checked} />
    <ItemsCard item={items[1]} checked={checked} />
    <ItemsCard item={items[2]} checked={checked} />
    <ItemsCard item={items[3]} checked={checked} />
    <ItemsCard item={items[0]} checked={checked} />
    <ItemsCard item={items[1]} checked={checked} />
    <ItemsCard item={items[2]} checked={checked} />
    <ItemsCard item={items[3]} checked={checked} />
  </div>
}

export default ItemsToVisit;
