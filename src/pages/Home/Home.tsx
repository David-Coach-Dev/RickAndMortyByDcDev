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
      <Stack spacing={2}>
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
      </Stack>
      <Stack spacing={2}>
        <Button
          fullWidth
          onClick={handleClick}
          variant="contained"
          color="primary"
          onMouseEnter={AlertLogin}
        >
          Login
        </Button>
      </Stack>
      <Stack spacing={2}>
        <Typography>Page: {pag}</Typography>
      </Stack>
      <div>
        <Stack spacing={2}>
          {allCharacters?.length !== 0 ? (
            <Box>
              {allCharacters?.map((character) => (
                <Grid container direction="row" spacing={2}>
                  <Grid item xs={3}>
                    <CardCharacter
                      key={character.toString()}
                      image={character.image}
                      name={character.name}
                      species={character.species}
                      status={character.status}
                      />
                  </Grid>
                </Grid>
              ))}
            </Box>
          ) : (
            ""
            )}
        </Stack>
      </div>
      <Stack spacing={2}>
        <Pagination count={maxPag} page={pag} onChange={handleChange} />
      </Stack>
    </Container>
  );
};
export default Home;
