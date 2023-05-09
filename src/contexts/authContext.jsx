import React, {createContext, useContext} from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";

export const cont = createContext();

export const useAuth = () => {
    const context= useContext(cont)
    if (!context) throw new Error ("There is no auth provider")
    return context

}

export function AuthProvider({ children }){
    const singupfunction = (email, password) => 
    createUserWithEmailAndPassword(auth, email, password);

    const loginFunction = (email, password) => 
    signInWithEmailAndPassword(auth, email, password);
    

    return <cont.Provider value={{ singupfunction, loginFunction }}>{children}</cont.Provider>;
}