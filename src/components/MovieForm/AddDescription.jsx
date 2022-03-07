import { useDispatch } from 'react-redux';
import React, { useState } from 'react';
import { TextField, Button} from '@mui/material';


function AddDescription(event) {

  const dispatch = useDispatch();

  // set description state
  const [description, setDescription] = useState();

  const addDescription =(event) => {
    event.preventDefault();
    setTitle(event.target.value)
    dispatch({
      type: "ADD_DESCRIPTION",
      payload: { description },
    });
  }


  return(
    <div className="addDescription">
      <TextField
        id="standard-multiline-flexible"
        multiline
        maxRows={5}
        sx={{ color: 'white' , mt: 1, mb: 1, width: 350 }}
        required
        label="Movie Description"
        color="primary"
        autoComplete="off"
        onChange={(event) => {addDescription}}
        value={description}
      />
    </div>
  )
}

export default AddDescription;



