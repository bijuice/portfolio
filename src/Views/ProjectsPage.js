import { motion } from "framer-motion";
import { Box, Grid, Typography } from "@mui/material";
import { routeAnimation } from "../preferences/animationPrefs";
import { pageTheme } from "../preferences/themePrefs";
import { projects } from "../data";
import { useState, useEffect } from "react";
import DetailsModal from "./Components/DetailsModal";
import ProjectCard from "./Components/ProjectCard";
import useWindowDimensions from "../utilities/useWindowDimensions";

const ProjectsPage = () => {
  const { width } = useWindowDimensions();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [modalState, setModalState] = useState({
    isOpen: false,
    details: projects[0],
  });

  const handleOpen = (experience) =>
    setModalState({ isOpen: true, details: experience });
  const handleClose = () => setModalState({ isOpen: false });

  return (
    <Box
      sx={pageTheme}
      component={motion.div}
      variants={routeAnimation}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <DetailsModal
        open={modalState.isOpen}
        handleClose={handleClose}
        details={modalState.details}
      />
      <Typography variant="h5">Featured Projects</Typography>

      <Grid
        container
        rowSpacing={19}
        columnSpacing={width * 0.0193}
        sx={{
          maxWidth: "100%",
          display: "flex",
          pt: 5,
        }}
      >
        {projects.map((project, index) => (
          <ProjectCard
            project={project}
            index={index}
            handleOpen={handleOpen}
            key={project.id}
          />
        ))}
      </Grid>
    </Box>
  );
};

export default ProjectsPage;
