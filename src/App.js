import React, { useEffect } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import Home from "./pages/Home";
import Sell from "./pages/Sell";
import Item from "./pages/Item";
import { theme } from "./theme";
import store from "./store";
import { auth } from "./firebase";
import { loginUser, logoutUser } from "./actions/authActions";

function App() {
  useEffect(() => {
    auth.onAuthStateChanged(function(user) {
      if (user) {
        console.log("user");
        store.dispatch(loginUser(user));
      } else {
        store.dispatch(logoutUser());
      }
    });
  }, []);

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Route exact path="/" component={Home} />
          <Route exact path="/sell" component={Sell} />
          <Route exact path="/item" component={Item} />
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
