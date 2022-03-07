import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Chip from '@mui/material/Chip';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

function getStyles(genre, genreName, theme) {
  return {
    fontWeight:
      genreName.indexOf(genre) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

function AddGenre() {
  const dispatch = useDispatch();
  const genres = useSelector((store) => store.genres);
  const theme = useTheme();
  const [genreName, setGenreName] = React.useState();

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setGenreName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value
    );

    dispatch({
      type: "ADD_GENRE",
      payload: {genreName},
    });

  };

  return (
    <div>
      <FormControl sx={{ m: 1, width: 350 }}>
        <InputLabel id="chip-label">Genre</InputLabel>
        <Select
          required
          labelId="chip-label"
          id="chip"
          multiple
          value={genreName}
          onChange={handleChange}
          input={<OutlinedInput id="select-chip" label="Chip" />}
          renderValue={(selected) => (
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
              {selected.map((value) => (
                <Chip key={value} label={value} />
              ))}
            </Box>
          )}
          MenuProps={MenuProps}
        >
          {genres.map((genre) => (
            <MenuItem
              key={genre.name}
              value={genre.name}
              style={getStyles(genre.name, genreName, theme)}
            >
              {genre.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}

export default AddGenre;