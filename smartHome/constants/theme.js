import { Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");

export const COLORS = {
    // base colors
    primary: "#FC6D3F", // orange
    secondary: "#CDCDD2",   // gray

    // colors
    black: "#2A2A37",
    white: "#FFFFFF",
    yellow: "#FFFF00",
    yellowBrown:"#cc9966",

    lightGray: "#F5F5F6",
    lightGray2: "#F6F6F7",
    lightGray3: "#EFEFF1",
    lightGray4: "#F8F8F9",
    transparent: "transparent",
    darkgray: '#898C95',
};

export const SIZES = {
    // global sizes
    base: 8,
    font: 14,
    radius: 30,
    padding: 10,
    padding2: 12,
    welcome: 18,
    // font sizes
    largeTitle: 55,
    h1: 100,
    h2: 22,
    h3: 20,
    h4: 18,
    body1: 30,
    body2: 20,
    body3: 16,
    body4: 14,
    body5: 12,
    name: 21,
    // app dimensions
    width,
    height
};

export const FONTS = {
    welcome: {
        fontFamily: "Roboto-regular",
        fontSize: SIZES.welcome,
        color: COLORS.darkgray,
        letterSpacing: -0.6,
        lineHeight: SIZES.welcome + 4,
    },
    name: {
        fontFamily: "Roboto-regular",
        fontSize: SIZES.name,
        fontWeight: '600',
        color: COLORS.black,
        letterSpacing: -1.1,
        lineHeight: SIZES.name + 4,
      },
    largeTitle: { fontFamily: "Roboto-regular", fontSize: SIZES.largeTitle, lineHeight: 55 },
    h1: { fontFamily: "Roboto-regular", fontSize: SIZES.h1, color: COLORS.black, letterSpacing: -10, lineHeight: SIZES.h1, },
    h2: { fontFamily: "Roboto-Bold", fontSize: SIZES.h2, lineHeight: 30 },
    h3: { fontFamily: "Roboto-Bold", fontSize: SIZES.h3, lineHeight: 22 },
    h4: { fontFamily: "Roboto-Bold", fontSize: SIZES.h4, lineHeight: 22 },
    body1: { fontFamily: "Roboto-Regular", fontSize: SIZES.body1, lineHeight: 36 },
    body2: { fontFamily: "Roboto-Regular", fontSize: SIZES.body2, lineHeight: 30 },
    body3: { fontFamily: "Roboto-Regular", fontSize: SIZES.body3, lineHeight: 22 },
    body4: { fontFamily: "Roboto-Regular", fontSize: SIZES.body4, lineHeight: 22 },
    body5: { fontFamily: "Roboto-Regular", fontSize: SIZES.body5, lineHeight: 22 },
    splash: { fontFamily: "patrickHand", fontSize: 40, color:"white" }
};

const appTheme = { COLORS, SIZES, FONTS };

export default appTheme;