import React, { useEffect } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import Home from "./pages/home/Home";
import Sell from "./pages/sell/Sell";
import Item from "./pages/item/Item";
import { theme } from "./theme";
import store from "./store";
import { auth, firestore } from "./firebase";
import { loginUser, logoutUser } from "./actions/authActions";
import { setFavorites } from "./actions/itemsActions";
import { addFunds } from "./actions/fundsActions";
import Contacts from "./pages/contacts/Contacts";
import Favorites from "./pages/favorites/Favorites";
import MyBids from "./pages/myBids/MyBids";
import NotFound from "./pages/notFound/NotFound";
import MyAuctions from "./pages/myAuctions/MyAuctions";

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
            store.dispatch(loginUser({ uid: user.uid, email: user.email }));
            store.dispatch(addFunds(user.funds));
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
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/sell" component={Sell} />
            <Route exact path="/item" component={Item} />
            <Route exact path="/favorites" component={Favorites} />
            <Route exact path="/my-bids" component={MyBids} />
            <Route exact path="/my-auctions" component={MyAuctions} />
            <Route exact path="/contacts" component={Contacts} />
            <Route exact path="/not-found" component={NotFound} />
            <Redirect to="not-found" />
          </Switch>
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
