/* eslint-disable react/prop-types */
import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState({});
  const [control, setControl] = useState(false);

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("user")));
  }, [control]);

  const logout = async () => {
    setUser({});
    localStorage.removeItem("user");
    try {
        await axios.post("http://127.0.0.1:8000/user/logout");
        setControl(!control);
    } catch (error) {
        console.log(error);
    }
  };

  const authInfo = {
    loading,
    setLoading,
    user,
    logout,
    control,
    setControl
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
