import { useSelector } from 'react-redux';
import { useEffect } from 'react';

// displays the selected movie and it's details 
function MovieDetails() {
   const selectedMovie = useSelector((store) => store.selectedMovie)

   useEffect (() => {

   });
  
  return(
    <section>
      <h1>Selected Movie</h1>
      <h2>Route: localhost:3000/#/details</h2>
      {
        selectedMovie.title ? (
          <>
            <h3>{selectedMovie.title}</h3>
            <img src={selectedMovie.poster} alt={movie.title}/>
            <p>{selectedMovie.description}</p>
            {selectedMovie.genres.map((genre, index) => {
                    return (
                      <ul>
                        <li key={index}>{genre}</li>
                      </ul>
                    );
                })}
          </>
        ) : (
          <p>No Movie Selected</p>
        )
      }
    </section>
  );
}

export default MovieDetails;