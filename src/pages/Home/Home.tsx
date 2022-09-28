import { characters } from '@/api/endPoint/characters';
import { HeaderComponent } from '@/components';
import { useNotification } from '@/context';
import { Button, Container } from '@mui/material';
import { useEffect } from 'react';
export interface HomeInterface {}
const Home: React.FC<HomeInterface> = () => {
	useEffect(() => {
		characters.getById({ id: 1 }).then((r) => {
			console.log(r.data);
			getSuccess('Bienvenidos a Dc Dev');
		}).catch((e) => {
			getError('Error : ' + e.message);
		});
	},[]);
	const {
		getSuccess,
		getError,
	} = useNotification();
	const handleClick = () => {
		getSuccess("👋 Bienvenidos a Dc Dev.");
	};
	return(
		<Container
			maxWidth='xl'
		>
			<HeaderComponent
				title={'👋 Dev'}
				description={'Bienvenidos a Dc Dev'}
				element={
					<Button
						fullWidth
						onClick={handleClick}
						variant="contained"
						color="primary"
					>
						Login
					</Button>
				}/>
		</Container>
	);
};
export default Home;