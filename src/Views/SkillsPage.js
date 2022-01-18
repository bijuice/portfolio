import { motion } from "framer-motion";
import { Box, Grid, Typography } from "@mui/material";
import SkillCard from "./Components/SkillCard";
import { routeAnimation } from "../preferences/animationPrefs";
import { skills } from "../data";
import { pageTheme } from "../preferences/themePrefs";
import { useEffect } from "react";
import useWindowDimensions from "../utilities/useWindowDimensions";

const SkillsPage = () => {
  const { width, height } = useWindowDimensions();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Box
      sx={pageTheme}
      component={motion.div}
      variants={routeAnimation}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <Typography variant="h5">Most used skills</Typography>
      <Grid
        container
        columnSpacing={width * 0.0193}
        rowSpacing={19}
        sx={{
          maxWidth: "100%",
          display: "flex",
          pt: 5,
        }}
      >
        {skills.map((skill, index) => {
          return (
            <SkillCard
              skill={skill}
              index={index}
              key={skill.id}
              width={width}
              height={height}
            />
          );
        })}
      </Grid>
    </Box>
  );
};

export default SkillsPage;
