import { ThemeProvider } from "styled-components";
import Router from "./routes";

import GlobalStyle from "@styles/globals";
import theme from "@styles/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router />
    </ThemeProvider>
  );
}

export default App;
