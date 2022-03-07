import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MovieItem from '../MovieItem/MovieItem'
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import './MovieList.css'
import { blueGrey } from '@mui/material/colors';

function MovieList() {

    const dispatch = useDispatch();
    const movies = useSelector(store => store.movies);

    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES' });
    }, []);

    return (
        <main>
            <h1>MovieList</h1>
            <Grid container spacing={2}>
                {movies.map((movie, index) => {
                    return (
                        <Grid item xs={2}>
                           <MovieItem 
                              key={index}
                              movie={movie} 
                           />
                        </Grid>
                    );
                })}
            </Grid>
        </main>

    );
}

export default MovieList;