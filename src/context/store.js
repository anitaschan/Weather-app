import React, { useReducer } from "react";
import reducer from "./reducer";

export const Context = React.createContext();

const initialState = {
  data: {},
  showSearch: false,
};

const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <Context.Provider value={[state, dispatch]}>{children}</Context.Provider>
  );
};

export default Provider;
