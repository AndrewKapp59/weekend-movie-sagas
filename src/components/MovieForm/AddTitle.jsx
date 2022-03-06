import { TextField} from '@mui/material';


function AddTitle() {

  return(
    <div className="addTitle">
      <TextField
        sx={{ m:1, width: 350 }}
        required
        label="Movie Title"
        color="primary"
        autoComplete="off"
      />
    </div>
  )
}

export default AddTitle;