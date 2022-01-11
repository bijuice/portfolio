export const carouselTheme = (index, width, value) => {
  //decides responsive values
  const resolveCardWidth = () => {
    if (width < 862) {
      return width * 0.29;
    } else if (width < 1339) {
      return width * 0.23;
    } else {
      return "15.2%";
    }
  };

  const theme = {
    height: "15%",
    minHeight: 135,
    width: resolveCardWidth(),
    minWidth: 200,
    boxShadow: 20,
    transition: "0.4s",
    zIndex: 0,
    position: "absolute",
    borderRadius: 0,

    "&:hover": {
      height: value.tools ? 320 : 280,
      width: "23.5%",
      zIndex: 15,
      position: "absolute",
      display: "block",
      transform: index === 0 ? "translate(-8%, -30%)" : "translate(-10%, -30%)",
    },
    "&:hover #project-title": {
      display: "block",
    },

    "&:hover #project-box": {
      height: value.tools ? "65%" : "70%",
    },
  };
  return theme;
};

export const pageTheme = {
  height: "80vh",
  m: 4,
  mt: 18,
};
