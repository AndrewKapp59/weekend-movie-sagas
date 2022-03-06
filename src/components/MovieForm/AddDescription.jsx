import { useDispatch } from 'react-redux';
import React, { useState } from 'react';
import { TextField} from '@mui/material';


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
        id="standard-multiline-flexible"
        multiline
        maxRows={10}
        sx={{ color: 'white' , m: 1, width: 350, height: 100 }}
        required
        label="Movie Description"
        color="primary"
        autoComplete="off"
      />
    </div>
  )
}

export default AddDescription;



