import { characters } from "@/api";
import { AlertVoice, AutoCompletedList } from "@/common";
import { CardCharacter, HeaderComponent } from "@/components";
import { useNotification } from "@/context";
import { TypeCharacter } from "@/interface";
import { Box, Button, Container, Grid, Pagination, Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";
export interface HomeInterface {}
const Home: React.FC<{}> = () => {
  const [pag, setPag] = useState(1);
  const [maxPag, setMaxPag] = useState(1);
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPag(value);
  };
  const [allCharacters, setAllCharacters] = useState<TypeCharacter[] | null>(null);
  useEffect(() => {
    characters
      .getAll({ page: pag })
      .then((r) => {
        setMaxPag(r.data.info.pages);
        setAllCharacters(r.data.results);
        getSuccess("Datos cargados");
        handleClick();
      })
      .catch((e) => {
        getError("Error : " + e.message);
      });
  }, [pag]);
  const AlertLogin = (event: React.MouseEvent<HTMLElement>) => {
    AlertVoice("Login");
  };
  const { getSuccess, getError } = useNotification();
  const handleClick = () => {
    getSuccess("👋 Bienvenidos a Api de Rick And Morty por Dc Dev");
  };
  return (
    <Container maxWidth="xl">
      <HeaderComponent
        title={"👋 Dev's"}
        description={"Api de Rick And Morty por Dc Dev"}
        alert="hola devs"
        element={
          <>
            <AutoCompletedList />
          </>
        }
      />
      <Button
        fullWidth
        sx={{ mt: 3, mb: 3 }}
        onClick={handleClick}
        variant="contained"
        color="primary"
        onMouseEnter={AlertLogin}
      >
        Login
      </Button>
      <Typography sx={{ mt: 3, mb: 3 }}>Page: {pag}</Typography>
      <div>
        {allCharacters?.length !== 0 ? (
          <Box>
            <Grid
              container
              direction="row"
              justifyContent="center"
              alignItems="center"
              spacing={2}
            >
              {allCharacters?.map((character) => (
                <Grid item xs={3}>
                  <CardCharacter
                    key={character.toString()}
                    image={character.image}
                    name={character.name}
                    species={character.species}
                    status={character.status}
                  />
                </Grid>
              ))}
            </Grid>
          </Box>
        ) : (
          ""
        )}
      </div>
      <Box>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item xs={3}>
            <Pagination
              sx={{ mt: 3, mb: 3 }}
              count={maxPag}
              page={pag}
              onChange={handleChange}
            />
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};
export default Home;
