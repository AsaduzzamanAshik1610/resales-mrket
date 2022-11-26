import React, { createContext, useEffect, useState } from 'react';
import app from '../../firebase/firebase.config';
import {createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup} from 'firebase/auth'
export const Authconst = createContext();
const auth = getAuth(app)
const Authprovider = ({children}) => {
     const [user, setUser] = useState(null);
     const [loading, setLoading] = useState(true);
     const googleProvider = new GoogleAuthProvider();
     const providerLogin = (provider)=>{
        return signInWithPopup(auth, provider); 
      }
     const createUser = (email, password)=>{
        return createUserWithEmailAndPassword(auth, email, password)
     }
     const signIn = (email, password)=>{
        return signInWithEmailAndPassword(auth, email, password)
     }
     const signInWithgoogle = ()=>{
        return signInWithPopup(auth, googleProvider)
     }

     useEffect(()=>{
        const unsubcribe = onAuthStateChanged(auth, currentUser=>{
            console.log(currentUser)
            setUser(currentUser)
            setLoading(false)
        })
        return()=>{
            return unsubcribe();
        }
     },[])
     const authInfo={
        user,
        loading,
        providerLogin,
        createUser,
        signIn,
        signInWithgoogle,
     }
    return (
        <div>
          <Authconst.Provider value={authInfo}>
              {children}
            </Authconst.Provider>  
        </div>
    );
};

export default Authprovider;