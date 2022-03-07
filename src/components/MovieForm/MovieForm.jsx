import { TextField, Button } from '@mui/material';
import { height } from '@mui/system';
import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import AddGenres from './AddGenres';
import AddGenre from './AddGenre'
import AddTitle from './AddTitle';
import AddPoster from './AddPoster';
import AddDescription from './AddDescription';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const MovieForm = () => {
  const history = useHistory();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: 'FETCH_GENRES' });
  }, []);

  const newMovie = useSelector((store) => store.newMovie);

  const submitNew = (event) => {
    event.preventDefault();
    console.log(newMovie);

    // TODO - axios request to server to add feedback
    axios
      .post('/', newMovie)
      .then((response) => {
        console.log('New Movie posted');
      })
      .catch((error) => {
        console.log('Error Posting', error);
        alert('New Movie not posted');
      });

    history.push('/');
  };

  const cancel = (event) => {
    history.push('/');
  };

  return (
    <Grid container justifyContent="center">
      <Paper sx={{ mt: 2, mb: 75, width: 400 }}>
        <div className="container">
          <AddTitle />
          <AddPoster />
          <AddGenres />
          <AddDescription />
          <Button
            onClick={submitNew}
            type="submit"
            variant="contained"
            sx={{ mt: 1, mb: 2, mr: 1 }}
          >
            Save
          </Button>
          <Button
            onClick={cancel}
            type=""
            variant="contained"
            sx={{ mt: 1, mb: 2, ml: 1 }}
            required
          >
            Cancel
          </Button>
        </div>
      </Paper>
    </Grid>
  );
};

export default MovieForm;
