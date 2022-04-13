const traits = {
  Base: {
    bgColor: "rgba(100,100,100,1)",
    fgColor: "red",
    font: "Lato",
    mgStep: "1em",
    pdStep: "1em",
  },
  Roleet: {
    bgColor: "#312C29",
    fgColor: "white",
  },
  "North Games": {
    bgColor: "linear-gradient(#0819B1, #050F69)",
    fgColor: "white",
  },
  Light: {},
  Dark: {},
  Compact: {
    mgStep: ".75em",
    pdStep: ".75em",
  },
  Cozy: {
    mgStep: "1.25em",
    pdStep: "1.25em",
  },
  "Color Blind": {
    bgColor: "white",
    fgColor: "black",
  },
  Dyslexic: {
    font: "Dyslexia",
  },
};

const initialState = {
  bgColor: "rgba(100,100,100,1)",
  fgColor: "black",
  font: "Lato",
  mgStep: "1em",
  pdStep: "1em",
};

export default (state = initialState, action) => {
  const { type, load } = action;
  switch (type) {
    case "THEME_UPDATE":
      const newTheme = load.reduce(
        (prev, curr) => ({ ...prev, ...traits[curr] }),
        {}
      );
      return { ...newTheme };
    case "THEME_RESET":
      return initialState;
    default:
      return state;
  }
};
