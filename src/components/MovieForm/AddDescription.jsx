import { useDispatch } from 'react-redux';
import React, { useState } from 'react';
import { TextField, Button} from '@mui/material';


function AddDescription() {
  const [description, setDescription] = useState('');

  const dispatch = useDispatch();


  const handleDESubmit = (event) => {
    event.preventDefault();

    dispatch({
      type: 'ADD_DESCRIPTION',
      payload: { description },
    });

    setComments('');

    history.push('/review');
  };


  return(
    <div className="addDescription">
      <TextField
        // id="standard-multiline-flexible"
        // multiline
        maxRows={5}
        sx={{ color: 'white' , mt: 1, mb: 1, width: 350 }}
        required
        label="Movie Description"
        color="primary"
        autoComplete="off"
      />
    </div>
  )
}

export default AddDescription;



