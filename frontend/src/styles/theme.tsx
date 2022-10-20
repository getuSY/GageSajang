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
  blurColor: ["#0C0AA8", "#B10DAB", "#FF0099"],
  gradColor: ["#29187C", "#D00CF0", "#E12C61"],
};

export const blueTheme: DefaultTheme = {
  mainColor: "#6560D2",
  subColor: "#B7B4F6",
  blurColor: ["#30EFEF", "#01A9F3", "#001AFF"],
  gradColor: ["#1406B4", "#0855F9", "#00D1FF"],
};

export const orangeTheme: DefaultTheme = {
  mainColor: "#FF5722",
  subColor: "#FCBCA8",
  blurColor: ["#EB2B5E", "#FF0F00", "#FF9900"],
  gradColor: ["#EB2B5E", "#FF3D00", "#FFA800"],
};
