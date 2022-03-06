import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

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

  return (
    <div key={id}>
      <h3>{title}</h3>
      <img onClick={() => handleSelectedMovie(movie)} src={poster} alt={title} />
    </div>
  );
}

export default MovieItem;