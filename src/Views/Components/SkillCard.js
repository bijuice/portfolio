import { Card, Box, Typography, Grid } from "@mui/material";
import { cardAnimation } from "../../preferences/animationPrefs";
import { motion } from "framer-motion";

const SkillCard = ({ skill, index, width, height }) => {
  //decides card with responsive values
  const resolveCardWidth = () => {
    if (width < 862) {
      return width * 0.29;
    } else if (width < 1339) {
      return width * 0.23;
    } else {
      return width * 0.15;
    }
  };

  //function to ensure card does not animate out of bounds
  const transformDecider = () => {
    if ((index + 1) % 6) {
      return "translate(-5%, -30%)";
    } else if (index === 5) {
      return "translate(-12%, -30%)";
    } else {
      return "translate(-10%, -30%)";
    }
  };

  return (
    <Grid item>
      <Card
        sx={{
          height: 145,
          width: resolveCardWidth(width),
          boxShadow: 20,
          transition: "0.4s",
          zIndex: 1,
          position: "absolute",
          borderRadius: 0,

          "&:hover": {
            height: height * 0.32,
            width: resolveCardWidth() * 1.6,
            position: "absolute",
            zIndex: 4,
            transform: transformDecider(),
          },
          "&:hover #skill-title": {
            display: "block",
          },

          "&:hover #skill-box": {
            height: "80%",
          },
        }}
      >
        <Box
          component={motion.div}
          variants={cardAnimation}
          id="skill-box"
          sx={{
            width: "100%",
            height: "100%",
            transition: "0.3s",
            backgroundImage: `url(${skill.imageURL})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        ></Box>

        <Typography
          id="skill-title"
          variant="h6"
          sx={{ display: "none", p: 1, pl: 2 }}
        >
          {skill.title}
        </Typography>
      </Card>
    </Grid>
  );
};

export default SkillCard;
