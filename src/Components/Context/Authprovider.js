import React, { createContext, useEffect, useState } from 'react';
import app from '../../firebase/firebase.config';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, updateCurrentUser} from 'firebase/auth'
export const Authconst = createContext();
const auth = getAuth(app)
const Authprovider = ({children}) => {
     const [user, setUser] = useState(null);
     const [loading, setLoading] = useState(true);
     const createUser = (email, password)=>{
        return createUserWithEmailAndPassword(auth, email, password)
     }
     const signIn = (email, password)=>{
        return signInWithEmailAndPassword(auth, email, password)
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
        createUser,
        signIn,
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