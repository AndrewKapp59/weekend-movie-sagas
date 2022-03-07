import { useDispatch } from 'react-redux';
import React, { useState } from 'react';

import { TextField} from '@mui/material';


function AddPoster(event) {

  const dispatch = useDispatch();

  //set poster state
  const [poster, setPoster] = useState()

  const addPoster =(event) => {
    event.preventDefault();
    setPoster(event.target.value)
    dispatch({
      type: "ADD_URL",
      payload: { poster },
    });
  }

  return(
    <div className="addPoster">
      <TextField
        sx={{ m: 1, width: 350 }}
        required
        label="Poster URL"
        color="primary"
        autoComplete="off"
        onChange={(event) => {addPoster}}
        value={poster}
      />
    </div>
  )
}

export default AddPoster;



