import React, { createContext, useState, useContext } from "react";

const CountContext = createContext();

export default function CountProvider({ children }) {
  const [userId, setUserId] = useState();
  const [token,setToken] = useState();
  const [startDateTool,setStartDateTool] = useState();
  const [endDateTool,setEndDateTool] = useState();

  return (
    <CountContext.Provider
      value={{
        userId,
        setUserId,
        token,
        setToken,
        startDateTool,
        setStartDateTool,
        endDateTool,
        setEndDateTool
      }}
    >
      {children}
    </CountContext.Provider>
  );
}

export function useLogin() {
  const context = useContext(CountContext);
  if (!context) throw new Error("useCount must be used within a CountProvider");
  const { userId, setUserId, token, setToken, startDateTool, setStartDateTool, endDateTool, setEndDateTool } = context;
  return { userId, setUserId, token, setToken, startDateTool, setStartDateTool, endDateTool, setEndDateTool};
}