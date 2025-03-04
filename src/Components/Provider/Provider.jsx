import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  sendEmailVerification,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { auth } from "../../../firebaseInit";

export const ThemeContext = createContext(null);

const Provider = ({ children }) => {
  const [User, setUser] = useState(null);

  const createAccount = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signInAccount = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  useEffect(() => {
    const currentSignedIn = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });

    return () => {
      currentSignedIn();
    };
  }, []);

  const signOUT = () => {
    return signOut(auth);
  };

  const updateUserProfile = (userData) => {
    return updateProfile(auth.currentUser, userData);
  };

  const emailVerification = () => {
    return sendEmailVerification(auth.currentUser);
  };

  const passwordReset = (email) => {
    return sendPasswordResetEmail(auth, email);
  };

  const googleSignin = (GoogleProvider) => {
    return signInWithPopup(auth, GoogleProvider);
  };

  const githubSignin = (GithubProvider) => {
    return signInWithPopup(auth, GithubProvider);
  };

  const info = {
    createAccount,
    signInAccount,
    User,
    signOUT,
    updateUserProfile,
    emailVerification,
    passwordReset,
    googleSignin,
    githubSignin,
  };
  return (
    <div>
      <ThemeContext.Provider value={info}>{children}</ThemeContext.Provider>
    </div>
  );
};

Provider.propTypes = {
  children: PropTypes.object.isRequired,
};

export default Provider;
