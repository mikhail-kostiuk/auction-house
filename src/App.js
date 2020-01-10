import React, { useEffect } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import Home from "./pages/Home";
import Sell from "./pages/Sell";
import Item from "./pages/Item";
import Favorites from "./pages/Favorites";
import { theme } from "./theme";
import store from "./store";
import { auth, firestore } from "./firebase";
import { loginUser, logoutUser } from "./actions/authActions";
import { setFavorites } from "./actions/itemsActions";
import Contacts from "./pages/Contacts";

function App() {
  useEffect(() => {
    auth.onAuthStateChanged(function(firebaseUser) {
      if (firebaseUser) {
        let user = null;

        firestore
          .collection("users")
          .where("uid", "==", `${firebaseUser.uid}`)
          .limit(1)
          .get()
          .then(function(querySnapshot) {
            user = querySnapshot.docs[0].data();
            store.dispatch(loginUser({ uid: user.uid }));
            store.dispatch(setFavorites(user.favorites));
          })
          .catch(function(error) {
            console.log("Error getting documents: ", error);
          });
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
          <Route exact path="/favorites" component={Favorites} />
          <Route exact path="/contacts" component={Contacts} />
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
