import React, { useReducer, useEffect, useContext } from "react";
import Reducer from "./Reducer";
const API = "https://example-data.draftbit.com/books?_limit=51";
const AppContext = React.createContext();
const initialState = {
  services: [],
};
const Context = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, initialState);

  const getServices = async (url) => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      dispatch({ type: "GET_SERVICES", payload: data });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getServices(API);
  }, []);

  return <AppContext.Provider value={{ ...state }}>{children}</AppContext.Provider>;
};
const useGlobalContext = () => {
  return useContext(AppContext);
};
export default Context;
export { AppContext, useGlobalContext };

