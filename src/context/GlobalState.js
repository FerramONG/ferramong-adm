// import React from 'react'; 

// type IUserState = {
//     currentUser?: object;
// };

// type ICurrentUserContext = [IUserState, React.Dispatch<React.SetStateAction<IUserState>>];

// const GlobalState = React.createContext<ICurrentUserContext>([{}, () => null]);

// //const GlobalState = React.createContext([{}, () => {}]); 
// export default GlobalState;

import React, { createContext, useState, useContext } from "react";

const CountContext = createContext();

export default function CountProvider({ children }) {
  const [userId, setUserId] = useState();
  const [token,setToken] = useState();

  return (
    <CountContext.Provider
      value={{
        userId,
        setUserId,
        token,
        setToken
      }}
    >
      {children}
    </CountContext.Provider>
  );
}

export function useLogin() {
  const context = useContext(CountContext);
  if (!context) throw new Error("useCount must be used within a CountProvider");
  const { userId, setUserId, token, setToken } = context;
  return { userId, setUserId, token, setToken};
}