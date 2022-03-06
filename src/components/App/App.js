import {HashRouter as Router, Route, Link} from 'react-router-dom';
import './App.css';
import MovieList from '../MovieList/MovieList'
import MovieDetails from '../MovieDetails/MovieDetails';
import MovieForm from '../MovieForm/MovieForm';

import Button from '@mui/material/Button';

function App() {
  return (
    <div className="App">
      <Router> 
      <div className="navBar">
        <Button variant="text">
          <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>Home</Link>
        </Button>
        <Button variant="text">
          <Link to="/details" style={{ textDecoration: 'none', color: 'white' }}>Details</Link>
        </Button>
        <Button variant="text">
          <Link to="/form" style={{ textDecoration: 'none', color: 'white' }}>Add Movie</Link>
        </Button>
      </div>
        <h1>The Movies Saga!</h1>
        {/* Home */}
        <Route path="/" exact>
          <MovieList />
        </Route>
        {/* Details page */}
        <Route path="/details" exact>
          <MovieDetails/>
        </Route>
        {/* Add Movie page */}
        <MovieForm />
      </Router>
    </div>
  );
}


export default App;
