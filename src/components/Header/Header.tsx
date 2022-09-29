import { AlertVoice } from '@/common';
import { Box, Divider, Grid, Typography, Alert } from '@mui/material';
type HeaderProps = {
	title: string;
	description: string;
	alert: string;
	element?: React.ReactNode | null;
};
const handleAlertDev =(event: React.MouseEvent<HTMLElement>) => {
	AlertVoice(alert);
	};
export const HeaderComponent: React.FC<HeaderProps> = (
	{
		title,
		description,
		element,
		alert
	}
) => {
	const handleAlertDev =(event: React.MouseEvent<HTMLElement>) => {
	AlertVoice(alert);
	};

	return (
		<>
			<Box
				sx={{
					width: '100%',
					height: '350px'
				}}
			>
				<Grid
					container
					direction='row'
					justifyContent='center'
					alignItems='center'
					sx={{height:'100%'}}
					>
					<Grid item xs={5}>
						<Grid
							container
							direction='column'
							justifyContent='center'
							alignItems='center'
							sx={{height:'100%'}}
							>
							<Grid item>
								<Typography
									variant='h1'
									onMouseEnter={handleAlertDev}
								>
									{title}
								</Typography>
							</Grid>
							<Grid
								sx={{mt:2}}
							>
								<Typography>
									{description}
								</Typography>
							</Grid>
							{
								element !== undefined &&
								<Grid
									sx={{ mt: 4, width: '100%' }}
									item
								>
									{element}
								</Grid>
							}
						</Grid>
					</Grid>
				</Grid>
			</Box>
			<Divider/>
		</>
	);
};

