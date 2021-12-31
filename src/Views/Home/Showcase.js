import "./Home.css";
import { useState } from "react";
import { Container, Typography, Tooltip, Grid, Button } from "@mui/material";
import { PlayArrow, InfoOutlined } from "@mui/icons-material";
import culturecapture from "../../assets/images/culture-capture.png";
import flutter from "../../assets/images/flutter.svg";
import firebase from "../../assets/images/firebase.svg";
import figma from "../../assets/images/figma.svg";
import DetailsModal from "../Components/DetailsModal";
import { motion } from "framer-motion";

const ccDetails = {
  id: 1,
  title: "Culture Capture App",
  quantity: 1,
  imageURL: culturecapture,
  genres: "Android/ iOS App",
  year: "2020",
  tools: [
    { title: "Flutter", icon: flutter },
    { title: "Firebase", icon: firebase },
    { title: "Figma", icon: figma },
  ],
  description:
    "Culture Capture is a social digital museum which gamifies anthropology.",
};

const Showcase = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Container
      sx={{
        ml: 0,
        pt: 20,
      }}
    >
      <Container
        sx={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <img src={culturecapture} alt="culture capture logo" />
        <Typography variant="h2" sx={{ pl: 5 }}>
          <div>Culture</div>
          <div>Capture</div>
        </Typography>
      </Container>
      <Container sx={{ mt: 3, ml: 3 }}>
        <Typography variant="h6">
          Funthropology: It's fun anthropology!
        </Typography>

        <Grid container spacing={3} sx={{ pt: 2 }}>
          <Grid
            item
            component={motion.div}
            whileHover={{
              scale: 1.3,
            }}
          >
            <Tooltip title="Flutter" arrow sx={{ backgroundColor: "red" }}>
              <img
                src={flutter}
                width="30px"
                height="30px"
                alt="flutter icon"
              />
            </Tooltip>
          </Grid>
          <Grid
            item
            component={motion.div}
            whileHover={{
              scale: 1.3,
            }}
          >
            <Tooltip title="Firebase" arrow>
              <img
                src={firebase}
                width="30px"
                height="30px"
                alt="firbase icon"
              />
            </Tooltip>
          </Grid>
          <Grid
            item
            component={motion.div}
            whileHover={{
              scale: 1.3,
            }}
          >
            <Tooltip title="Figma" arrow>
              <img src={figma} width="30px" height="30px" alt="firbase icon" />
            </Tooltip>
          </Grid>
        </Grid>

        <Grid container spacing={3} sx={{ pt: 2 }}>
          <Grid item>
            <Button variant="contained" size="large" startIcon={<PlayArrow />}>
              Play
            </Button>
          </Grid>
          <Grid item>
            <Button
              variant="contained"
              size="large"
              startIcon={<InfoOutlined />}
              onClick={handleOpen}
            >
              More Info
            </Button>
            <DetailsModal
              open={open}
              handleClose={handleClose}
              details={ccDetails}
            />
          </Grid>
        </Grid>
      </Container>
    </Container>
  );
};

export default Showcase;
