import {
  Box,
  IconButton,
  Stack,
  Slider,
  Typography,
  CircularProgress,
} from "@mui/material";
import { initializeApp } from "firebase/app";
import { getStorage, ref, getDownloadURL } from "firebase/storage";
import { useState, useEffect, useRef } from "react";
import useWindowDimensions from "../utilities/useWindowDimensions";
import {
  PlayArrow,
  Forward10,
  Replay10,
  VolumeMute,
  VolumeDown,
  VolumeUp,
  Fullscreen,
  ArrowBack,
  Pause,
  FullscreenExit,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import useVideoPlayer from "../utilities/useVideoPlayer";
import { motion } from "framer-motion";
import { routeAnimation, buttonAnimation } from "../preferences/animationPrefs";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
};

const VideoPlayer = () => {
  const navigate = useNavigate();
  const [videoUrl, setVideoUrl] = useState();
  const { width, height } = useWindowDimensions();

  useEffect(() => {
    console.log(firebaseConfig);

    const firebaseApp = initializeApp(firebaseConfig);
    const storage = getStorage(firebaseApp);

    getDownloadURL(ref(storage, "ccprototype.mp4"))
      .then((url) => {
        setVideoUrl(url);
      })
      .catch((error) => {
        // Handle any errors
      });
  }, []);

  const videoElement = useRef();
  const {
    isPlaying,
    progress,
    togglePlay,
    handleOnTimeUpdate,
    handleVideoProgress,
    handleSkipForward,
    handleSkipBack,
    handleVolumeChange,
    volume,
  } = useVideoPlayer(videoElement);

  const fullscreen = useRef();
  const [isFullscreen, setIsFullscreen] = useState(false);

  const openFullscreen = () => {
    if (!isFullscreen) {
      if (fullscreen.current.requestFullscreen) {
        fullscreen.current.requestFullscreen();
      } else if (fullscreen.current.webkitRequestFullscreen) {
        /* Safari */
        fullscreen.current.webkitRequestFullscreen();
      } else if (fullscreen.current.msRequestFullscreen) {
        /* IE11 */
        fullscreen.current.msRequestFullscreen();
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.webkitExitFullscreen) {
        /* Safari */
        document.webkitExitFullscreen();
      } else if (document.msExitFullscreen) {
        /* IE11 */
        document.msExitFullscreen();
      }
    }
    setIsFullscreen(!isFullscreen);
  };

  const resolveVolumeIcon = () => {
    if (volume === 0) {
      return <VolumeMute sx={{ fontSize: 50 }} />;
    } else if (volume < 0.5) {
      return <VolumeDown sx={{ fontSize: 50 }} />;
    }

    return <VolumeUp sx={{ fontSize: 50 }} />;
  };

  const [showLoading, setShowLoading] = useState(true);

  useEffect(() => {
    videoElement.current.addEventListener("loadeddata", () =>
      setShowLoading(false)
    );
  }, []);

  return (
    <Box
      component={motion.div}
      variants={routeAnimation}
      initial="hidden"
      animate="visible"
      sx={{ width: "100vw" }}
      ref={fullscreen}
    >
      {showLoading && (
        <CircularProgress
          size={100}
          sx={{
            color: "#E50914",
            position: "absolute",
            top: "40%",
            left: "47%",
            zIndex: 5,
            display: "block",
          }}
        />
      )}
      <Box sx={{ position: "absolute", ml: 2, mt: 2, zIndex: 1 }}>
        <IconButton
          component={motion.div}
          variants={buttonAnimation}
          whileHover="hover"
          onClick={() => navigate("/")}
        >
          <ArrowBack sx={{ fontSize: 45 }} />
        </IconButton>
      </Box>
      <Box onClick={togglePlay}>
        <video
          height={height - 18}
          width={width}
          src={videoUrl}
          ref={videoElement}
          onTimeUpdate={handleOnTimeUpdate}
        />
      </Box>
      <Box sx={{ width: "100vw", zIndex: 1, top: "85%", position: "absolute" }}>
        <Slider
          aria-label="Volume"
          value={progress}
          onChange={(e) => handleVideoProgress(e)}
          sx={{ ml: 5, width: width - 70, color: "#E50914" }}
          min={0}
          step={0.00001}
          max={1}
        />
        <Stack
          direction="row"
          justifyContent="space-between"
          sx={{ width: width }}
        >
          <Stack direction="row" spacing={2} sx={{ pl: 2 }}>
            <IconButton
              component={motion.div}
              variants={buttonAnimation}
              whileHover="hover"
              onClick={togglePlay}
            >
              {isPlaying ? (
                <Pause sx={{ fontSize: 50 }} />
              ) : (
                <PlayArrow sx={{ fontSize: 50 }} />
              )}
            </IconButton>
            <IconButton
              component={motion.div}
              variants={buttonAnimation}
              whileHover="hover"
              onClick={handleSkipBack}
            >
              <Replay10 sx={{ fontSize: 50 }} />
            </IconButton>
            <IconButton
              component={motion.div}
              variants={buttonAnimation}
              whileHover="hover"
              onClick={handleSkipForward}
            >
              <Forward10 sx={{ fontSize: 50 }} />
            </IconButton>

            <Box
              sx={{
                "&:hover #volume-slider": {
                  display: "block",
                },
              }}
            >
              <Box
                id="volume-slider"
                sx={{
                  backgroundColor: "#424242",
                  height: 150,
                  position: "absolute",
                  transform: "translate(30%, -100%)",
                  py: 4,
                  px: 1,
                  borderRadius: 1,
                  display: "none",
                }}
              >
                <Slider
                  aria-label="Volume"
                  value={volume}
                  orientation="vertical"
                  onChange={(e) => handleVolumeChange(e)}
                  min={0}
                  step={0.01}
                  max={1}
                  sx={{
                    color: "#E50914",

                    "& .MuiSlider-track": {
                      border: "none",
                    },
                    "& .MuiSlider-rail": {
                      opacity: 0.5,
                      backgroundColor: "#bfbfbf",
                    },
                  }}
                />
              </Box>
              <IconButton
                component={motion.div}
                variants={buttonAnimation}
                whileHover="hover"
              >
                {resolveVolumeIcon()}
              </IconButton>
            </Box>

            <Typography variant="h5" sx={{ pt: 2, fontWeight: "light" }}>
              Culture Capture Prototype
            </Typography>
          </Stack>

          <IconButton
            component={motion.div}
            variants={buttonAnimation}
            whileHover="hover"
            onClick={openFullscreen}
            sx={{ pr: 3 }}
          >
            {isFullscreen ? (
              <FullscreenExit sx={{ fontSize: 50 }} />
            ) : (
              <Fullscreen sx={{ fontSize: 50 }} />
            )}
          </IconButton>
        </Stack>
      </Box>
      )
    </Box>
  );
};

export default VideoPlayer;
