import { useState } from "react";
import {
  AppBar,
  Toolbar,
  Button,
  Grid,
  IconButton,
  Avatar,
  Menu,
  MenuItem,
} from "@mui/material";
import { GitHub, LinkedIn } from "@mui/icons-material";
import logo from "../../assets/images/logo.png";
import avatar from "../../assets/images/avatar.jpg";

const Navbar = () => {
  const [navbarColor, setNavbarColor] = useState("transparent");
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const changeNavbarColor = () => {
    if (window.scrollY >= 100) {
      setNavbarColor("secondary");
    } else setNavbarColor("transparent");
  };

  window.addEventListener("scroll", changeNavbarColor);

  return (
    <div className="nav">
      <AppBar elevation={0} color={navbarColor}>
        <Toolbar>
          <Grid
            container
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Grid alignItems="baseline" justifyContent="space-evenly">
              <IconButton>
                <img src={logo} alt="bijuice logo" height={43} width={102} />
              </IconButton>
              <Button>Home</Button>
              <Button>Projects</Button>
              <Button>Skills</Button>
              <Button>Experience</Button>
            </Grid>

            <Grid item>
              <IconButton>
                <a
                  href="https://github.com/bijuice"
                  target="_blank"
                  rel="noreferrer"
                >
                  <GitHub color="primary" fontSize="large" />
                </a>
              </IconButton>
              <IconButton>
                <a
                  href="https://www.linkedin.com/in/abdul-rahman-rehmtulla-2794b81a7/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <LinkedIn color="primary" fontSize="large" />
                </a>
              </IconButton>
              <IconButton onClick={handleClick}>
                <Avatar src={avatar} alt="avatar" />
              </IconButton>

              <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                PaperProps={{
                  elevation: 0,
                  sx: {
                    overflow: "visible",
                    filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                    mt: 1.5,
                    "& .MuiAvatar-root": {
                      width: 32,
                      height: 32,
                      ml: -0.5,
                      mr: 1,
                    },
                    "&:before": {
                      content: '""',
                      display: "block",
                      position: "absolute",
                      top: 0,
                      right: 14,
                      width: 10,
                      height: 10,
                      bgcolor: "background.paper",
                      transform: "translateY(-50%) rotate(45deg)",
                      zIndex: 0,
                    },
                  },
                }}
                transformOrigin={{ horizontal: "right", vertical: "top" }}
                anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
              >
                <MenuItem onClick={handleClose}>About Me</MenuItem>
                <MenuItem onClick={handleClose}>Contact</MenuItem>
                <MenuItem onClick={handleClose}>GitHub</MenuItem>
                <MenuItem onClick={handleClose}>LinkedIn</MenuItem>
              </Menu>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
