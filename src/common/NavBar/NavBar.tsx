import { AppBar, Box, Button, Container, Grid, Stack, styled, Toolbar, Tooltip, TooltipProps, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { AlertVoice } from '../AlertVoice';
  export const NavBar: React.FC<{}> = () => {
  const navigate = useNavigate();
  const logo = "https://i.imgur.com/QpYX7Oz.png";
  const title = 'Api the Rick and Morty By Dc Dev   ';
  const handleAlert =(event: React.MouseEvent<HTMLElement>) => {
    AlertVoice(title);
  };
  const handleAlertLogin =(event: React.MouseEvent<HTMLElement>) => {
    AlertVoice('Login');
    };
    const handleAlertR =(event: React.MouseEvent<HTMLElement>) => {
    AlertVoice('Registro');
  };
  const StyledTooltip = styled(({ className, ...props }: TooltipProps) => (
    <Tooltip {...props} classes={{ popper: className }} />
  ))`
  & .MuiTooltip-tooltip {
    background: navy;
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
                {logo}
              </Grid>
              <Grid item>
                <Typography
                  variant="h6"
                  onMouseEnter={handleAlert}>
                  {title}
                </Typography>
              </Grid>
              <Grid item>
                <Stack
                  direction='row'
                  spacing={2}
                >
                  <StyledTooltip title="I am navy">
                    <Button
                      variant='contained'
                      onClick={() => navigate('login')}
                      onMouseEnter={handleAlertLogin}
                    >
                        Login
                    </Button>
                  </StyledTooltip>
                  <Button
                    variant='outlined'
                    onMouseEnter={handleAlertR}
                  >
                    Register
                  </Button>
                </Stack>
              </Grid>
            </Grid>
          </Container>
        </Toolbar>
      </AppBar>

    </Box>
  );
};