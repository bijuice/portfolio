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
import culturecapture from "../../assets/images/culture-capture.png";
import flutter from "../../assets/images/flutter.svg";
import firebase from "../../assets/images/firebase.svg";
import figma from "../../assets/images/figma.svg";
import Zoom from "@mui/material/Zoom";

const style = {
  position: "absolute",
  top: "5%",
  bottom: "5%",
  left: "25%",
  right: "25%",
  width: "50%",
  bgcolor: "#141414",
  boxShadow: 24,
  overflowY: "scroll",
  borderRadius: 2,
  minWidth: 700,
};

const DetailsModal = (props) => {
  return (
    <Modal
      open={props.open}
      onClose={props.handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Zoom in={props.open}>
        <Box sx={style}>
          <div className="modal-top">
            <Container
              sx={{
                pt: 15,
                pl: 2,
              }}
            >
              {/* header content  */}
              <Container
                sx={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <img
                  src={culturecapture}
                  alt="culture capture logo"
                  height="150px"
                  width="auto"
                />
                <Typography variant="h3" sx={{ fontWeight: "bold", pl: 2 }}>
                  <div>Culture</div>
                  <div>Capture</div>
                </Typography>
              </Container>
              <Container sx={{ mt: 3 }}>
                <Grid container spacing={3} sx={{ pt: 1 }}>
                  <Grid item>
                    <Tooltip title="Flutter" arrow>
                      <img
                        src={flutter}
                        width="20px"
                        height="20px"
                        alt="flutter icon"
                      />
                    </Tooltip>
                  </Grid>
                  <Grid item>
                    <Tooltip title="Firebase" arrow>
                      <img
                        src={firebase}
                        width="20px"
                        height="20px"
                        alt="firbase icon"
                      />
                    </Tooltip>
                  </Grid>
                  <Grid item>
                    <Tooltip title="Figma" arrow>
                      <img
                        src={figma}
                        width="20px"
                        height="20px"
                        alt="firbase icon"
                      />
                    </Tooltip>
                  </Grid>
                </Grid>

                <Grid container spacing={3} sx={{ pt: 3 }}>
                  <Grid item>
                    <Button variant="contained" startIcon={<PlayArrow />}>
                      Play
                    </Button>
                  </Grid>
                </Grid>
              </Container>
            </Container>
          </div>

          {/* mid section content  */}

          <Container sx={{ height: 1000, backgroundColor: "#141414", pt: 5 }}>
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
                <Typography variant="h4">Culture Capture App</Typography>

                <Box spacing={5} sx={{ display: "flex", pt: 1 }}>
                  <Typography variant="subtitle1" color="#46D369">
                    99.9% recommended
                  </Typography>
                  <Typography variant="subtitle1" sx={{ pl: 2, pr: 2 }}>
                    2020
                  </Typography>
                  <Box sx={{ border: 1, borderColor: "white" }}>
                    <Typography variant="subtitle2" sx={{ p: 0.25 }}>
                      12+
                    </Typography>
                  </Box>
                </Box>

                <Typography sx={{ pt: 2 }}>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Corrupti, quidem aliquam consequuntur commodi voluptate hic
                  itaque dolorem, nihil placeat facilis maiores sit eveniet.
                  Quibusdam sequi consequuntur, iste at nesciunt cupiditate
                  doloremque quo qui molestias. Architecto, suscipit! Laudantium
                  doloremque, adipisci itaque ullam voluptas sit doloribus earum
                  voluptatibus assumenda cumque magnam! Quisquam illo est
                </Typography>
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
                    Genre:
                  </Typography>
                  <Typography variant="subtitle1" component="span">
                    Android/iOS App
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
                    1 Year
                  </Typography>
                </Box>

                <Box sx={{ pt: 1 }}>
                  <Typography
                    variant="subtitle1"
                    color="#787878"
                    sx={{ pr: 1 }}
                  >
                    Technologies:
                  </Typography>
                  <Grid container spacing={3} sx={{ pt: 1 }}>
                    <Grid item>
                      <Tooltip title="Flutter" arrow>
                        <img
                          src={flutter}
                          width="20px"
                          height="20px"
                          alt="flutter icon"
                        />
                      </Tooltip>
                    </Grid>
                    <Grid item>
                      <Tooltip title="Firebase" arrow>
                        <img
                          src={firebase}
                          width="20px"
                          height="20px"
                          alt="firbase icon"
                        />
                      </Tooltip>
                    </Grid>
                    <Grid item>
                      <Tooltip title="Figma" arrow>
                        <img
                          src={figma}
                          width="20px"
                          height="20px"
                          alt="firbase icon"
                        />
                      </Tooltip>
                    </Grid>
                  </Grid>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Zoom>
    </Modal>
  );
};

export default DetailsModal;
