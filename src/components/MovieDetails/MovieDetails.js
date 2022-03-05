import { useSelector } from 'react-redux';
import { useEffect } from 'react';


function MovieDetails {
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
            {/* <h4>{selectedMovie.name}</h4> */}
            <p>{selectedMovie.description}</p>

          </>
        )
      }
    </section>
  )
}