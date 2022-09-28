import { AppBar, Grid, Box, Container, Toolbar, Typography, Button, Stack } from '@mui/material';
import { useNavigate } from 'react-router-dom';
export const NavBar: React.FC<{}> = () => {
  const navigate = useNavigate();
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
               <img src="../../assets/img/favicon-ram-32x32.png" alt="Vite" width="50" height="50"/>
              </Grid>
              <Grid item>
                <Typography variant="h6" >
                  Rick and Morty By Dc Dev.
                </Typography>
              </Grid>
              <Grid item>
                <Stack
                  direction='row'
                  spacing={2}
                >
                  <Button
                    onClick={()=>navigate('login')}
                    variant='contained'
                  >
                    Login
                  </Button>
                  <Button
                    variant='outlined'
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