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
    <Box sx={{ ml: 5, pt: 26 }}>
      <Typography variant="h5">Most used skills</Typography>

      <Stack
        container
        spacing={28}
        direction="row"
        sx={{
          pt: 4,
          width: "100%",
          flex: 20,
          overflowX: "visible",
        }}
      >
        {skills.map((skill) => (
          <Grid item key={skill.id}>
            <Card
              sx={{
                height: 125,
                width: 210,
                borderRadius: 1,
                boxShadow: 20,
                transition: "0.4s",
                zIndex: 0,
                mr: 2,
                minWidth: 100,
                position: "absolute",

                "&:hover": {
                  height: 225,
                  width: 325,
                  zIndex: 1,
                  position: "absolute",
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
        ))}
      </Stack>
    </Box>
  );
};

export default Skills;
