import { characters } from '@/api';
import { useNotification } from '@/context';
import { TypeCharacter } from '@/interface';
import { Autocomplete, Box, TextField } from '@mui/material';
import { useEffect, useState } from 'react';
export interface AutoCompletedListInterface {
}
const AutoCompletedList: React.FC<AutoCompletedListInterface> = () => {
  const [allCharacters, setAllCharacters] = useState<TypeCharacter[]>();
  useEffect(() => {
    characters
      .getAll({ page: 1 })
      .then((r) => {
        setAllCharacters(r.data.results);
        handleClick();
      })
      .catch((e) => {
        getError("Error : " + e.message);
      });
  }, []);
  const { getSuccess, getError } = useNotification();
  const handleClick = () => {
    //getSuccess("choose a character");
  };
  const defaultProps = {
    options: allCharacters,
    getOptionLabel: (option: TypeCharacter) => option.name,
  };
  return (
      <Autocomplete
        id="disable-close-on-select"
        sx={{ width: 300 }}
        options={allCharacters!}
        autoHighlight
        getOptionLabel={(option) => option.name}
        renderOption={(props, option) => (
          <Box
            component="li"
            sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
            {...props}
          >
            <img
              loading="lazy"
              width="20"
              src={option.image}
              srcSet={option.image}
              alt=""
            />
            {option.name}
          </Box>
        )}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Choose a country"
            variant="standard"
            inputProps={{
              ...params.inputProps,
              autoComplete: "new-password", // disable autocomplete and autofill
            }}
          />
        )}
      />
  );
};

export default AutoCompletedList;


