import React, { createContext, useState } from 'react';
import app from '../../firebase/firebase.config';
import {createUserWithEmailAndPassword, getAuth} from 'firebase/auth'
export const Authconst = createContext();
const auth = getAuth(app)
const Authprovider = ({children}) => {
     const [user, setUser] = useState(null);
     const createUser = (email, password)=>{
        return createUserWithEmailAndPassword(auth, email, password)
     }
     const authInfo={
        user,
        createUser
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