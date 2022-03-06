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
    </section>
  );
}

export default MovieDetails;