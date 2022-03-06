import { TextField, Button } from '@mui/material';
import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import AddGenres from './AddGenres';

const MovieForm = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: 'FETCH_GENRES' });
  }, []);

  return <AddGenres />;
};

export default MovieForm;
