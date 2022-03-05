import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

function MovieItem({title, poster, id}) {
  return (
    <div key={id}>
      <h3>{title}</h3>
      <img src={poster} alt={title} />
    </div>
  );
}

export default MovieItem;