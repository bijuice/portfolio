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
import { experience } from "../../data";
import DetailsModal from "../Components/DetailsModal";
import { useState } from "react";
import { motion } from "framer-motion";
import { carouselTheme } from "../../preferences/themePrefs";

const Experience = () => {
  const [modalState, setModalState] = useState({
    isOpen: false,
    details: experience[0],
  });

  const handleOpen = (experience) =>
    setModalState({ isOpen: true, details: experience });
  const handleClose = () => setModalState({ isOpen: false });

  return (
    <Box sx={{ ml: 5, height: 250 }}>
      <DetailsModal
        open={modalState.isOpen}
        handleClose={handleClose}
        details={modalState.details}
      />

      <Typography variant="h5">Experience</Typography>

      <Stack
        direction="row"
        spacing={"16%"}
        sx={{
          pt: 4,
          maxWidth: "100%",
          display: "flex",
        }}
      >
        {experience.map((experience, index) => (
          <Grid item key={experience.id}>
            <Card
              onClick={(event) => {
                handleOpen(experience);
              }}
              sx={carouselTheme}
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
                  src={experience.imageURL}
                  alt="experience"
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
                      {experience.title}
                    </Typography>
                    <Typography
                      variant="subtitle2"
                      sx={{ fontWeight: "bold" }}
                      color="#5A5A5A"
                    >
                      {experience.role} • {experience.year} •{" "}
                      {experience.duration}
                    </Typography>
                  </Grid>

                  {/* BOX BUTTONS */}
                  <Grid item>
                    <Box sx={{ display: "flex" }}>
                      <Tooltip title="More info">
                        <IconButton
                          onClick={() => {
                            handleOpen(experience);
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
                  {experience.tools?.map((tool) => {
                    return (
                      <Grid
                        item
                        key={tool.title}
                        component={motion.div}
                        whileHover={{
                          scale: 1.3,
                        }}
                      >
                        <Tooltip title={tool.title} arrow>
                          <img
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
        ))}
      </Stack>
    </Box>
  );
};

export default Experience;
