export const carouselTheme = (index, width) => {
  //decides responsive values
  const resolveCardWidth = () => {
    if (width < 862) {
      return width * 0.29;
    } else if (width < 1339) {
      return width * 0.23;
    } else {
      return 230;
    }
  };

  const theme = {
    height: 135,
    width: resolveCardWidth(),
    boxShadow: 20,
    transition: "0.4s",
    zIndex: 0,
    position: "absolute",
    borderRadius: 0,

    "&:hover": {
      height: 310,
      width: 350,
      zIndex: 15,
      position: "absolute",
      display: "block",
      transform: index === 0 ? "translate(-8%, -30%)" : "translate(-10%, -30%)",
    },
    "&:hover #project-title": {
      display: "block",
    },

    "&:hover #project-box": {
      height: "65%",
    },
  };
  return theme;
};

export const pageTheme = {
  height: "80vh",
  m: 4,
  mt: 18,
};
