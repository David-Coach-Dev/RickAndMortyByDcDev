import { characters } from '@/api';
import { useNotification } from '@/context';
import { Autocomplete, Stack, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react';
export interface AutoCompletedListInterface {
	name?: string;
	species?: String;
}
let aux = [];
const AutoCompletedList: React.FC<AutoCompletedListInterface> = () => {
	const [data, setData] = useState([])
	const {
		getSuccess,
		getError,
	} = useNotification();
	const handleClick = () => {
		//getSuccess("choose a character");
	};
	useEffect(() => {
		for (let i = 1; i < 11; i++) {
			characters.getById({ id: i }).then((r) => {
				console.log('name : ', r.data.name);
				setData({ ...data  ,[r.data.name]: string(r.data.name)});
				console.log('data : ', data);
				//handleClick();
			}).catch((e) => {
				getError('Error : ' + e.message);
			});
		}
	}, []);
	const defaultProps = {
    options: data,
    getOptionLabel: (option: AutoCompletedListInterface) => option.name,
	};
  // const flatProps = {
	// 	options: data.map((option) => option.name),
  // };
	const [value, setValue] = React.useState<AutoCompletedListInterface | null>(null);
	return (
	<Stack spacing={1} sx={{ width: 300 }}>
		<Autocomplete
			{...defaultProps}
			id="select"
			disableCloseOnSelect
			renderInput={(params) => (
				<TextField {...params} label="Select one character" variant="standard" />
			)}
			/>
	</Stack>
  );
};

export default AutoCompletedList;


