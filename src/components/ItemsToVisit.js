import { makeStyles } from "@material-ui/core";
import React from "react";
import ItemCard from "./ItemCard";
import catalog from '../static/dataClient/products/catalog'
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

const ItemsToVisit = () => {
  const classes = useStyles();
  const checked = useWindowPosition('header')
  //const [checked, setChecked] = useState(false);
  // useEffect(() => {
  //   setChecked(true)
  // }, [])
  return <div className={classes.root} id='item-to-visit'>
    {catalog.items.map((i) => <ItemCard item={i} checked={checked} />)}

  </div>
}

export default ItemsToVisit;
