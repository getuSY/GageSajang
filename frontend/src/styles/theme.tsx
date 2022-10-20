import { DefaultTheme } from "styled-components";

export const greenTheme: DefaultTheme = {
  mainColor: "#53C882",
  subColor: "rgba(93, 217, 143, 0.56)",
  // blurColor: ["#01AD7C", "#FFF95B"],
  // gradColor: ["#01AD7C", "#37E19D", "#FFF80B"],
  blurColor: "linear-gradient(92.86deg, #01AD7C 0%, #FFF95B 100%)",
  gradColor: "linear-gradient(90deg, #01AD7C 0%, #37E19D 43.89%, #FFF80B 100%)",
};

export const purpleTheme: DefaultTheme = {
  mainColor: "#A155B9",
  subColor: "#DFB2ED",
  blurColor: "linear-gradient(92.86deg, #0C0AA8 0%, #B10DAB 40.62%, #FF0099 100%)",
  gradColor: "linear-gradient(90deg, #29187C -10.69%, #D00CF0 40.09%, #E12C61 119.31%)",
};

export const blueTheme: DefaultTheme = {
  mainColor: "#6560D2",
  subColor: "#B7B4F6",
  blurColor: "linear-gradient(92.86deg, #30EFEF 0%, #01A9F3 47.92%, #001AFF 100%)",
  gradColor: "linear-gradient(270deg, #00D1FF 0%, #0855F9 56.2%, #1406B4 100%)",
};

export const orangeTheme: DefaultTheme = {
  mainColor: "#FF5722",
  subColor: "#FCBCA8",
  blurColor: "linear-gradient(92.86deg, #EB2B5E 0%, #FF0F00 46.35%, #FF9900 100%)",
  gradColor: "linear-gradient(90deg, #EB2B5E -10.69%, #FF4D00 31.97%, #FFB800 119.31%)",
};
