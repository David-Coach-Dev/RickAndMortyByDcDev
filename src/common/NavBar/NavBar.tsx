import { AppBar, Box, Button, Container, Grid, Stack, styled, Toolbar, Tooltip, TooltipProps, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import  Logo from '../../assets/img/rickandMorty.png';
import { AlertVoice } from '../AlertVoice';
import { StyledComponentsDcDev } from '../StyledComponentsDcDev';
  export const NavBar: React.FC<{}> = () => {
  const navigate = useNavigate();
  const msn = 'Api the Rick and Morty By Dc Dev   ';
  const AlertHome =(event: React.MouseEvent<HTMLElement>) => {
    AlertVoice(msn);
  };
  const AlertLogin =(event: React.MouseEvent<HTMLElement>) => {
    AlertVoice('Login de usuario');
  };
  const AlertRegister =(event: React.MouseEvent<HTMLElement>) => {
    AlertVoice('Registro de usuario');
  };
  const AlertLogo =(event: React.MouseEvent<HTMLElement>) => {
    AlertVoice('Logo de app');
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
                  <Stack
                    direction='row'
                >
                  <StyledComponentsDcDev msg='Logo de app'>
                    <img
                      src={Logo}
                      alt="logo"
                      width="50"
                      height="50"
                      onMouseEnter={AlertLogo}
                    />
                  </StyledComponentsDcDev>
                  </Stack>
              </Grid>
              <Grid item>
                <Typography
                  variant="h6"
                  onMouseEnter={AlertHome}>
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
                      onMouseEnter={AlertLogin}
                    >
                        Login
                    </Button>
                  </StyledComponentsDcDev>
                  <StyledComponentsDcDev msg='registro de usuario'>
                    <Button
                      variant='outlined'
                      onMouseEnter={AlertRegister}
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