import {
  Typography,
  Card,
  Grid,
  Box,
  IconButton,
  Tooltip,
  Stack,
} from "@mui/material";
import { InfoOutlined } from "@mui/icons-material";
import "./Home.css";
import flutter from "../../assets/images/flutter.svg";
import firebase from "../../assets/images/firebase.svg";
import figma from "../../assets/images/figma.svg";
import culturecapture from "../../assets/images/culturecapture.png";
import hisa from "../../assets/images/hisa.png";
import vue from "../../assets/images/vue.svg";
import laravel from "../../assets/images/laravel.svg";
import bootstrap from "../../assets/images/bootstrap.svg";
import DetailsModal from "../Components/DetailsModal";
import { useState } from "react";

const Experience = () => {
  const skills = [
    {
      id: 1,
      title: "Hisa",
      imageURL: hisa,
      year: "2021",
      duration: "7 months",
      link: "https://hisa.co/",
      tools: [
        { title: "Vue JS", icon: vue },
        { title: "Bootstrap", icon: bootstrap },
        { title: "Laravel", icon: laravel },
      ],
    },
    {
      id: 2,
      title: "Culture Capture",
      imageURL: culturecapture,
      year: "2020",
      duration: "1 year",
      link: "https://hisa.co/",
      tools: [
        { title: "Flutter", icon: flutter },
        { title: "Firebase", icon: firebase },
        { title: "Figma", icon: figma },
      ],
    },
    {
      id: 3,
      title: "KamiLimu",
      imageURL: "https://bit.ly/32i63Kz",
      year: "2021",
      duration: "5 months",
      link: "https://hisa.co/",
    },
    {
      id: 4,
      title: "USIU Africa",
      imageURL: "https://www.usiu.ac.ke/assets/image/usiu-logo.png",
      year: "2017",
      duration: "4 Years",
      link: "https://hisa.co/",
    },
  ];

  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box sx={{ ml: 5, height: 250 }}>
      <DetailsModal open={open} handleClose={handleClose} />

      <Typography variant="h5">Experience</Typography>

      <Stack
        direction="row"
        spacing={"16%"}
        sx={{
          pt: 4,
          maxWidth: "100%",
          display: "flex",
        }}
      >
        {skills.map((skill, index) => (
          <Grid item key={skill.id}>
            <Card
              onClick={handleOpen}
              sx={{
                height: 135,
                width: "15%",
                minWidth: "13%",
                boxShadow: 20,
                transition: "0.4s",
                zIndex: 0,
                mr: 2,
                position: "absolute",
                borderRadius: 0,

                "&:hover": {
                  height: skill.tools ? 310 : 270,
                  width: "23%",
                  zIndex: 1,
                  position: "absolute",
                  transform:
                    index === 0
                      ? "translate(-8%, -30%)"
                      : "translate(-10%, -30%)",
                },
                "&:hover #project-title": {
                  display: "block",
                },

                "&:hover #project-box": {
                  height: "60%",
                },
              }}
            >
              <Box
                id="project-box"
                sx={{ width: "100%", height: "100%", transition: "0.3s" }}
              >
                <img
                  src={skill.imageURL}
                  alt="skill"
                  style={{ maxWidth: "100%", minHeight: "100%" }}
                />
              </Box>

              <Box
                id="project-title"
                sx={{ m: 2, mr: 1, mt: skill.tools ? 3 : 5 }}
              >
                <Grid
                  container
                  justifyContent="space-between"
                  alignItems="center"
                >
                  {/* TITLE AND GENRES */}

                  <Grid item>
                    <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                      {skill.title}
                    </Typography>
                    <Typography
                      variant="subtitle2"
                      sx={{ fontWeight: "bold" }}
                      color="#5A5A5A"
                    >
                      {skill.year} • {skill.duration}
                    </Typography>
                  </Grid>

                  {/* BOX BUTTONS */}
                  <Grid item>
                    <Box sx={{ display: "flex" }}>
                      <Tooltip title="More info">
                        <IconButton onClick={handleOpen}>
                          <InfoOutlined />
                        </IconButton>
                      </Tooltip>
                    </Box>
                  </Grid>
                </Grid>

                {/* TECHNOLOGY ICONS */}
                <Grid container spacing={2} sx={{ pt: 1 }}>
                  {skill.tools?.map((tool) => {
                    return (
                      <Grid item key={tool.title}>
                        <Tooltip title={tool.title} arrow>
                          <img
                            src={tool.icon}
                            width="20px"
                            height="20px"
                            alt="flutter icon"
                          />
                        </Tooltip>
                      </Grid>
                    );
                  })}
                </Grid>
              </Box>
            </Card>
          </Grid>
        ))}
      </Stack>
    </Box>
  );
};

export default Experience;
