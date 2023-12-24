import React, { useEffect } from 'react'
import { createContext } from 'react';
import { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../firebase/firebase.config';
import { onAuthStateChanged } from 'firebase/auth';
import { useContext } from 'react';
import { GoogleAuthProvider } from "firebase/auth";
//  import { AuthContext } from '../contacts/AuthProvider';
import { signInWithPopup } from "firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth";

export const AuthContext = createContext();
const auth =getAuth(app);
const googleProvider = new GoogleAuthProvider();


const AuthProvider = ({children}) => {
    const[user, setUser] = useState(null);
    const[loading, setLoading] = useState(true);

    const createUser=(email, password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }


//     const createUser = (email, password) => {    
    // const signUpWithGmail = () => {
    //     return signIn
    // }

    const loginwithGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider)
    }

    const login = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut =()=>{
        return signOut(auth);
    }


   useEffect(() => {
       const unsubscribe = onAuthStateChanged(auth, currentuser => {
        //    console.log(user);
            setUser(currentuser)
           setLoading(false);
       });
       return ()=>{
        return unsubscribe;
       }
      
   }, []); 



const authInfo={
    user,
    createUser,
    loginwithGoogle,
    loading,
    login,
    logOut
}

  return (
    <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider