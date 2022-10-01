import { characters } from "@/api";
import { AlertVoice } from "@/common";
import { CardCharacter, HeaderComponent } from "@/components";
import { useNotification } from "@/context";
import { TypeCharacter } from "@/interface";
import { Box, Button, Container, Grid, Pagination, Typography } from "@mui/material";
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
        AlertVoice("pagina numero " + pag);
      })
      .catch((e) => {
        getError("Error : " + e.message);
      });
  }, [pag]);
  const AlertPage = (event: React.MouseEvent<HTMLElement>) => {
    AlertVoice("pagina numero " + pag);
  };
  const { getSuccess, getError } = useNotification();
  return (
    <Container maxWidth="xl">
      <HeaderComponent
        title={"👋 Dev's"}
        description={"Api de Rick And Morty por Dc Dev"}
        alert="hola devs"
        element={
          <>
          </>
        }
      />
      <Button
        fullWidth
        sx={{ mt: 3, mb: 3 }}
        onClick={AlertPage}
        variant="contained"
        color="primary"
      >
        <Typography variant="h4">Page: {pag}</Typography>
      </Button>
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
                    created={character.created}
                    gender={character.gender}
                    id={character.id}
                    image={character.image}
                    key={character.toString()}
                    name={character.name}
                    species={character.species}
                    status={character.status}
                    type={character.type}
                    url={character.url}
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
