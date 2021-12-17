import {
  Typography,
  Card,
  Grid,
  Box,
  IconButton,
  Tooltip,
  Stack,
} from "@mui/material";
import { Link, InfoOutlined } from "@mui/icons-material";
import "./Home.css";
import flutter from "../../assets/images/flutter.svg";
import firebase from "../../assets/images/firebase.svg";
import figma from "../../assets/images/figma.svg";
import DetailsModal from "../Components/DetailsModal";
import { useState } from "react";

const Projects = () => {
  const skills = [
    {
      id: 1,
      title: "Culture Capture",
      quantity: 1,
      imageURL: "../../assets/images/react.png",
      genres: "Android/ iOS App",
      year: "2020",
    },
    {
      id: 2,
      title: "Bijuiceflix",
      quantity: 1,
      imageURL: "../../assets/imagereact.png",
      genres: "Web App",
      year: "2021",
    },
    {
      id: 3,
      title: "Hisa Web App",
      quantity: 1,
      imageURL: "../../assets/images/react.png",
      genres: "Web App",
      year: "2021",
    },
    {
      id: 4,
      title: "GoKenya",
      quantity: 1,
      imageURL: "../../assets/images/react.png",
      genres: "Android/ iOS App",
      year: "2021",
    },
  ];

  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box sx={{ ml: 5, height: 275 }}>
      <DetailsModal open={open} handleClose={handleClose} />

      <Typography variant="h5">Featured Projects</Typography>

      <Stack
        direction="row"
        spacing={"16%"}
        sx={{
          pt: 4,
          maxWidth: "100%",
          display: "flex",
        }}
      >
        {skills.map((skill, index) => (
          <Grid item key={skill.id}>
            <Card
              onClick={handleOpen}
              sx={{
                height: 135,
                width: "15%",
                minWidth: "13%",
                borderRadius: 1,
                boxShadow: 20,
                transition: "0.4s",
                zIndex: 0,
                mr: 2,
                minWidth: 100,
                position: "absolute",

                "&:hover": {
                  height: 300,
                  width: "23%",
                  zIndex: 1,
                  position: "absolute",
                  transform:
                    index === 0
                      ? "translate(-8%, -30%)"
                      : "translate(-10%, -30%)",
                },
                "&:hover #project-title": {
                  display: "block",
                },

                "&:hover #project-box": {
                  height: "60%",
                },
              }}
            >
              <Box
                id="project-box"
                sx={{ width: "100%", height: "100%", transition: "0.3s" }}
              >
                <img
                  src="https://www.seekpng.com/png/detail/80-803597_io-is-compatible-with-all-javascript-frameworks-and.png"
                  alt="skill"
                  style={{ maxWidth: "100%", minHeight: "100%" }}
                />
              </Box>

              <Box id="project-title" sx={{ m: 2, mr: 1 }}>
                <Grid
                  container
                  justifyContent="space-between"
                  alignItems="center"
                >
                  {/* TITLE AND GENRES */}

                  <Grid item>
                    <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                      {skill.title}
                    </Typography>
                    <Typography
                      variant="subtitle2"
                      sx={{ fontWeight: "bold" }}
                      color="#5A5A5A"
                    >
                      {skill.genres} • {skill.year}
                    </Typography>
                  </Grid>

                  {/* BOX BUTTONS */}
                  <Grid item>
                    <Box sx={{ display: "flex" }}>
                      <Tooltip title="Visit">
                        <IconButton sx={{ zIndex: 1 }}>
                          <Link />
                        </IconButton>
                      </Tooltip>
                      <Tooltip title="More info">
                        <IconButton onClick={handleOpen}>
                          <InfoOutlined />
                        </IconButton>
                      </Tooltip>
                    </Box>
                  </Grid>
                </Grid>

                {/* TECHNOLOGY ICONS */}
                <Grid container spacing={2} sx={{ pt: 1 }}>
                  <Grid item>
                    <Tooltip title="Flutter" arrow>
                      <img
                        src={flutter}
                        width="20px"
                        height="20px"
                        alt="flutter icon"
                      />
                    </Tooltip>
                  </Grid>
                  <Grid item>
                    <Tooltip title="Firebase" arrow>
                      <img
                        src={firebase}
                        width="20px"
                        height="20px"
                        alt="firbase icon"
                      />
                    </Tooltip>
                  </Grid>
                  <Grid item>
                    <Tooltip title="Figma" arrow>
                      <img
                        src={figma}
                        width="20px"
                        height="20px"
                        alt="firbase icon"
                      />
                    </Tooltip>
                  </Grid>
                </Grid>
              </Box>
            </Card>
          </Grid>
        ))}
      </Stack>
    </Box>
  );
};

export default Projects;
