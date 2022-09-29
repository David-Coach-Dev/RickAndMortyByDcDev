import { AppBar, Box, Button, Container, Grid, Stack, styled, Toolbar, Tooltip, TooltipProps, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import { AlertVoice } from '../AlertVoice';
import { StyledComponentsDcDev } from '../StyledComponentsDcDev';
  export const NavBar: React.FC<{}> = () => {
  const navigate = useNavigate();
  const msn = 'Api the Rick and Morty By Dc Dev   ';
  const handleAlert =(event: React.MouseEvent<HTMLElement>) => {
    AlertVoice(msn);
  };
  const handleAlertLogin =(event: React.MouseEvent<HTMLElement>) => {
    AlertVoice('Login de usuario');
  };
  const handleAlertRes =(event: React.MouseEvent<HTMLElement>) => {
    AlertVoice('Registro de usuario');
  };
  const StyledTooltip = styled(({ className, ...props }: TooltipProps) => (
    <Tooltip {...props} classes={{ popper: className }} />
  ))`
  & .MuiTooltip-tooltip {
    background: primary;
  }
  `;
  return (
    <Box sx={{flexGrow: 1}}>
      <AppBar
        position="sticky"
      >
        <Toolbar>
          <Container maxWidth='xl'>
            <Grid
              container
              direction='row'
              justifyContent='space-between'
              alignItems='center'
            >
              <Grid item>
                <img src="../../assets/img/RinkAndMorty.png" alt="logo" />
              </Grid>
              <Grid item>
                <Typography
                  variant="h6"
                  onMouseEnter={handleAlert}>
                  {msn}
                </Typography>
              </Grid>
              <Grid item>
                <Stack
                  direction='row'
                  spacing={2}
                >
                  <StyledComponentsDcDev msg='Login de usuario'>
                    <Button
                      variant='contained'
                      onClick={() => navigate('login')}
                      onMouseEnter={handleAlertLogin}
                    >
                        Login
                    </Button>
                  </StyledComponentsDcDev>
                  <StyledComponentsDcDev msg='registro de usuario'>
                    <Button
                      variant='outlined'
                      onMouseEnter={handleAlertRes}
                    >
                      Register
                    </Button>
                  </StyledComponentsDcDev>
                </Stack>
              </Grid>
            </Grid>
          </Container>
        </Toolbar>
      </AppBar>

    </Box>
  );
}