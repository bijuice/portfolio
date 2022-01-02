import { Typography, Box, Stack } from "@mui/material";
import "./Home.css";
import DetailsModal from "../Components/DetailsModal";
import { useState } from "react";
import { projects } from "../../data";
import ProjectCard from "../Components/ProjectCard";
import useWindowDimensions from "../../utilities/useWindowDimensions";

const Projects = () => {
  const { width } = useWindowDimensions();

  const resolveCardSpacing = () => {
    if (width < 862) {
      return width * 0.037;
    } else if (width < 1339) {
      return width * 0.0295;
    } else {
      return width * 0.0193;
    }
  };

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
        spacing={resolveCardSpacing()}
        sx={{
          pt: 4,
          maxWidth: "100%",
          display: "flex",
        }}
      >
        {projects.map((project, index) => {
          return (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              handleOpen={handleOpen}
              width={width}
            />
          );
        })}
      </Stack>
    </Box>
  );
};

export default Projects;
