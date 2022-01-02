import { motion } from "framer-motion";
import { Box, Grid, Typography } from "@mui/material";
import { routeAnimation } from "../preferences/animationPrefs";
import { pageTheme } from "../preferences/themePrefs";
import { experience } from "../data";
import { useState, useEffect } from "react";
import DetailsModal from "./Components/DetailsModal";
import ExperienceCard from "./Components/ExperienceCard";
import useWindowDimensions from "../utilities/useWindowDimensions";

const ExperiencePage = () => {
  const { width } = useWindowDimensions();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [modalState, setModalState] = useState({
    isOpen: false,
    details: experience[0],
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
      <Typography variant="h5">Experiences</Typography>

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
        {experience.map((experience, index) => (
          <ExperienceCard
            key={experience.id}
            experience={experience}
            index={index}
            handleOpen={handleOpen}
          />
        ))}
      </Grid>
    </Box>
  );
};

export default ExperiencePage;
