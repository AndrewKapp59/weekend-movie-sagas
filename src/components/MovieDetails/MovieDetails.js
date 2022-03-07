import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

// displays the selected movie and it's details 
function MovieDetails() {
   const selectedMovie = useSelector((store) => store.selectedMovie)
  
  return(
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
        <Box sx={{ 
          bgcolor: '#cfe8fc', 
          height: '100vh' }} >
          <h1>Selected Movie</h1>
          {
            selectedMovie.title ? (
              <>
                <h3>{selectedMovie.title}</h3>
                <img src={selectedMovie.poster} alt={selectedMovie.title}/>
                <p>{selectedMovie.description}</p>
                {selectedMovie.genres.map((genre, index) => {
                        return (

                            <div key={index}>{genre}</div>

                        );
                    })}
              </>
            ) : (
              <p>No Movie Selected</p>
            )
          }
        </Box>
      </Container>
    </React.Fragment>

  );
}

export default MovieDetails;