import { TextField} from '@mui/material';


function AddPoster() {

  return(
    <div className="addPoster">
      <TextField
        sx={{ m: 1, width: 350 }}
        required
        label="Poster URL"
        color="primary"
        autoComplete="off"
      />
    </div>
  )
}

export default AddPoster;



