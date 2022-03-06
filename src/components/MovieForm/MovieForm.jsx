import { TextField, Button } from "@mui/material";
import React, { useState } from "react";
import { useDispatch } from "react-redux";


const MovieForm = () => {
  const 
  
  
  return(
    <>
      <form onSubmit={handleSubmit} className='movie-form'>
        <TextField
          placeholder='Enter movie description'
          onChange={(event) => {
            setTitle(event.target.value);
          }}
          size='small'
        />
        <Button type='submit' variant='contained'>
            Submit
        </Button>
      </form>
    </>
  )
}

export default MovieForm;