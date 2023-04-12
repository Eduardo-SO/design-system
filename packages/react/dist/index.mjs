var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};

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
var space = {
  1: "0.25rem",
  2: "0.5rem",
  3: "0.75rem",
  4: "1rem",
  5: "1.25rem",
  6: "1.5rem",
  7: "1.75rem",
  8: "2rem",
  10: "2.5rem",
  12: "3rem",
  16: "4rem",
  20: "5rem",
  40: "10rem",
  64: "16rem",
  80: "20rem"
};
var radii = {
  px: "1px",
  xs: "4px",
  sm: "6px",
  md: "8px",
  lg: "16px",
  full: "99999px"
};
var fonts = {
  default: "Roboto, sans-serif",
  code: "monospace"
};
var fontSizes = {
  xxs: "0.625rem",
  xs: "0.75rem",
  sm: "0.875rem",
  md: "1rem",
  lg: "1.125rem",
  xl: "1.25rem",
  "2xl": "1.5rem",
  "4xl": "2rem",
  "5xl": "2.25rem",
  "6xl": "3rem",
  "7xl": "4rem",
  "8xl": "4.5rem",
  "9xl": "6rem"
};
var fontWeights = {
  regular: "400",
  medium: "500",
  bold: "700"
};
var lineHeights = {
  shorter: "125%",
  short: "140%",
  base: "160%",
  tall: "180%"
};

// src/styles/index.ts
import { createStitches, defaultThemeMap } from "@stitches/react";
var {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config
} = createStitches({
  themeMap: __spreadProps(__spreadValues({}, defaultThemeMap), {
    width: "space",
    height: "space"
  }),
  theme: {
    colors,
    fontSizes,
    fontWeights,
    fonts,
    lineHeights,
    radii,
    space
  }
});

// src/components/Text.tsx
var Text = styled("p", {
  fontFamily: "$default",
  lineHeight: "$base",
  margin: 0,
  color: "$gray100",
  variants: {
    size: {
      xxs: { fontSize: "$xxs" },
      xs: { fontSize: "xs" },
      sm: { fontSize: "sm" },
      md: { fontSize: "md" },
      lg: { fontSize: "lg" },
      xl: { fontSize: "xl" },
      "2xl": { fontSize: "2xl" },
      "4xl": { fontSize: "4xl" },
      "5xl": { fontSize: "5xl" },
      "6xl": { fontSize: "6xl" },
      "7xl": { fontSize: "7xl" },
      "9xl": { fontSize: "8xl" },
      "8xl": { fontSize: "9xl" }
    }
  },
  defaultVariants: {
    size: "md"
  }
});
Text.displayName = "Text";

// src/components/MultiStep/styles.ts
var MultiStepContainer = styled("div", {});
var Label = styled(Text, {
  color: "$gray200",
  defaultVariants: {
    size: "xs"
  }
});
var Steps = styled("div", {
  display: "grid",
  gap: "$2",
  marginTop: "$1",
  gridTemplateColumns: "repeat(var(--steps-size), 1fr)"
});
var Step = styled("div", {
  height: "$1",
  borderRadius: "$px",
  backgroundColor: "$gray600",
  variants: {
    active: {
      true: {
        backgroundColor: "$gray100"
      }
    }
  }
});

// src/components/MultiStep/index.tsx
import { jsx, jsxs } from "react/jsx-runtime";
function MultiStep({ size, currentStep = 1 }) {
  return /* @__PURE__ */ jsxs(MultiStepContainer, { children: [
    /* @__PURE__ */ jsxs(Label, { children: [
      "Passo ",
      currentStep,
      " de ",
      size
    ] }),
    /* @__PURE__ */ jsx(Steps, { css: { "--steps-size": size }, children: Array.from({ length: size }, (_, index) => index + 1).map((step) => /* @__PURE__ */ jsx(Step, { active: currentStep >= step }, step)) })
  ] });
}
MultiStep.displayName = "MultiStep";

// src/components/TextInput/styles.ts
var TextInputContainer = styled("div", {
  display: "flex",
  alignItems: "baseline",
  padding: "$3 $4",
  border: "2px solid $gray900",
  borderRadius: "$sm",
  boxSizing: "border-box",
  backgroundColor: "$gray900",
  "&:has(input:focus)": {
    borderColor: "$izuka300"
  },
  "&:has(input:disabled)": {
    opacity: 0.5,
    cursor: "not-allowed"
  }
});
var Prefix = styled("span", {
  color: "$gray400",
  fontFamily: "$default",
  fontSize: "$sm",
  fontWeight: "$regular"
});
var Input = styled("input", {
  width: "100%",
  border: 0,
  backgroundColor: "transparent",
  color: "$white",
  fontFamily: "$default",
  fontSize: "$sm",
  fontWeight: "$regular",
  "&:focus": {
    outline: 0
  },
  "&:disabled": {
    cursor: "not-allowed"
  },
  "&:placeholder": {
    color: "$gray400"
  }
});

// src/components/TextInput/index.tsx
import { jsx as jsx2, jsxs as jsxs2 } from "react/jsx-runtime";
function TextInput(_a) {
  var _b = _a, { prefix } = _b, props = __objRest(_b, ["prefix"]);
  return /* @__PURE__ */ jsxs2(TextInputContainer, { children: [
    !!prefix && /* @__PURE__ */ jsx2(Prefix, { children: prefix }),
    /* @__PURE__ */ jsx2(Input, __spreadValues({}, props))
  ] });
}
TextInput.displayName = "TextInput";

// src/components/TextArea.tsx
var TextArea = styled("textarea", {
  minHeight: 80,
  padding: "$3 $4",
  border: "2px solid $gray900",
  borderRadius: "$sm",
  boxSizing: "border-box",
  resize: "vertical",
  backgroundColor: "$gray900",
  color: "$white",
  fontFamily: "$default",
  fontSize: "$sm",
  fontWeight: "$regular",
  "&:has(input:focus)": {
    outline: 0,
    borderColor: "$izuka300"
  },
  "&:disabled": {
    opacity: 0.5,
    cursor: "not-allowed"
  },
  "&:placeholder": {
    color: "$gray400"
  }
});
TextArea.displayName = "TextArea";

// src/components/Checkbox/index.tsx
import { Check } from "phosphor-react";

// src/components/Checkbox/styles.ts
import * as Checkbox from "@radix-ui/react-checkbox";
var CheckboxContainer = styled(Checkbox.Root, {
  all: "unset",
  boxSizing: "border-box",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "$6",
  height: "$6",
  backgroundColor: "$gray900",
  border: "2px solid $gray900",
  borderRadius: "$xs",
  lineHeight: 0,
  overflow: "hidden",
  cursor: "pointer",
  '&[data-state="checked"]': {
    backgroundColor: "$izuka300"
  },
  "&:focus": {
    border: "2px solid $izuka300"
  },
  "&:disabled": {
    cursor: "not-allowed"
  }
});
var slideIn = keyframes({
  from: {
    transform: "translateY(-100%)"
  },
  to: {
    transform: "translateY(0)"
  }
});
var slideOut = keyframes({
  from: {
    transform: "translateY(0)"
  },
  to: {
    transform: "translateY(-100%)"
  }
});
var CheckboxIndicator = styled(Checkbox.Indicator, {
  width: "$4",
  height: "$4",
  color: "$white",
  '&[data-state="checked"]': {
    animation: `${slideIn} 200ms ease-out`
  },
  '&[data-state="unchecked"]': {
    animation: `${slideOut} 200ms ease-out`
  }
});

// src/components/Checkbox/index.tsx
import { jsx as jsx3 } from "react/jsx-runtime";
function Checkbox2(_a) {
  var props = __objRest(_a, []);
  return /* @__PURE__ */ jsx3(CheckboxContainer, __spreadProps(__spreadValues({}, props), { children: /* @__PURE__ */ jsx3(CheckboxIndicator, { asChild: true, children: /* @__PURE__ */ jsx3(Check, { weight: "bold" }) }) }));
}
Checkbox2.displayName = "Checkbox";

// src/components/Heading.tsx
var Heading = styled("h2", {
  fontFamily: "$default",
  lineHeight: "$shorter",
  margin: 0,
  color: "$gray100",
  variants: {
    size: {
      sm: { fontSize: "xl" },
      md: { fontSize: "2xl" },
      lg: { fontSize: "4xl" },
      "2xl": { fontSize: "5xl" },
      "3xl": { fontSize: "6xl" },
      "4xl": { fontSize: "7xl" },
      "5xl": { fontSize: "8xl" },
      "6xl": { fontSize: "9xl" }
    }
  },
  defaultVariants: {
    size: "md"
  }
});
Heading.displayName = "Button";

// src/components/Avatar/index.tsx
import { User } from "phosphor-react";

// src/components/Avatar/styles.ts
import * as Avatar from "@radix-ui/react-avatar";
var AvatarContainer = styled(Avatar.Root, {
  display: "inline-block",
  overflow: "hidden",
  width: "$12",
  height: "$12",
  borderRadius: "$full"
});
var AvatarImage = styled(Avatar.Image, {
  width: "100%",
  height: "100%",
  objectFit: "cover",
  borderRadius: "inherit"
});
var AvatarFallback = styled(Avatar.Fallback, {
  width: "100%",
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "$gray600",
  color: "$gray800",
  svg: {
    width: "$6",
    height: "$6"
  }
});

// src/components/Avatar/index.tsx
import { jsx as jsx4, jsxs as jsxs3 } from "react/jsx-runtime";
function Avatar2(props) {
  return /* @__PURE__ */ jsxs3(AvatarContainer, { children: [
    /* @__PURE__ */ jsx4(AvatarImage, __spreadValues({}, props)),
    /* @__PURE__ */ jsx4(AvatarFallback, { delayMs: 600, children: /* @__PURE__ */ jsx4(User, {}) })
  ] });
}
Avatar2.displayName = "Avatar";

// src/components/Button.tsx
var Button = styled("button", {
  all: "unset",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "$2",
  boxSizing: "border-box",
  minWidth: 128,
  padding: "0 $4",
  borderRadius: "$sm",
  fontSize: "$sm",
  fontWeight: "$medium",
  fontFamily: "$default",
  textAlign: "center",
  cursor: "pointer",
  "&:disabled": {
    cursor: "not-allowed"
  },
  svg: {
    width: "$4",
    height: "$4"
  },
  variants: {
    variant: {
      primary: {
        color: "$white",
        background: "$izuka500",
        "&:not(:disabled):hover": {
          background: "$izuka300"
        },
        "&:disabled": {
          backgroundColor: "$gray200"
        }
      },
      secondary: {
        color: "$izuka300",
        border: "solid 2px $izuka500",
        "&:not(:disabled):hover": {
          background: "$izuka500",
          color: "$white"
        },
        "&:disabled": {
          color: "$gray200",
          borderColor: "$gray200"
        }
      },
      tertiary: {
        color: "$gray100",
        "&:not(:disabled):hover": {
          background: "$izuka500",
          color: "$white"
        },
        "&:disabled": {
          color: "$gray600",
          borderColor: "$gray200"
        }
      }
    },
    size: {
      sm: {
        height: 38
      },
      md: {
        height: 46
      }
    }
  },
  defaultVariants: {
    variant: "primary",
    size: "md"
  }
});
Button.displayName = "Button";

// src/components/Box.tsx
var Box = styled("div", {
  padding: "$4",
  borderRadius: "$md",
  backgroundColor: "$gray800",
  border: "1px solid $gray600"
});
Box.displayName = "Box";
export {
  Avatar2 as Avatar,
  Box,
  Button,
  Checkbox2 as Checkbox,
  Heading,
  MultiStep,
  Text,
  TextArea,
  TextInput
};
