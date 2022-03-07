import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import './MovieItem.css'

function MovieItem({ movie }) {
  const dispatch = useDispatch();
  const history = useHistory();

  const handleSelectedMovie = (movie) => {
    dispatch({ type: 'SET_SELECTED_MOVIE', payload: movie });
    history.push('/details');
  };

  const title = movie.title;
  const poster = movie.poster;
  const id = movie.id;

  const styles = theme => ({
    card: {
      backgroundColor: "primary"
    }
  });
  
  return (
    <Card  style={{backgroundColor: "#dee8f1"}} sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="325"
        image={poster}
        onClick={() => handleSelectedMovie(movie)}
        alt={(title, 'Poster')}
      />
    </Card>
  );
}

export default MovieItem;
