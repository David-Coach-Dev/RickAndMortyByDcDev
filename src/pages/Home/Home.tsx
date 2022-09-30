import { characters } from "@/api";
import { AlertVoice, AutoCompletedList } from "@/common";
import { CardCharacter, HeaderComponent } from "@/components";
import { useNotification } from "@/context";
import { TypeCharacter } from "@/interface";
import { Box, Button, Container, Grid } from "@mui/material";
import { useEffect, useState } from "react";
export interface HomeInterface {}
const Home: React.FC<{}> = () => {
  const [allCharacters, setAllCharacters] = useState<TypeCharacter[] | null>(null);
  useEffect(() => {
    characters
      .getAll({ page: 1 })
      .then((r) => {
        setAllCharacters(r.data.results);
        getSuccess("Datos cargados");
        handleClick();
      })
      .catch((e) => {
        getError("Error : " + e.message);
      });
  }, []);
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
        onClick={handleClick}
        variant="contained"
        color="primary"
        onMouseEnter={AlertLogin}
      >
        Login
      </Button>
      <div>
        {
          allCharacters?.length !== 0 ? (
            <Box>
              {
                allCharacters?.map((character) => (
                  <Grid
                    container
                    spacing={2}
                    direction="row"
                  >
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
                )
              )}
            </Box>
          ) : (
            ""
          )
        }
      </div>
    </Container>
  );
};
export default Home;
