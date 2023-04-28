import React, {createContext, useContext} from "react";

export const cont = createContext();

export const useAuth = () => {
    const context= useContext(cont)
    if (!context) throw new Error ("There is no auth provider")
    return context

}

export function AuthProvider({ children }){
    const user= {
        login: true,
    };

    return <cont.Provider value={{ user }}>{children}</cont.Provider>;
}