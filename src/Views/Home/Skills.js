import { Typography, Grid, Box, Stack } from "@mui/material";
import "./Home.css";
import { ArrowForwardIos, ArrowBackIos } from "@mui/icons-material";
import { useState } from "react";
import { motion, useAnimation } from "framer-motion";
import SkillCard from "../Components/SkillCard";
import { skills } from "../../data";
import useWindowDimensions from "../../utilities/useWindowDimensions";

const Skills = () => {
  const { width, height } = useWindowDimensions();

  const resolveCardSpacing = () => {
    if (width < 862) {
      return width * 0.037;
    } else if (width < 1339) {
      return width * 0.0295;
    } else {
      return width * 0.0193;
    }
  };

  const [page, setPage] = useState(1);
  const controls = useAnimation();

  //card animation values
  const transition = {
    type: "tween",
    duration: 0.3,
  };

  //sets page of skills
  const nextPage = () => {
    setPage((page) => page + 1);
    controls.start({
      x: "-90vw",
      transition,
    });
  };

  const previousPage = () => {
    setPage((page) => page - 1);
    controls.start({
      x: 0,
      transition,
    });
  };

  return (
    <Box sx={{ height: 250 }}>
      <Typography sx={{ ml: 5 }} variant="h5">
        Most used skills
      </Typography>

      <Box sx={{ pt: 4, ml: 5 }}>
        <Grid
          container
          sx={{
            width: "5%",
            pl: 5,
            height: 135,
            zIndex: 5,
            left: -30,
            position: "absolute",
            opacity: 0,
            transition: "0.3s",
            alignItems: "center",
            display: page > 1 ? "flex" : "none",

            "&:hover": {
              opacity: 100,
            },
          }}
        >
          <Grid item>
            <ArrowBackIos
              onClick={previousPage}
              sx={{ fontSize: 50, color: "white", pl: 1 }}
            />
          </Grid>
        </Grid>
        {/* card layout */}
        <Stack
          component={motion.div}
          animate={controls}
          direction="row"
          spacing={resolveCardSpacing(width)}
          sx={{
            display: "flex",
            transform: page > 1 ? "translate(-15%)" : 0,
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
        </Stack>

        {/* forward arrow */}
        <Grid
          container
          sx={{
            height: 135,
            width: "5%",
            zIndex: 3,
            position: "absolute",
            left: width < 1339 ? "94%" : "97%",
            opacity: 0,
            transition: "0.3s",
            alignItems: "center",
            display: page * 6 < skills.length ? "flex" : "none",

            "&:hover": {
              opacity: 100,
            },
          }}
        >
          <Grid item>
            <ArrowForwardIos
              onClick={nextPage}
              sx={{ fontSize: 50, color: "white" }}
            />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Skills;
