import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

function MovieItem({movie}) {

  const handleSelectedMovie = (movie) => {
    dispatchEvent({type: 'SET_SELECTED_MOVIE', payload: movie })
  }

  const title = movie.title;
  const poster = movie.poster;
  const id = movie.id;

  return (
    <div key={id}>
      <h3>{title}</h3>
      <img onClick={() => handleSelectedMovie(movie)} src={poster} alt={title} />
    </div>
  );
}

export default MovieItem;