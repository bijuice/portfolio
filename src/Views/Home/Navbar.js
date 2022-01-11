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
import logo from "../../assets/images/bijuicelogo.png";
import avatar from "../../assets/images/avatar.jpg";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { buttonAnimation } from "../../preferences/animationPrefs";

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
              <Link to="/" style={{ textDecoration: "none" }}>
                <IconButton
                  component={motion.div}
                  variants={buttonAnimation}
                  whileHover="hover"
                >
                  <img src={logo} alt="bijuice logo" height={43} width={102} />
                </IconButton>
              </Link>
              <Link to="/" style={{ textDecoration: "none" }}>
                <Button
                  component={motion.div}
                  variants={buttonAnimation}
                  whileHover="hover"
                >
                  Home
                </Button>
              </Link>
              <Link to="/projects" style={{ textDecoration: "none" }}>
                <Button
                  component={motion.div}
                  variants={buttonAnimation}
                  whileHover="hover"
                >
                  Projects
                </Button>
              </Link>
              <Link to="/skills" style={{ textDecoration: "none" }}>
                <Button
                  component={motion.div}
                  variants={buttonAnimation}
                  whileHover="hover"
                >
                  Skills
                </Button>
              </Link>
              <Link to="/experience" style={{ textDecoration: "none" }}>
                <Button
                  component={motion.div}
                  variants={buttonAnimation}
                  whileHover="hover"
                >
                  Experience
                </Button>
              </Link>
            </Grid>

            <Grid item>
              <IconButton
                component={motion.div}
                variants={buttonAnimation}
                whileHover="hover"
              >
                <a
                  href="https://github.com/bijuice"
                  target="_blank"
                  rel="noreferrer"
                >
                  <GitHub color="primary" fontSize="large" />
                </a>
              </IconButton>
              <IconButton
                component={motion.div}
                variants={buttonAnimation}
                whileHover="hover"
              >
                <a
                  href="https://www.linkedin.com/in/abdul-rahman-rehmtulla-2794b81a7/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <LinkedIn color="primary" fontSize="large" />
                </a>
              </IconButton>
              <IconButton
                onClick={handleClick}
                component={motion.div}
                variants={buttonAnimation}
                whileHover="hover"
              >
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
                <a
                  href="mailto: abdul.r.zaid@gmail.com"
                  style={{ textDecoration: "none" }}
                >
                  <MenuItem onClick={handleClose}>Contact</MenuItem>
                </a>
                <a
                  href="https://www.linkedin.com/in/abdul-rahman-rehmtulla-2794b81a7/"
                  target="_blank"
                  rel="noreferrer"
                  style={{ textDecoration: "none" }}
                >
                  <MenuItem onClick={handleClose}>LinkedIn</MenuItem>
                </a>
                <a
                  href="https://github.com/bijuice"
                  target="_blank"
                  rel="noreferrer"
                  style={{ textDecoration: "none" }}
                >
                  <MenuItem onClick={handleClose}>GitHub</MenuItem>
                </a>
              </Menu>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
