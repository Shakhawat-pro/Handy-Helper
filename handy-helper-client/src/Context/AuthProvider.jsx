import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import PropTypes from 'prop-types';
import { createContext, useEffect, useState } from "react";
import auth from '../firebase/firebase.config';
import axios from 'axios';

export const AuthContext = createContext()

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const googleProvider = new GoogleAuthProvider()


    const signInWithGoogle = () =>{
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    const createUser = (email, password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signInUser = (email, password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser =>{
            const userEmail = currentUser?.email || user?.email
            const loggedUser = {email: userEmail}
            console.log("Current User: ",currentUser);
            setUser(currentUser)
            setLoading(false)

            if (currentUser) {
                axios.post('https://handy-helper-server.vercel.app/jwt', loggedUser, {withCredentials: true})
                .then(res => {
                    console.log("token res",res.data);
                })
            }
            else{
                axios.post('https://handy-helper-server.vercel.app/logout', loggedUser, {withCredentials: true})
            }
        })
        return () =>{
            unSubscribe()
        }
        
    }, [])

    const logOut = () =>{
        setLoading(true)
        return signOut(auth)
    }

    const authInfo = {user, loading, createUser, signInUser, logOut, signInWithGoogle}

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>     
    );
};

export default AuthProvider;

AuthProvider.propTypes = {
    children: PropTypes.node
}