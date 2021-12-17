import { Typography, Card, Grid, Box, Stack } from "@mui/material";
import "./Home.css";

const Skills = () => {
  const skills = [
    {
      id: 1,
      title: "React",
      quantity: 1,
      imageURL: "../../assets/images/react.png",
    },
    {
      id: 2,
      title: "Vue",
      quantity: 1,
      imageURL: "../../assets/imagereact.png",
    },
    {
      id: 3,
      title: "Flutter",
      quantity: 1,
      imageURL: "../../assets/images/react.png",
    },
    {
      id: 4,
      title: "Pentesting",
      quantity: 1,
      imageURL: "../../assets/images/react.png",
    },
    {
      id: 5,
      title: "Linux",
      quantity: 1,
      imageURL: "../../assets/images/react.png",
    },
    {
      id: 6,
      title: "Firebase",
      quantity: 1,
      imageURL: "../../assets/images/react.png",
    },
  ];

  return (
    <Box sx={{ ml: 5 }}>
      <Typography variant="h5">Most used skills</Typography>

      <Stack
        direction="row"
        spacing={"16%"}
        sx={{
          pt: 4,
          maxWidth: "100%",
          display: "flex",
        }}
      >
        {skills.map((skill, index) => {
          //function to ensure card does not animate out of bounds
          const transformDecider = () => {
            if (index === 0) {
              return "translate(-8%, -30%)";
            } else if (index === skills.length - 1) {
              return "translate(-18%, -30%)";
            } else {
              return "translate(-10%, -30%)";
            }
          };
          return (
            <Grid item key={skill.id}>
              <Card
                sx={{
                  height: 135,
                  width: "15%",
                  minWidth: "13%",
                  borderRadius: 1,
                  boxShadow: 20,
                  transition: "0.4s",
                  zIndex: 0,
                  mr: 2,
                  position: "absolute",

                  "&:hover": {
                    height: 250,
                    width: "23%",
                    zIndex: 1,
                    position: "absolute",
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
                  sx={{ width: "100%", height: "100%", transition: "0.3s" }}
                >
                  <img
                    src="https://www.seekpng.com/png/detail/80-803597_io-is-compatible-with-all-javascript-frameworks-and.png"
                    alt="skill"
                    style={{ maxWidth: "100%", minHeight: "100%" }}
                  />
                </Box>

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
        })}
      </Stack>
    </Box>
  );
};

export default Skills;
