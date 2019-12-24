import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import Home from "./pages/Home";
import Sell from "./pages/Sell";
import { theme } from "./theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Route exact path="/" component={Home} />
        <Route exact path="/sell" component={Sell} />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
