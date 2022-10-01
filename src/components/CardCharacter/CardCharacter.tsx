import { AlertVoice } from "@/common";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import Favorite from "@mui/icons-material/Favorite";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import StarIcon from "@mui/icons-material/Star";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Checkbox,
  Divider, IconButton,
  ImageList,
  ImageListItem,
  ImageListItemBar, ListSubheader,
  Modal,
  Rating,
  Typography
} from "@mui/material";
import { useState } from "react";
export interface CardCharacterInterface {
  created: Date;
  gender: string;
  id: number;
  image: string;
  key: string;
  name: string;
  species: string;
  status: string;
  type:     string;
  url:   string;
}
const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};
const CardCharacter: React.FC<CardCharacterInterface> = ({
	created,
	gender,
  id,
  image,
  name,
  species,
  status,
  type,
  url,
}) => {
  const [open, setOpen] = useState(false);
  const labels: { [index: string]: string } = {
    0.5: "Useless",
    1: "Useless+",
    1.5: "Poor",
    2: "Poor+",
    2.5: "Ok",
    3: "Ok+",
    3.5: "Good",
    4: "Good+",
    4.5: "Excellent",
    5: "Excellent+",
  };
  function getLabelText(value: number) {
    return `${value} Star${value !== 1 ? "s" : ""}, ${labels[value]}`;
  }
  const [value, setValue] = useState<number | null>(2);
  const [bookmark, setBookmark] = useState<boolean>(false);
  const [favorite, setFavorite] = useState<boolean>(false);
  const [hover, setHover] = useState(-1);
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  const handleOpen = () => {
    AlertVoice("El personaje es " + name);
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Card>
        <CardMedia
          component="img"
          loading="lazy"
          height="194"
          image={image}
          alt={name}
        />
        <CardContent>
          <Typography variant="h4" sx={{ mb: 2 }}>
            {name}
          </Typography>
          <Divider color="primary" />
          <Typography sx={{ mt: 3 }}>Especie: {species}</Typography>
          <Typography sx={{ mt: 3 }}>Estado: {status}</Typography>
        </CardContent>
        <CardActions>
          <Button
            fullWidth
            variant="contained"
            size="small"
            onClick={handleOpen}
          >
            Mas detalle
          </Button>
        </CardActions>
      </Card>
      <div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="parent-modal-title"
          aria-describedby="parent-modal-description"
        >
          <Box sx={{ ...style, width: 800 }}>
            <ImageList sx={{ width: 750, height: 600 }}>
              <ImageListItem key="Subheader" cols={2}>
                <ListSubheader component="div">
                  <Typography color ="primary" align="center" variant="h4">{name}</Typography>
                </ListSubheader>
              </ImageListItem>
              <ImageListItem>
                <img
                  src={`${image}?w=248&fit=crop&auto=format`}
                  srcSet={`${image}?w=248&fit=crop&auto=format&dpr=2 2x`}
                  alt={name}
                  loading="lazy"
                />
                <ImageListItemBar
                  title={name}
                  subtitle={url}
                  actionIcon={
                    <>
                      <IconButton
                        sx={{ color: "rgba(0, 255, 55, 0.54)" , mt: 3 }}
                        aria-label={`info about ${name}`}
                      ></IconButton>
                      <div>
                        <Checkbox
                          {...label}
                          icon={<FavoriteBorder />}
                          checkedIcon={<Favorite />}
                          checked={favorite}
                          onChange={(event, newValue) => {
                            setFavorite(!favorite);
                          }}
                        />
                        <Checkbox
                          {...label}
                          icon={<BookmarkBorderIcon />}
                          checkedIcon={<BookmarkIcon />}
                          checked={bookmark}
                          onChange={(event, newValue) => {
                            setBookmark(!bookmark);
                          }}
                        />
                      </div>
                    </>
                  }
                />
              </ImageListItem>
              <ImageListItem key="Subheader" cols={1}>
                <ListSubheader component="div">
                  <Card>
                    <CardHeader
                      title=
                        <Typography color ="primary" variant="h4" sx={{ mt: 3 }}>
                          Informacion
                        </Typography>
                    />
                    <CardContent>
                      <Divider sx={{ mt: 2 }} color="primary" />
                      <Typography sx={{ mt: 3 }}>Id: {id}</Typography>
                      <Typography sx={{ mt: 3 }}>Especie: {species}</Typography>
                      <Typography sx={{ mt: 3 }}>Type: {type}</Typography>
                      <Typography sx={{ mt: 3 }}>Genero: {gender}</Typography>
                      <Typography sx={{ mt: 3 }}>Estado: {status}</Typography>
                      <Typography sx={{ mt: 3 }}>Creado: {created.toString()}</Typography>
                      <Divider sx={{ mt: 3 }} color="primary" />
                      <Box
                        sx={{
                          width: 200,
                          display: "flex",
                          alignItems: "center",
                          mt: 2,
                        }}
                      >
                        <Rating
                          name="hover-feedback"
                          value={value}
                          precision={0.5}
                          getLabelText={getLabelText}
                          onChange={(event, newValue) => {
                            setValue(newValue);
                          }}
                          onChangeActive={(event, newHover) => {
                            setHover(newHover);
                          }}
                          emptyIcon={
                            <StarIcon
                              style={{ opacity: 0.55 }}
                              fontSize="inherit"
                            />
                          }
                        />
                        {value !== null && (
                          <Box sx={{ ml: 4 }}>
                            {labels[hover !== -1 ? hover : value]}
                          </Box>
                        )}
                      </Box>
                    </CardContent>
                  </Card>
                </ListSubheader>
              </ImageListItem>
            </ImageList>
          </Box>
        </Modal>
      </div>
    </>
  );
};

export default CardCharacter;
