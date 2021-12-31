import Home from "./Views/Home/Home";
import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@emotion/react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./Views/Home/Navbar";
import SkillsPage from "./Views/SkillsPage";
import { AnimatePresence } from "framer-motion";
import { Box } from "@mui/system";

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
});

function App() {
  const location = useLocation();

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ bacgroundColor: "black", height: "100vh" }}>
        <AnimatePresence>
          <Navbar />

          <Routes location={location} key={location.key}>
            <Route path="/" element={<Home />} />
            <Route path="/skills" element={<SkillsPage />} />
          </Routes>
        </AnimatePresence>
      </Box>
    </ThemeProvider>
  );
}

export default App;
