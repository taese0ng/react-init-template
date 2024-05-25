const theme = {
  colors: {
    white: "#FFFFFF",
    black: "#000000",
  },
  zIndex: {
    header: 100,
    modal: 200,
    dropdown: 300,
    toast: 400,
  },
} as const;

export type Theme = typeof theme;

export default theme;
