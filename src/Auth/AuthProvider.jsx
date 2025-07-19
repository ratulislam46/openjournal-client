import React, { useEffect, useState } from 'react';
import { createContext } from 'react';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { auth } from '../firebase/firebase.config'
import { GoogleAuthProvider }  from "firebase/auth";

export const AuthContext = createContext()

const AuthProvider = ({ children }) => {

    const provider = new GoogleAuthProvider();

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)

    const RegisterWithFirebase = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const SignIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const SignOutWithFireBase = () => {
        return signOut(auth)
    }

    const GoogleLogin = () => {
        return signInWithPopup(auth, provider)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currenUser) => {
            setUser(currenUser)
            // console.log('current user details', currenUser);
            setLoading(false)
        })
        return () => {
            unsubscribe()
        }
    }, [])

    const authInfo = {
        SignIn,
        RegisterWithFirebase,
        SignOutWithFireBase,
        GoogleLogin,
        user,
        setUser,
        loading,
        setLoading
    }

    return (
        <AuthContext value={authInfo} >
            {children}
        </AuthContext>
    );
};

export default AuthProvider;