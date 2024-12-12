
import React, { useEffect, useState } from 'react';
import AuthContext from './AuthContext';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import auth from './../firebase/firebase.init';

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const creatUser = (email, password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);

    }

    const singInUser = (email, password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

const signOutUser = () => {
    setLoading(true);
    return signOut(auth)
}

    useEffect(() =>{
      const unsubScribe =  onAuthStateChanged(auth, currentUser =>{
        console.log('state captured', currentUser)
            setUser(currentUser);
            setLoading(false);
        })

        return () =>{
            unsubScribe();
        }
    }, [])



const authInfo = {
    user,
    loading,
    creatUser,
    singInUser,
    signOutUser
} 

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
