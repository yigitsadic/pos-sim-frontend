import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

const initialState = {
  name: 'lorem'
}

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  return (
    <GlobalContext.Provider
      value={{
        lorem: 'ipsum'
      }}
    >
      {children}
    </GlobalContext.Provider>
  )
};
