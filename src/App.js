import Home from "./Views/Home/Home"
import { createTheme } from "@mui/material/styles"
import { ThemeProvider } from "@emotion/react"
import { Routes, Route, useLocation } from "react-router-dom"
import Navbar from "./Views/Home/Navbar"
import SkillsPage from "./Views/SkillsPage"
import ExperiencePage from "./Views/ExperiencePage"
import ProjectsPage from "./Views/ProjectsPage"
import { AnimatePresence, motion } from "framer-motion/dist/framer-motion"
import VideoPlayer from "./Views/VideoPlayer"
import { Box, Typography } from "@mui/material"
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile,
} from "react-device-detect"

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#FFFFFF",
    },
    secondary: {
      main: "#E50914",
    },
  },
  typography: {
    allVariants: {
      color: "white",
    },
    h2: {
      fontWeight: "bold",
    },
  },
})

function App() {
  const location = useLocation()

  const showNav = () => {
    if (location.pathname === "/video") {
      return false
    } else {
      return true
    }
  }

  return (
    <ThemeProvider theme={theme}>
      {isBrowser && (
        <BrowserView>
          <Box
            sx={{ bacgroundColor: "black", height: "100vh", width: "100vw" }}
          >
            {showNav() && <Navbar />}

            <AnimatePresence>
              <Routes location={location} key={location.key}>
                <Route path="/" element={<Home />} />
                <Route path="/skills" element={<SkillsPage />} />
                <Route path="/experience" element={<ExperiencePage />} />
                <Route path="/projects" element={<ProjectsPage />} />
                <Route path="/video" element={<VideoPlayer />} />
              </Routes>
            </AnimatePresence>
            {showNav() && (
              <Box sx={{ mb: 5, borderTop: "1px solid #424242" }}>
                <Typography variant="subtitle1" sx={{ pt: 5, pl: 7, pb: 3 }}>
                  {" "}
                  Made with ❤️ & 🐈 by Abdul Rahman Rehmtulla
                </Typography>
              </Box>
            )}
          </Box>
        </BrowserView>
      )}

      {isMobile && (
        <MobileView>
          <div
            style={{
              width: "100vw",
              height: "100vh",
              color: "white",
              display: "flex",
              justifyContent: "center",
              alignContent: "center",
            }}
          >
            <p>
              Bijuiceflix for mobile is still under construction. Visit this
              site on the web for the full experience :)
            </p>
          </div>
        </MobileView>
      )}
    </ThemeProvider>
  )
}

export default App
