import { useDispatch } from 'react-redux';
import React, { useState } from 'react';

import { TextField} from '@mui/material';


function AddTitle(event) {

  
  const dispatch = useDispatch();

  //set title state
  const [title, setTitle] = useState()

  const addTitle =(event) => {
    event.preventDefault();
    setTitle(event.target.value)
    dispatch({
      type: "ADD_TITLE",
      payload: { title },
    });
  }

  return(
    <div className="addTitle">
      <TextField
        sx={{ mt:2, mb:1, width: 350 }}
        required
        label="Movie Title"
        color="primary"
        autoComplete="off"
        onChange={(event) => {addTitle}}
        value={title}
      />
    </div>
  )
}

export default AddTitle;