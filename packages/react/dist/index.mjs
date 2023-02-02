// ../tokens/dist/index.mjs
var colors = {
  white: "#FFF",
  black: "#000",
  gray100: "#E1E1E6",
  gray200: "#A9A9B2",
  gray400: "#7C7C8A",
  gray500: "#505059",
  gray600: "#323238",
  gray700: "#29292E",
  gray800: "#202024",
  gray900: "#121214",
  izuka300: "#90e0ef",
  izuka500: "#48cae4",
  izuka700: "#00b4d8",
  izuka900: "#0096c7"
};

// src/index.tsx
import { jsx } from "react/jsx-runtime";
function App() {
  return /* @__PURE__ */ jsx("h1", { style: { color: colors.izuka300 }, children: "Hello World" });
}
export {
  App
};
