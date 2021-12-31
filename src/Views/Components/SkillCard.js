import { Card, Box, Typography, Grid } from "@mui/material";

const SkillCard = ({ skill, index }) => {
  //function to ensure card does not animate out of bounds
  const transformDecider = () => {
    if (index + (1 % 6)) {
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
          height: 135,
          width: "15%",
          minWidth: "13%",
          maxWidth: 330,
          boxShadow: 20,
          transition: "0.4s",
          zIndex: 1,
          position: "absolute",
          borderRadius: 0,

          "&:hover": {
            height: 250,
            width: "23%",
            maxWidth: 400,
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
