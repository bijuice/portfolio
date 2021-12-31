import { motion } from "framer-motion";
import { Box, Grid, Typography } from "@mui/material";

import SkillCard from "./Components/SkillCard";
import { routeAnimation } from "../preferences/animationPrefs";
import { skills } from "../data";

const themePrefs = {
  backgroundColor: "black",
  height: "100vh",
  m: 4,
  mt: 18,
};

const SkillsPage = () => {
  return (
    <Box
      sx={themePrefs}
      component={motion.div}
      variants={routeAnimation}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <Typography variant="h5">Most used skills</Typography>
      <Grid
        container
        columnSpacing={"15.8%"}
        rowSpacing={19}
        sx={{
          maxWidth: "100%",
          display: "flex",
          pt: 5,
        }}
      >
        {skills.map((skill, index) => {
          return <SkillCard skill={skill} index={index} key={skill.id} />;
        })}
      </Grid>
    </Box>
  );
};

export default SkillsPage;
