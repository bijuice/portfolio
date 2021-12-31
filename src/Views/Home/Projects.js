import {
  Typography,
  Card,
  Grid,
  Box,
  IconButton,
  Tooltip,
  Stack,
} from "@mui/material";
import { InfoOutlined } from "@mui/icons-material";
import "./Home.css";
import DetailsModal from "../Components/DetailsModal";
import { useState } from "react";
import { motion } from "framer-motion";
import { projects } from "../../data";
import { carouselTheme } from "../../preferences/themePrefs";

const Projects = () => {
  const [modalState, setModalState] = useState({
    isOpen: false,
    details: projects[0],
  });

  const handleOpen = (project) => {
    setModalState({ isOpen: true, details: project });
  };

  const handleClose = () => setModalState({ isOpen: false });

  return (
    <Box sx={{ ml: 5, height: 250 }}>
      <DetailsModal
        open={modalState.isOpen}
        handleClose={handleClose}
        details={modalState.details}
      />

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
        {projects.map((project, index) => {
          return (
            <Grid item key={project.id}>
              <Card
                onClick={() => {
                  handleOpen(project);
                }}
                sx={carouselTheme(index)}
              >
                <Box
                  id="project-box"
                  sx={{
                    width: "100%",
                    height: "100%",
                    transition: "0.3s",
                  }}
                >
                  <img
                    src={project.imageURL}
                    alt="project"
                    height="100%"
                    width="100%"
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
                        {project.title}
                      </Typography>
                      <Typography
                        variant="subtitle2"
                        sx={{ fontWeight: "bold" }}
                        color="#5A5A5A"
                      >
                        {project.genres} • {project.year}
                      </Typography>
                    </Grid>

                    {/* BOX BUTTONS */}
                    <Grid item>
                      <Box sx={{ display: "flex" }}>
                        <Tooltip title="More info">
                          <IconButton
                            onClick={() => {
                              handleOpen(project);
                            }}
                          >
                            <InfoOutlined />
                          </IconButton>
                        </Tooltip>
                      </Box>
                    </Grid>
                  </Grid>

                  {/* TECHNOLOGY ICONS */}
                  <Grid container spacing={2} sx={{ pt: 1 }}>
                    {project.tools?.map((tool) => {
                      return (
                        <Grid item key={tool.title}>
                          <Tooltip title={tool.title} arrow>
                            <motion.img
                              whileHover={{
                                scale: 1.3,
                              }}
                              src={tool.icon}
                              width="20px"
                              height="20px"
                              alt="flutter icon"
                            />
                          </Tooltip>
                        </Grid>
                      );
                    })}
                  </Grid>
                </Box>
              </Card>
            </Grid>
          );
        })}
      </Stack>
    </Box>
  );
};

export default Projects;
