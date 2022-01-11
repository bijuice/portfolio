import {
  Modal,
  Box,
  Typography,
  Grid,
  Container,
  Button,
  Tooltip,
} from "@mui/material";
import "./Components.css";
import { PlayArrow } from "@mui/icons-material";
import { Zoom } from "@mui/material";
import { buttonAnimation } from "../../preferences/animationPrefs";
import { motion } from "framer-motion";

const style = {
  position: "absolute",
  top: "5%",
  bottom: "5%",
  left: "25%",
  right: "25%",
  width: "50%",
  minWidth: 500,
  bgcolor: "#141414",
  boxShadow: 24,
  overflowY: "scroll",
  borderRadius: 2,
  border: "none",
  "&::-webkit-scrollbar": {
    width: "0.7em",
  },
  "&::-webkit-scrollbar-track": {
    boxShadow: "inset 0 0 6px rgba(0, 0, 0, 0.3)",
  },

  "&::-webkit-scrollbar-thumb": {
    backgroundColor: "#424242",
  },
};

const DetailsModal = ({ open, handleClose, details }) => {
  // conditionally renders modal whether details object has data. Idk why its needed but the app crashes without it
  return !details ? (
    <div></div>
  ) : (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Zoom in={open}>
        <Box sx={style}>
          <Box
            sx={{
              width: "100%",
              height: 300,
              postion: "relative",
              pt: 15,
              background: details.imageURL
                ? `linear-gradient(to bottom, rgba(0,0,0,0), rgba(20, 20, 20, 100)), url(${details.imageURL})`
                : "white",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          >
            {/* header content  */}
            <Container
              sx={{
                display: "flex",
                alignItems: "center",
                background: details.imageURL
                  ? "radial-gradient(rgba(20,20,20,0.7) 5%,  rgba(0, 0, 0, 0)) 80%"
                  : "white",
                pr: 100,
              }}
            >
              <img
                src={details.logo}
                alt="logo"
                width="400px"
                style={{ padding: 10 }}
              />
            </Container>

            <Container sx={{ mt: 3, ml: 3, width: "50%" }}>
              {details.tools && (
                <Grid container spacing={3} sx={{ pt: 1 }}>
                  {details.tools.map((tool) => {
                    return (
                      <Grid
                        item
                        component={motion.div}
                        variants={buttonAnimation}
                        whileHover="hover"
                        key={tool.title}
                      >
                        <Tooltip title={tool.title} arrow>
                          <img
                            src={tool.icon}
                            width="20px"
                            height="20px"
                            alt={tool.title}
                          />
                        </Tooltip>
                      </Grid>
                    );
                  })}
                </Grid>
              )}

              {details.videos && (
                <Grid container spacing={3} sx={{ pt: 3 }}>
                  <Grid item>
                    <Button variant="contained" startIcon={<PlayArrow />}>
                      Play
                    </Button>
                  </Grid>
                </Grid>
              )}
            </Container>
          </Box>

          {/* mid section content  */}

          <Container sx={{ height: 400, backgroundColor: "#141414", pt: 5 }}>
            <Grid
              container
              spacing={2}
              sx={{
                pl: 2,
                alignItems: "start",
                justifyContent: "space-between",
              }}
            >
              <Grid item sx={{ width: "65%" }}>
                <Typography variant="h4">{details.title}</Typography>

                <Box spacing={5} sx={{ display: "flex", pt: 1 }}>
                  <Typography variant="subtitle1" color="#46D369">
                    99.9% recommended
                  </Typography>
                  <Typography variant="subtitle1" sx={{ pl: 2, pr: 2 }}>
                    {details.year}
                  </Typography>
                  <Box sx={{ border: 1, borderColor: "white" }}>
                    <Typography variant="subtitle2" sx={{ p: 0.25 }}>
                      12+
                    </Typography>
                  </Box>
                </Box>

                <Typography
                  sx={{ pt: 2 }}
                  dangerouslySetInnerHTML={{ __html: details.description }}
                ></Typography>
              </Grid>

              <Grid item sx={{ pr: 2, position: "sticky" }}>
                <Box>
                  <Typography
                    variant="subtitle1"
                    component="span"
                    color="#787878"
                    sx={{ pr: 1 }}
                  >
                    Director:
                  </Typography>
                  <Typography variant="subtitle1" component="span">
                    Abdul R. Rehmtulla
                  </Typography>
                </Box>

                <Box sx={{ pt: 1 }}>
                  <Typography
                    variant="subtitle1"
                    component="span"
                    color="#787878"
                    sx={{ pr: 1 }}
                  >
                    {details.genres ? "Genre:" : "Role:"}
                  </Typography>
                  <Typography variant="subtitle1" component="span">
                    {details.genres || details.role}
                  </Typography>
                </Box>

                <Box sx={{ pt: 1 }}>
                  <Typography
                    variant="subtitle1"
                    component="span"
                    color="#787878"
                    sx={{ pr: 1 }}
                  >
                    Studio:
                  </Typography>
                  <Typography variant="subtitle1" component="span">
                    Culture Capture
                  </Typography>
                </Box>
                {details.duration && (
                  <Box sx={{ pt: 1 }}>
                    <Typography
                      variant="subtitle1"
                      component="span"
                      color="#787878"
                      sx={{ pr: 1 }}
                    >
                      Duration:
                    </Typography>
                    <Typography variant="subtitle1" component="span">
                      {details.duration}
                    </Typography>
                  </Box>
                )}

                {details.tools && (
                  <Box sx={{ pt: 1 }}>
                    <Typography
                      variant="subtitle1"
                      color="#787878"
                      sx={{ pr: 1 }}
                    >
                      Technologies:
                    </Typography>
                    <Grid container spacing={3} sx={{ pt: 1 }}>
                      {details.tools.map((tool) => {
                        return (
                          <Grid
                            item
                            key={tool.title}
                            component={motion.div}
                            variants={buttonAnimation}
                            whileHover="hover"
                          >
                            <Tooltip title={tool.title} arrow>
                              <img
                                src={tool.icon}
                                width="20px"
                                height="20px"
                                alt={tool.title}
                              />
                            </Tooltip>
                          </Grid>
                        );
                      })}
                    </Grid>
                  </Box>
                )}
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Zoom>
    </Modal>
  );
};

export default DetailsModal;
