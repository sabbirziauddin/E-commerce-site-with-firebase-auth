import React, { createContext, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
} from "firebase/auth";
import app from "../firebase/firebase.init";

export const AuthContext = createContext();
const auth = getAuth(app);

const UseContext = ({ children }) => {
  const [name, setName] = useState({});
  //create user with email and password
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  //create sign in
  const logIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  const user = { name: "anas" };
  const authInfo = { user, createUser, logIn };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default UseContext;
