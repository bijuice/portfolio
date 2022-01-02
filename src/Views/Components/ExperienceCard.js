import {
  Box,
  Grid,
  Typography,
  Card,
  Tooltip,
  IconButton,
} from "@mui/material";
import { InfoOutlined } from "@mui/icons-material";
import { carouselTheme } from "../../preferences/themePrefs";
import { cardAnimation } from "../../preferences/animationPrefs";
import { motion } from "framer-motion";

const ExperienceCard = ({ experience, index, handleOpen, width }) => {
  return (
    <Grid item>
      <Card
        onClick={() => {
          handleOpen(experience);
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
            backgroundImage: `url(${experience.imageURL})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        ></Box>

        <Box id="project-title" sx={{ m: 2, mr: 1 }}>
          <Grid container justifyContent="space-between" alignItems="center">
            {/* TITLE AND GENRES */}

            <Grid item>
              <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                {experience.title}
              </Typography>
              <Typography
                variant="subtitle2"
                sx={{ fontWeight: "bold" }}
                color="#5A5A5A"
              >
                {experience.role} • {experience.year} • {experience.duration}
              </Typography>
            </Grid>

            {/* BOX BUTTONS */}
            <Grid item>
              <Box sx={{ display: "flex" }}>
                <Tooltip title="More info">
                  <IconButton
                    onClick={() => {
                      handleOpen(experience);
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
            {experience.tools?.map((tool) => {
              return (
                <Grid
                  item
                  key={tool.title}
                  component={motion.div}
                  whileHover={{
                    scale: 1.3,
                  }}
                >
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
  );
};

export default ExperienceCard;
