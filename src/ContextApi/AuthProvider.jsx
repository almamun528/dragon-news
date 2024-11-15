import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../Firebase/firebase.init";




export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState();
  

//   this function is for create user consider as register 
  const createNewUser = (email, password) =>{
    return createUserWithEmailAndPassword(auth, email, password)
  }
//   this function is for Sign in or login user 
const loginUser = (email, password)=>{
   return signInWithEmailAndPassword (auth, email, password)
}
//   this function is to use for observe the user when they log in and does logOut
useEffect(()=>{
    const unSubscribe = onAuthStateChanged(auth , currentUser =>{
        setUser(currentUser)
    })
    return ()=>{
        unSubscribe()
    }
},[])

// this function is for signOut 
const logOutUser =()=>{
    signOut(auth)
}


  const context = {
    setUser,
    user,
    createNewUser,
    logOutUser,
    loginUser,
  };

  return (
    <AuthContext.Provider value={context}>{children} </AuthContext.Provider>
  );
};

export default AuthProvider;
