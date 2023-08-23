/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useContext, useReducer, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const navigate = useNavigate();
  const {
    isUserLoggedIn,
    token: savedToken,
    isDoctor,
  } = JSON.parse(localStorage.getItem("login")) || {
    isUserLoggedIn: false,
    token: null,
    isDoctor: false,
  };

  const [authState, authDispatch] = useReducer(authReducer, {
    isUserLoggedIn,
    token: savedToken,
    isDoctor,
  });

  const logout = async () => {
    try {
      localStorage?.removeItem("login");
      authDispatch({ type: "LOGOUT" });
      navigate("/");
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    const { isUserLoggedIn, token, isDoctor } =
      JSON.parse(localStorage?.getItem("login")) || {};
    isUserLoggedIn &&
      authDispatch({ type: "LOGIN", payload: { token, isDoctor } });
  }, []);

  return (
    <AuthContext.Provider value={{ authState, authDispatch, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}

export function authReducer(state, action) {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        isUserLoggedIn: true,
        token: action.payload.token,
        isDoctor: action.payload.isDoctor,
      };
    case "LOGOUT":
      return { ...state, isUserLoggedIn: false, token: null, isDoctor: false };
    default:
      return state;
  }
}
