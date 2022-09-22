// Keep alphabetically sorted
// This tool is helpful https://wordcounter.net/alphabetize

// Color names from http://chir.ag/projects/name-that-color

const colors = {
  alto: "#E0E0E0",
  black: "#000000",
  blueChalk: "#EDE5FF",
  concrete: "#F2F2F2",
  crimson: "#E61445",
  emperor: "#4F4F4F",
  gray: "#828282",
  heliotrope: "#E87BF8",
  magnolia: "#F6F2FF",
  magnoliaLight: "#FBFAFF",
  mediumPurple: "#8456EC",
  melrose: "#CCB6FF",
  pastelPink: "#FFD7E0",
  purpleHeart: "#501FC1",
  silver: "#BDBDBD",
  snowyMint: "#D3FFE2",
  tropicalRainForest: "#00805E",
  violentViolet: "#240D57",
  white: "#FFFFFF",
};

const breakPoints = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "425px",
  tabletS: "560px",
  tabletM: "768px",
  tabletL: "960px",
  laptopS: "1024px",
  laptopM: "1280px",
  laptopL: "1440px",
  desktopS: "1680px",
  desktopM: "1920px",
  desktopL: "2400px",
};

const theme = { colors, breakPoints };

export default theme;
