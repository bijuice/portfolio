import { Box, IconButton, Stack, Slider } from "@mui/material";
import { initializeApp } from "firebase/app";
import { getStorage, ref, getDownloadURL } from "firebase/storage";
import { useState, useEffect, useRef } from "react";
import ReactPlayer from "react-player";
import useWindowDimensions from "../utilities/useWindowDimensions";
import {
  PlayArrow,
  Forward10,
  Replay10,
  VolumeMute,
  Fullscreen,
  ArrowBack,
  Pause,
  FullscreenExit,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const firebaseConfig = {
  apiKey: "AIzaSyDX9SqhsmeGCewl5GfEXfgkOrWhef0zAwA",
  authDomain: "aflix-b9083.firebaseapp.com",
  projectId: "aflix-b9083",
  storageBucket: "aflix-b9083.appspot.com",
  messagingSenderId: "166210509379",
  appId: "1:166210509379:web:c4ead3d72c78e72a24d2f6",
};

const VideoPlayer = () => {
  const navigate = useNavigate();
  const [videoUrl, setVideoUrl] = useState();
  const { width, height } = useWindowDimensions();

  useEffect(() => {
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

  const videoPlayer = useRef();
  const [showControls, setShowControls] = useState(true);
  const [play, setPlay] = useState(false);
  const [scrubberValue, setScrubberValue] = useState(0);

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

  const handleScrubberChange = (event, newValue) => {
    setScrubberValue(newValue);
  };

  // const showControlsController = () => {
  //   setShowControls(true);

  //   setTimeout(() => {
  //     setShowControls(false);
  //   }, 5000);
  // };

  // window.addEventListener("mousemove", showControlsController);

  return (
    <Box sx={{ width: "100vw" }} ref={fullscreen}>
      {/* <PlayArrow
        sx={{
          fontSize: 150,
          color: "white",
          position: "absolute",
          top: "35%",
          left: "45%",
          zIndex: 5,
          display: "block",
        }}
      /> */}
      {showControls && (
        <Box sx={{ position: "absolute", ml: 2, mt: 2, zIndex: 1 }}>
          <IconButton onClick={() => navigate("/")}>
            <ArrowBack sx={{ fontSize: 45 }} />
          </IconButton>
        </Box>
      )}

      <Box onClick={() => setPlay(!play)}>
        <ReactPlayer
          url={videoUrl}
          playing={play}
          width={width}
          height={height}
          style={{ position: "absolute", zIndex: 0 }}
        />
      </Box>

      {showControls && (
        <Box
          sx={{ width: "100vw", zIndex: 1, top: "85%", position: "absolute" }}
        >
          <Slider
            aria-label="Volume"
            value={scrubberValue}
            onChange={handleScrubberChange}
            sx={{ ml: 5, width: width - 70, color: "#E50914" }}
            min={0}
            step={0.00001}
            max={0.999999}
          />
          <Stack
            direction="row"
            justifyContent="space-between"
            sx={{ width: width }}
          >
            <Stack direction="row" spacing={2} sx={{ pl: 2 }}>
              <IconButton onClick={() => setPlay(!play)}>
                {play ? (
                  <Pause sx={{ fontSize: 50 }} />
                ) : (
                  <PlayArrow sx={{ fontSize: 50 }} />
                )}
              </IconButton>
              <IconButton onClick={() => setPlay(!play)}>
                <Replay10 sx={{ fontSize: 50 }} />
              </IconButton>
              <IconButton onClick={() => setPlay(!play)}>
                <Forward10 sx={{ fontSize: 50 }} />
              </IconButton>
              <IconButton onClick={() => setPlay(!play)}>
                <VolumeMute sx={{ fontSize: 50 }} />
              </IconButton>
            </Stack>

            <IconButton onClick={openFullscreen} sx={{ pr: 2 }}>
              {isFullscreen ? (
                <FullscreenExit sx={{ fontSize: 50 }} />
              ) : (
                <Fullscreen sx={{ fontSize: 50 }} />
              )}
            </IconButton>
          </Stack>
        </Box>
      )}
    </Box>
  );
};

export default VideoPlayer;
