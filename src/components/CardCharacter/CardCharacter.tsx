import { AlertVoice } from '@/common';
import BookmarkIcon from "@mui/icons-material/Bookmark";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import Favorite from "@mui/icons-material/Favorite";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import InfoIcon from "@mui/icons-material/Info";
import { Box, Button, Card, CardActions, CardContent, CardMedia, Checkbox, Divider, IconButton, ImageList, ImageListItem, ImageListItemBar, ListSubheader, Modal, Typography } from '@mui/material';
import React from 'react';
export interface CardCharacterInterface {
  key: string;
  name: string;
  image: string;
  status: string;
  species: string;
  gender: string;
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
  name,
  image,
  status,
  species,
  gender,
}) => {
  const [open, setOpen] = React.useState(false);
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
            <ImageList sx={{ width: 700, height: 500 }}>
              <ImageListItem key="Subheader" cols={2}>
                <ListSubheader component="div">
                  <Typography variant="h4">{name}</Typography>
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
                  subtitle={status}
                  actionIcon={
                    <>
                      <IconButton
                        sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                        aria-label={`info about ${name}`}
                      ></IconButton>
                      <div>
                        <Checkbox
                          {...label}
                          icon={<FavoriteBorder />}
                          checkedIcon={<Favorite />}
                        />
                        <Checkbox
                          {...label}
                          icon={<BookmarkBorderIcon />}
                          checkedIcon={<BookmarkIcon />}
                        />
                      </div>
                    </>
                  }
                />
              </ImageListItem>
              <ImageListItem key="Subheader" cols={1}>
                <Card>
                  <InfoIcon />
                  <CardContent>
                    <Typography variant="h4" sx={{ mb: 2 }}>
                      {gender}
                    </Typography>
                    <Divider color="primary" />
                    <Typography sx={{ mt: 3 }}>Especie: {species}</Typography>
                    <Typography sx={{ mt: 3 }}>Estado: {status}</Typography>
                  </CardContent>
                </Card>
              </ImageListItem>
            </ImageList>
          </Box>
        </Modal>
      </div>
    </>
  );
};

export default CardCharacter;
