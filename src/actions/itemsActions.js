import * as actionTypes from "./actionTypes";
import { firestore } from "../firebase";

export const setFavorites = items => {
  return dispatch => {
    dispatch({ type: actionTypes.SET_FAVORITES, payload: items });
  };
};

export const addToFavorites = (itemRef, uid, favorites) => {
  return dispatch => {
    const updatedFavorites = [...favorites];
    updatedFavorites.push(itemRef);

    const userRef = firestore.collection("users").doc(uid);

    userRef
      .update({
        favorites: updatedFavorites,
      })
      .then(() =>
        dispatch({
          type: actionTypes.ADD_TO_FAVORITES,
          payload: updatedFavorites,
        })
      );
  };
};

export const removeFromFavorites = (itemRef, uid, favorites) => {
  return dispatch => {
    const updatedFavorites = [...favorites];
    const index = favorites.findIndex(ref => ref.id === itemRef.id);
    updatedFavorites.splice(index, 1);

    const userRef = firestore.collection("users").doc(uid);

    userRef
      .update({
        favorites: updatedFavorites,
      })
      .then(() =>
        dispatch({
          type: actionTypes.ADD_TO_FAVORITES,
          payload: updatedFavorites,
        })
      )
      .catch(function(error) {
        console.error("Error writing document: ", error);
      });
  };
};
