import { useNotification } from '@/context';
import React from 'react';
import { characters } from '../endPoint';
import useState from 'react';
export interface AdapterCharacterInterface { }

const AdapterCharacter: React.FC<AdapterCharacterInterface> = () => {
	const [data, setData] = useState([])
	const {
		getSuccess,
		getError,
	} = useNotification();
	const AlertData = () => {
		getSuccess("Data recibida.");
	};
	characters.getById({ id: 1 }).then((r) => {
		console.log(r.data);
		AlertData();
	}).catch((e) => {
		getError('Error : ' + e.message);
	});

	return <div>AdapterCharacter</div>;
};

export default AdapterCharacter;

//Data de respuesta -> 20 datos por pag -> 1 de 42.
const datos = [
	{
		created: "2017-11-04T22:39:48.055Z",
		episode: {
			0: 'https://rickandmortyapi.com/api/episode/10',
			1: 'https://rickandmortyapi.com/api/episode/22'
		},
		gender: "Male",
		id: 21,
		image: "https://rickandmortyapi.com/api/character/avatar/21.jpeg",
		location:
		{
			name: 'Citadel of Ricks',
			url: 'https://rickandmortyapi.com/api/location/3'
		},
		name: "Aqua Morty",
		origin:
		{
			name: 'unknown',
			url: ''
		},
		species: "Humanoid",
		status: "unknown",
		type: "Fish-Person",
		url: "https://rickandmortyapi.com/api/character/21"
	}
]
