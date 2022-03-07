import { TextField, Button } from '@mui/material';
import { height } from '@mui/system';
import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import AddGenres from './AddGenres';
import AddTitle from './AddTitle';
import AddPoster from './AddPoster';
import AddDescription from './AddDescription';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const MovieForm = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: 'FETCH_GENRES' });
  }, []);

  return (
    <Grid container justifyContent="center">
      <Paper sx={{ mt: 2, mb: 50, width: 400 }}>
        <form>
          <div className="container">
            <AddTitle />
            <AddPoster />
            <AddGenres />
            <AddDescription />
            <Button
              type="submit"
              variant="contained"
              sx={{ mt: 1, mb: 2, mr: 1 }}
            >
              Save
            </Button>
            <Button
              type=""
              variant="contained"
              sx={{ mt: 1, mb: 2, ml: 1 }}
              required
            >
              Cancel
            </Button>
          </div>
        </form>
      </Paper>
    </Grid>
  );
};

export default MovieForm;
