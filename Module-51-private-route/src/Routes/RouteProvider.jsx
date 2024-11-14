import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';
import { createContext, useEffect, useState } from 'react';
import auth from '../Utility/firebase.init';

export const AuthContext = createContext(null);

const RouteProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const name = 'Hanjiya';
  const [loading, setLoading] = useState(true);

  // ---------- Create User ----------
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // ---------- Signin User ----------
  const signInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // ---------- SignOut User ----------
  const signOutUser = () => {
    setLoading(true);
    return signOut(auth);
  }
  
  // ---------- Observe User ----------
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    // Cleanup funciton
    return () => {
      unSubscribe();
    };
  }, []);

  // Contain all object
  const personalInfo = {
    name,
    createUser,
    signInUser,
    user,
    signOutUser,
    loading
  };
  return (
    <AuthContext.Provider value={personalInfo}>{children}</AuthContext.Provider>
  );
};

export default RouteProvider;

/**
 * Create context with default null
 * Create provider antena then set value
 * Access all components by declare children
 */

/**
 * const name = 'saad',
 * cosnt age = 10,
 * const money = '$2'
 *
 * const person = {
 *  name: name,
 *  age: age,
 *  money: money,
 * };
 * console.log(person);
 *
 * shorthand -->
 * const personEasy = {name, age, money};
 */
