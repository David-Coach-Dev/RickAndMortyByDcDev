import { characters } from '@/api';
import { useNotification } from '@/context';
import { TypeCharacter } from '@/interface';
import { Autocomplete, Box, TextField } from '@mui/material';
import { useEffect, useState } from 'react';
export interface AutoCompletedListInterface {
}
const AutoCompletedList: React.FC<TypeCharacter> = () => {
  const [allCharacters, setAllCharacters] = useState<TypeCharacter[]>();
  useEffect(() => {
    characters
      .getAll({ page: 1 })
      .then((r) => {
        setAllCharacters(r.data.results);
        console.log("datos -> ", r.data.results);
        getSuccess("Datos cargados");
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
    <>
      <Autocomplete
        {...defaultProps}
        id="disable-close-on-select"
        disableCloseOnSelect
        renderInput={(params) => (
          <TextField
            {...params}
            label="escoja un personaje"
            variant="standard"
          />
        )}
      />
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
    </>
  );
};

export default AutoCompletedList;


