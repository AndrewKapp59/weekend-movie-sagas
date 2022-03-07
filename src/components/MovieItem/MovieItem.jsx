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
        {/* <CardHeader
         style={{backgroundColor: "#66a9e9"}}
          // avatar={
          //   <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
          //     M
          //   </Avatar>
          // }
          title={title}
        /> */}
      <CardMedia
        component="img"
        height="325"
        image={poster}
        alt={(title, 'Poster')}
      />
      <CardContent>
        <Typography gutterBottom variant="h8" component="div">
          {title}
        </Typography>
      </CardContent>
      <CardActions>
        <div className='details'>
          <Button 
          onClick={() => handleSelectedMovie(movie)} 
          size="small" 
          color="primary"
          >
            See Details
          </Button>
        </div>

      </CardActions>
    </Card>
  );
}

export default MovieItem;
