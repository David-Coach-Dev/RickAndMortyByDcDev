import { Button, Card, CardActions, CardContent, CardMedia, Typography, Divider } from '@mui/material';
import React from 'react';
export interface CardCharacterInterface {
  key: string;
  name: string;
  image: string;
  status: string;
  species: string;
}

const CardCharacter: React.FC<CardCharacterInterface> = ({
name,
image,
status,
species,
}) => {
	return(
		<Card>
			<CardMedia
				component="img"
				height="194"
				image={image}
				alt={name}
			/>
			<CardContent>
				<Typography
					variant="h4"
					sx={{mb:2}}
				>
					{name}
				</Typography>
				<Divider
					color="primary"
				/>
				<Typography
					sx={{mt:3}}>
					Especie: {species}
				</Typography>
				<Typography
					sx={{ mt: 3 }}>
					Estado: {status}
				</Typography>

			</CardContent>
			<CardActions>
				<Button
					fullWidth
					variant="contained"
					size="small"
				>
					Learn More
				</Button>
			</CardActions>
		</Card>
	)
};

export default CardCharacter;
