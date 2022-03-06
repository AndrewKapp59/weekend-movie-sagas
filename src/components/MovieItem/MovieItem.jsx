import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';


function MovieItem({movie}) {
  const dispatch = useDispatch();
  const history = useHistory();

  const handleSelectedMovie = (movie) => {
    dispatch({type: 'SET_SELECTED_MOVIE', payload: movie });
    history.push('/details')
  }

  const title = movie.title;
  const poster = movie.poster;
  const id = movie.id;

  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };


  return (
    <Card sx={{ maxWidth: 345 }}>
    <CardHeader
      avatar={
        <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
          M
        </Avatar>
      }
      title={title}
      // subheader="September 14, 2016"
    />
    <CardMedia
        component="img"
        height="350"
        image={poster}
        alt={title, "Poster"}
    />
      <CardActions>
        <Button onClick={() => handleSelectedMovie(movie)} size="small">See Details</Button>
      </CardActions>
      </Card>
  );
}

export default MovieItem;