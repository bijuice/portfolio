import { Typography, Card, Grid, Box, Stack } from "@mui/material";
import "./Home.css";
import firebasecard from "../../assets/images/firebasecard.svg";
import fluttercard from "../../assets/images/fluttercard.svg";
import reactcard from "../../assets/images/reactcard.svg";
import vuecard from "../../assets/images/vuecard.svg";
import materialcard from "../../assets/images/materialcard.svg";
import bootstrapcard from "../../assets/images/bootstrapcard.svg";
import laravelcard from "../../assets/images/laravelcard.svg";
import nodecard from "../../assets/images/nodecard.svg";
import { ArrowForwardIos, ArrowBackIos } from "@mui/icons-material";
import { useState } from "react";

const Skills = () => {
  const skills = [
    {
      id: 1,
      title: "React",
      quantity: 1,
      imageURL: reactcard,
    },
    {
      id: 2,
      title: "Vue",
      quantity: 1,
      imageURL: vuecard,
    },
    {
      id: 3,
      title: "Flutter",
      quantity: 1,
      imageURL: fluttercard,
    },
    {
      id: 4,
      title: "Material UI",
      quantity: 1,
      imageURL: materialcard,
    },
    {
      id: 5,
      title: "Bootstrap",
      quantity: 1,
      imageURL: bootstrapcard,
    },
    {
      id: 6,
      title: "Firebase",
      quantity: 1,
      imageURL: firebasecard,
    },
    {
      id: 7,
      title: "Laravel",
      quantity: 1,
      imageURL: laravelcard,
    },
    {
      id: 8,
      title: "Laravel",
      quantity: 1,
      imageURL: nodecard,
    },
  ];

  const [page, setPage] = useState(1);

  //sets page of skills
  const nextPage = () => {
    setPage((page) => page + 1);
  };

  const previousPage = () => {
    setPage((page) => page - 1);
  };

  return (
    <Box sx={{ height: 250 }}>
      <Typography sx={{ ml: 4 }} variant="h5">
        Most used skills
      </Typography>

      <Box sx={{ pt: 4 }}>
        <Grid
          container
          sx={{
            height: 135,
            width: "5%",
            zIndex: 5,
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
          direction="row"
          spacing={"16%"}
          sx={{
            ml: 4,
            maxWidth: "100%",
            display: "flex",
            transform: page > 1 ? "translate(-15%)" : 0,
          }}
        >
          {skills.slice(5 * (page - 1), 7 * page).map((skill, index) => {
            //function to ensure card does not animate out of bounds
            const transformDecider = () => {
              if (index === 0) {
                return "translate(-8%, -30%)";
              } else if (index === 5) {
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
                    boxShadow: 20,
                    transition: "0.4s",
                    zIndex: 1,
                    mr: 2,
                    position: "absolute",
                    borderRadius: 0,

                    "&:hover": {
                      height: 250,
                      width: "23%",
                      position: "absolute",
                      transform: transformDecider(),
                      zIndex: 4,
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
                      src={skill.imageURL}
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
        <Grid
          container
          sx={{
            ml: 2,
            height: 135,
            width: "5%",
            zIndex: 3,
            position: "absolute",
            left: "95%",
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
