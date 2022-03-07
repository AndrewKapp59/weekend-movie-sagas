import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import * as React from 'react';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

// displays the selected movie and it's details
function MovieDetails() {
  const selectedMovie = useSelector((store) => store.selectedMovie);

  return (
    <Grid container justifyContent="center">
      <Paper sx={{ mt: 2, mb: 75, width: 400 }}>
        <div>
          {selectedMovie.title ? (
            <>
              <h3>{selectedMovie.title}</h3>
              <img src={selectedMovie.poster} alt={selectedMovie.title} />
              <p>{selectedMovie.description}</p>
              {selectedMovie.genres.map((genre, index) => {
                return <div key={index}>{genre}</div>;
              })}
            </>
          ) : (
            <p>No Movie Selected</p>
          )}
        </div>
      </Paper>
    </Grid>
  );
}

export default MovieDetails;
