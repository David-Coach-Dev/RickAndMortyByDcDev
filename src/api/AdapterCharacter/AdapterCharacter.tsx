import { useNotification } from '@/context';
import { characters } from '../endPoint';
import { useState } from 'react';
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
