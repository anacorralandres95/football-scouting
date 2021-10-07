import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { login, register, registerPromise } from "../../http";

const AuthContext = React.createContext();

const currentUser = JSON.parse(localStorage.getItem("currentUser"));

export function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(currentUser !== null);
  let [user, setUser] = useState(currentUser && currentUser.user);
  let [promise, setPromise] = useState(currentUser && currentUser.user);

  const history = useHistory();

  const signIn = async ({ email, password }) => {
    try {
      const {
        data: { token, user },
      } = await login(email, password);
      setUser(user);
      setIsAuthenticated(true);

      if (token) {
        history.push("/dashboard");
      }
    } catch (error) {
      return Promise.reject(error);
    }
  };

  const signUp = async ({
    user_name,
    surname1,
    surname2,
    club,
    gender,
    postal_code,
    phone,
    email,
    password,
    user_type,
  }) => {
    try {
      const {
        data: { token, user },
      } = await register({
        user_name,
        surname1,
        surname2,
        club,
        gender,
        postal_code,
        phone,
        email,
        password,
        user_type,
      });
      setUser(user[0]);
      setIsAuthenticated(true);
      if (token && user_type === "Padre") {
        history.push("/file-card");
      }
      if (token && user_type === "Ojeador") {
        history.push("/payment");
      }
      if (token && user_type === "Asistente") {
        history.push("/dashboard");
      }
    } catch (error) {
      return Promise.reject(error);
    }
  };

  const signUpPromise = async ({
    avatar_url,
    name,
    surname1,
    surname2,
    gender,
    comunity,
    province,
    date_birth,
    team,
    height,
    weight,
    demarcation,
    best_leg,
  }) => {
    try {
      const {
        data: { token, promise },
      } = await registerPromise({
        avatar_url,
        name,
        surname1,
        surname2,
        gender,
        comunity,
        province,
        date_birth,
        team,
        height,
        weight,
        demarcation,
        best_leg,
      });

      setPromise(promise);
      setIsAuthenticated(true);
      if (token) {
        history.push("/dashboard");
      }
    } catch (error) {
      return Promise.reject(error);
    }
  };

  const logOut = async () => {
    localStorage.clear("token");
    history.push("/");
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        setIsAuthenticated,
        signIn,
        user,
        signUp,
        signUpPromise,
        promise,
        logOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  return context;
}
