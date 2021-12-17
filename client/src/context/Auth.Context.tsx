import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios';
import { getLoggedInStatus } from '../data/API';

interface IAuthContext {
  children: JSX.Element;
}

export const AuthContext = createContext<{
  loggedIn: boolean | undefined;
  getLoggedIn: () => Promise<void>;
} | null>(null);

export const AuthContextProvider = ({ children }: IAuthContext): JSX.Element => {
  const [loggedIn, setLoggedIn] = useState<boolean | undefined>(undefined);

  const getLoggedIn = async () => {
    const loggedIn = await getLoggedInStatus();
    setLoggedIn(loggedIn.value);
  };
  useEffect(() => {
    getLoggedIn();
  }, []);

  return <AuthContext.Provider value={{ loggedIn, getLoggedIn }}>{children}</AuthContext.Provider>;
};
