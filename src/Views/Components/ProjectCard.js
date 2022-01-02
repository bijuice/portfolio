import {
  Typography,
  Card,
  Grid,
  Box,
  IconButton,
  Tooltip,
} from "@mui/material";
import { InfoOutlined } from "@mui/icons-material";
import { motion } from "framer-motion";
import { carouselTheme } from "../../preferences/themePrefs";
import { cardAnimation } from "../../preferences/animationPrefs";

const ProjectCard = ({ project, index, handleOpen, width }) => {
  return (
    <Grid item>
      <Card
        onClick={() => {
          handleOpen(project);
        }}
        sx={carouselTheme(index, width)}
      >
        <Box
          component={motion.div}
          variants={cardAnimation}
          id="project-box"
          sx={{
            width: "100%",
            height: "100%",
            transition: "0.3s",
            backgroundImage: `url(${project.imageURL})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        ></Box>

        <Box id="project-title" sx={{ m: 2, mr: 1 }}>
          <Grid container justifyContent="space-between" alignItems="center">
            {/* TITLE AND GENRES */}

            <Grid item>
              <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                {project.title}
              </Typography>
              <Typography
                variant="subtitle2"
                sx={{ fontWeight: "bold" }}
                color="#5A5A5A"
              >
                {project.genres} • {project.year}
              </Typography>
            </Grid>

            {/* BOX BUTTONS */}
            <Grid item>
              <Box sx={{ display: "flex" }}>
                <Tooltip title="More info">
                  <IconButton
                    onClick={() => {
                      handleOpen(project);
                    }}
                  >
                    <InfoOutlined />
                  </IconButton>
                </Tooltip>
              </Box>
            </Grid>
          </Grid>

          {/* TECHNOLOGY ICONS */}
          <Grid container spacing={2} sx={{ pt: 1 }}>
            {project.tools?.map((tool) => {
              return (
                <Grid item key={tool.title}>
                  <Tooltip title={tool.title} arrow>
                    <motion.img
                      whileHover={{
                        scale: 1.3,
                      }}
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
  );
};

export default ProjectCard;
