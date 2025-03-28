import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { CssBaseline, GlobalStyles, ThemeProvider } from "@mui/material";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import App from "./App.tsx";
import { colors } from "@mui/material";
import { LightTheme } from "src/themes/light-theme.ts";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={LightTheme}>
        <App />
        <CssBaseline />
        <GlobalStyles
          styles={{
            body: {
              backgroundColor: colors.grey[50],
            },
          }}
        ></GlobalStyles>
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>
);
