import { TextField, Button } from '@mui/material';
import { height } from '@mui/system';
import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import AddGenres from './AddGenres';
import AddTitle from './AddTitle';
import AddPoster from './AddPoster'
import AddDescription from './AddDescription';

const ariaLabel = { 'aria-label': 'description' };

const MovieForm = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: 'FETCH_GENRES' });
  }, []);

  return (
    <form>
    <div className="container">
      <AddTitle />
      <AddPoster />
      <AddGenres />
      <AddDescription />

      <div className="next">
        <Button type="submit" variant="contained">
          Submit
        </Button>
      </div>
    </div>
    </form>
  );
};

export default MovieForm;
