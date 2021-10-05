import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { login, register, registerPromise } from "../../http";


const AuthContext = React.createContext();

const currentUser = JSON.parse(localStorage.getItem("currentUser"));


export function AuthProvider({ children }) {
  // 2.1) Creamos Estados
  // En caso de que trabaje con roles deberia decodificar el token para obtener el role inicial
  // const [role, setRole] = useState(decodeTokenAndGetRole(currentUser.token));
  const [isAuthenticated, setIsAuthenticated] = useState(currentUser !== null);
  let [user, setUser] = useState(currentUser && currentUser.user);
  let [promise, setPromise] = useState(currentUser && currentUser.user);

  // const [ type, setType ] = useState();
  
  // if (user) {
  //   user = user[0];
  // };

  // if (promise) {
  //   promise = promise[0];
  // };


  const history = useHistory();

  // 2.2) Definiremos los métodos para modificar el estado
  // Login => Cambiaré a true mi estado
  // Si trabajo con roles puedo establecer el role a través de la decodificación del token
  const signIn = async ({ email, password }) => {
    try {
      const {
        data: { token, user }
      } = await login( email, password );
      setUser(user);
      setIsAuthenticated(true);
      // Si uso roles => decodificar el token para sacar el role
      // setRole(role);
      if (token) {
        history.push("/dashboard");
      }
    } catch (error) {
      return Promise.reject(error);
    }
  };

  // Register => Cambiaré a true mi estado
  const signUp = async ({ user_name, surname1, surname2, club, gender, postal_code, phone, email, password, user_type}) => {
    try {
      const {
        data: { token, user }
      } = await register({ user_name, surname1, surname2, club, gender, postal_code, phone, email, password, user_type });
      setUser(user[0]);
      setIsAuthenticated(true);
      if (token && user_type === "Padre") {
        history.push("/file-card");
      } if (token && user_type === "Ojeador") {
        history.push("/payment");
      } if (token && user_type === "Asistente") {
      history.push("/dashboard");
      } 
    } catch (error) {
      return Promise.reject(error);
    }
  };

  const signUpPromise = async ({ avatar_url, name, surname1, surname2, gender, comunity, province, date_birth, team, height, weight, demarcation, best_leg }) => {
    try {
      const {
        data: { token, promise }
      } = await registerPromise({ avatar_url, name, surname1, surname2, gender, comunity, province, date_birth, team, height, weight, demarcation, best_leg });
      console.log("TOKEN", token);
      console.log("PROMISE",promise);
      setPromise(promise);
      setIsAuthenticated(true);
      if (token) {
        history.push("/dashboard");
      }
    } catch (error) {
      return Promise.reject(error);
    }
  };

  // const signUpPromise = async (formData, config) => {
  //   try {
  //     const {
  //       data: { token, promise }
  //     } = await registerPromise(formData, config);
  //     setPromise(promise);
  //     setIsAuthenticated(true);
  //     if (token) {
  //       history.push("/dashboard");
  //     }
  //   } catch (error) {
  //     return Promise.reject(error);
  //   }
  // };

  // Logout => Cambiaré a false mi estado

  const logOut = async () => {
    localStorage.clear("token");
    history.push("/");
  };

  // 2.3) Devolvemos el Context
  // Si usara roles puedo devolver el role actual del usuario en lugar de isAuthenticated
  // return (
  //   <AuthContext.Provider
  //     value={{ role, setRole, signIn, user }}
  //   >
  //     {children}
  //   </AuthContext.Provider>
  // );
  return (
    <AuthContext.Provider
      value={{ isAuthenticated, setIsAuthenticated, signIn, user, signUp, signUpPromise, promise, logOut }}


    >
      {children}
    </AuthContext.Provider>
  );
}

// 3) Crear el custom hook
// Es lo que usaré en los componentes para acceder al value del contexto
export function useAuth() {
  const context = useContext(AuthContext);
  return context;
}
