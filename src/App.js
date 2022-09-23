import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Views/Home/Home";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1300,
      lgBig: 1480,
      xl: 1580,
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      {/* <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter> */}
      <Home />
    </ThemeProvider>
  );
}

export default App;
