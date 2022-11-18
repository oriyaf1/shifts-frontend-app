import React, { createContext, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { sleep } from "../services/utiles";


export type UserInfo = {
  role: string,
  firstName: string,
  lastName: string,
}

export type Credentials = {
  username: string,
  password: string,
}

type UserService = {
  userInfo: UserInfo;
  setUserInfo: React.Dispatch<React.SetStateAction<UserInfo>>;
  isAuth: boolean;
  login: (credentials: Credentials) => Promise<UserInfo>;
  logout: () => void;
}


type UserContextProviderProps = {
  children: React.ReactNode | undefined,
}
export const UserContext: React.Context<UserService> = createContext({} as UserService);

export const UserContextProvider = ({ children }: UserContextProviderProps) => {
  const [userInfo, setUserInfo] = useState<UserInfo>({ role: 'manager' } as UserInfo);
  const [isAuth, setIsAuth] = useState<boolean>(true);

  const navigate = useNavigate();

  const login: (c: Credentials) => Promise<UserInfo> = async (credentials: Credentials) => {
    await sleep(1500);
    setIsAuth(true);
    setUserInfo({
      role: credentials.username,
      firstName: credentials.username,
      lastName: credentials.username,
    })
    navigate('');
    return Promise.resolve(userInfo);
  };

  const logout = async () => {
    setIsAuth(false);
    setUserInfo({
      role: '',
      firstName: '',
      lastName: '',
    });
    navigate('/login');
    return Promise.resolve(userInfo);


    // fetch("/logout").then((res) => {
    //   setIsAuth(false);
    //   setUserInfo(null);
    // });
  };

  const userService: UserService = {
    userInfo: userInfo,
    setUserInfo,
    isAuth,
    login,
    logout,
  };

  return (

    <UserContext.Provider value={userService}> {children} </UserContext.Provider>
  );
};


