import React, { createContext, useEffect, useState } from 'react';

import  { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';

import app from '../Firebase/Firebase.config';



export const AuthContext= createContext()
const auth= getAuth(app)


const UserContext = ({children}) => {
   const [user , setUser]= useState(null)
   const [loading, setLoading] = useState(true)

 const providerGoogle = (provider) => {
    setLoading(true);
    return signInWithPopup(auth , provider);
 }
 const createUser= (email, password) =>{
    
    setLoading(true);
    return createUserWithEmailAndPassword(auth , email, password);
}
const signIn= (email , password)=>{
    setLoading(true);
    return signInWithEmailAndPassword(auth , email, password);
}

const logout = ()=>{
    setLoading(true);
    return signOut(auth)
}

 useEffect( () => {
  const unsubscrive=  onAuthStateChanged(auth, (currentUser)=>{
    console.log(currentUser);
    setUser(currentUser)
    setLoading(false);
   });
  
  return ()=> {
    unsubscrive();
  }

 }, [])

    



    const AuthInfo= {user , logout, createUser ,signIn, loading,providerGoogle}
    return (
       <AuthContext.Provider value={AuthInfo}>
        {children}
       </AuthContext.Provider>
    );
};

export default UserContext;