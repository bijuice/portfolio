import { Typography, Box, Stack } from "@mui/material";
import "./Home.css";
import { experience } from "../../data";
import DetailsModal from "../Components/DetailsModal";
import { useState } from "react";
import ExperienceCard from "../Components/ExperienceCard";
import useWindowDimensions from "../../utilities/useWindowDimensions";

const Experience = () => {
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
    details: experience[0],
  });

  const handleOpen = (experience) =>
    setModalState({ isOpen: true, details: experience });
  const handleClose = () => setModalState({ isOpen: false });

  return (
    <Box sx={{ ml: 5, height: 250, pb: 15 }}>
      <DetailsModal
        open={modalState.isOpen}
        handleClose={handleClose}
        details={modalState.details}
      />

      <Typography variant="h5">Experience</Typography>

      <Stack
        direction="row"
        spacing={resolveCardSpacing()}
        sx={{
          pt: 4,
          maxWidth: "100%",
          display: "flex",
        }}
      >
        {experience.map((experience, index) => (
          <ExperienceCard
            key={experience.id}
            experience={experience}
            index={index}
            handleOpen={handleOpen}
            width={width}
          />
        ))}
      </Stack>
    </Box>
  );
};

export default Experience;
