import { TextField} from '@mui/material';


function AddTitle() {

  return(
    <div className="addTitle">
      <TextField
        sx={{ mt:2, mb:1, width: 350 }}
        required
        label="Movie Title"
        color="primary"
        autoComplete="off"
      />
    </div>
  )
}

export default AddTitle;