export const carouselTheme = (index) => {
  return {
    height: 135,
    width: "15%",
    boxShadow: 20,
    transition: "0.4s",
    zIndex: 0,
    position: "absolute",
    borderRadius: 0,

    "&:hover": {
      height: 310,
      width: "23%",
      zIndex: 1,
      position: "absolute",
      transform: index === 0 ? "translate(-8%, -30%)" : "translate(-10%, -30%)",
    },
    "&:hover #project-title": {
      display: "block",
    },

    "&:hover #project-box": {
      height: "65%",
    },
  };
};
