import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Collapse } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 400,
    height: 500,
    [theme.breakpoints.down('md')]: { height: '85%', marginTop: '25%' },
    background: '#00a4c555',
    margin: '20px'
  },
  media: {
    height: 340,
    [theme.breakpoints.down('md')]: { minWidth: 'inherit' },
    minWidth: 540,
  },
  title: {
    fontFamily: 'Nunito',
    fontWeight: 'bold',
    fontSize: '2rem',
    color: '#fff'
  },
  content: {
    fontFamily: 'Nunito',
    fontSize: '1rem',
    color: '#ddd'
  }
}))

const ItemsCard = ({ item, checked }) => {

  const classes = useStyles();
  return (
    <Collapse in={checked} {...checked ? { timeout: 1000 } : {}}>
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={item.image}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2" className={classes.title}>
              {item.title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p" className={classes.content}>
              {item.content}
            </Typography>
          </CardContent>
        </CardActionArea>
        {/* <CardActions>
          <Button size="small" color="primary">
            {item.button1}
          </Button>
          <Button size="small" color="primary">
            {item.button2}
          </Button>
        </CardActions> */}
      </Card>
    </Collapse>
  );
}
export default ItemsCard