import { createContext, useState } from "react";
import React from "react";
export const AppContext = createContext();

export const AppContextProvider = (props) => {
    const { children } = props;
    const [isLogin, setisLogin] = useState(false);
    const [dataUser, setDataUser] = useState({});
    return (
        <AppContext.Provider value={{ isLogin, setisLogin, dataUser, setDataUser }}>
            {children}
        </AppContext.Provider>
    )
}