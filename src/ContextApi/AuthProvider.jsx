import React, { createContext, useState } from "react";
export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState();
  
  const context = {
    setUser, 
    user, 
  };

  return (
    <AuthContext.Provider value={context}>{children} </AuthContext.Provider>
  );
};

export default AuthProvider;
