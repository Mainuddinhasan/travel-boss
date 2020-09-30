import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import { useHistory } from 'react-router-dom';


const useStyles = makeStyles({
  root: {
    maxWidth: 120,
  },
});

export default function Cards({place}){
  const classes = useStyles();
  // const history = useHistory()
  //   const handleBook = (bedType) => {
  //       history.push(`/book/${bedType}`);
  //   }
  return (
    <Card className={classes.root}>

    <CardActionArea>
      <CardMedia
        component="img"
        alt="Contemplative Reptile"
        height="220"
        image={place.img}
        title="Contemplative Reptile"
      />
    </CardActionArea>
    </Card>
  );
}




