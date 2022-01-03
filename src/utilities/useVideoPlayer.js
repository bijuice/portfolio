import { useState, useEffect } from "react";

const useVideoPlayer = (videoElement) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [volume, setVolume] = useState(0.5);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    isPlaying ? videoElement.current.play() : videoElement.current.pause();
  }, [isPlaying, videoElement]);

  const handleOnTimeUpdate = () => {
    const progress =
      videoElement.current.currentTime / videoElement.current.duration;

    setProgress(progress);
  };

  const handleVideoProgress = (event) => {
    const manualChange = Number(event.target.value);

    videoElement.current.currentTime =
      videoElement.current.duration * manualChange;

    setProgress(manualChange);
  };

  const handleSkipForward = (event) => {
    videoElement.current.currentTime = videoElement.current.currentTime + 10;
    const progress =
      videoElement.current.currentTime / videoElement.current.duration;

    setProgress(progress);
  };

  const handleSkipBack = (event) => {
    videoElement.current.currentTime = videoElement.current.currentTime - 10;
    const progress =
      videoElement.current.currentTime / videoElement.current.duration;

    setProgress(progress);
  };

  const handleVolumeChange = (event) => {
    videoElement.current.volume = Number(event.target.value);

    setVolume(Number(event.target.value));
  };

  return {
    isPlaying,
    progress,
    togglePlay,
    handleOnTimeUpdate,
    handleVideoProgress,
    handleSkipForward,
    handleSkipBack,
    handleVolumeChange,
    volume,
  };
};

export default useVideoPlayer;
