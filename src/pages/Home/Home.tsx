import { characters } from '@/api/endPoint/characters';
import { AlertVoice } from '@/common';
import { HeaderComponent } from '@/components';
import { useNotification } from '@/context';
import { Button, Container } from '@mui/material';
import { useEffect } from 'react';
export interface HomeInterface {}
const Home: React.FC<HomeInterface> = () => {
	useEffect(() => {
		characters.getById({ id: 1 }).then((r) => {
			console.log(r.data);
			getSuccess('Bienvenidos a Api de Rick And Morty por Dc Dev');
		}).catch((e) => {
			getError('Error : ' + e.message);
		});
	}, []);
	const handleAlertLogin =(event: React.MouseEvent<HTMLElement>) => {
    AlertVoice('Login');
  };
	const {
		getSuccess,
		getError,
	} = useNotification();
	const handleClick = () => {
		getSuccess("👋 Bienvenidos a Api de Rick And Morty por Dc Dev");
	};
	return(
		<Container
			maxWidth='xl'
		>
			<HeaderComponent
				title={"👋 Dev's"}
				description={'Api de Rick And Morty por Dc Dev'}
				element={
					<Button
						fullWidth
						onClick={handleClick}
						variant="contained"
						color="primary"
						onMouseEnter={handleAlertLogin}
					>
						Login
					</Button>
				}/>
		</Container>
	);
};
export default Home;