import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../Firebase/firebase.init";




export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true)
  console.log(user, loading);

//   this function is for create user consider as register 
  const createNewUser = (email, password) =>{
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password)
   
  }
//   this function is for Sign in or login user 
const loginUser = (email, password)=>{
    setLoading(true)
   return signInWithEmailAndPassword (auth, email, password)
}
//   this function is to use for observe the user when they log in and does logOut
useEffect(()=>{
    const unSubscribe = onAuthStateChanged(auth , currentUser =>{
        setUser(currentUser)
         setLoading(false);
    })
    return ()=>{
        unSubscribe()
    }
},[])

// this function is for signOut 
const logOutUser =()=>{
    signOut(auth)
}
//update user data
const updateUserProfile = (updatedData)=>{
    return updateProfile(auth.currentUser, updatedData)
}


  const context = {
    setUser,
    user,
    createNewUser,
    logOutUser,
    loginUser,
    loading,
    updateProfile,
  };

  return (
    <AuthContext.Provider value={context}>{children} </AuthContext.Provider>
  );
};

export default AuthProvider;
