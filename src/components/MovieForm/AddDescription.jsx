import { TextField} from '@mui/material';


function AddDescription() {

  return(
    <div className="addDescription">
      <TextField
        id="standard-multiline-flexible"
        multiline
        maxRows={10}
        sx={{ m: 1, width: 350, height: 100 }}
        required
        label="Movie Description"
        color="primary"
        autoComplete="off"
      />
    </div>
  )
}

export default AddDescription;



