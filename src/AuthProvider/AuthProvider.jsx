import { createContext, useEffect, useState } from "react";
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { app } from "../firebase/firebase.config";



export const AuthContext = createContext(null)
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider() ;

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(null)

      // user create 
      const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

     // sign IN 
     const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }


    // google signIN
    const googleSignIn = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider)
    }


    // github signIN
    const githubSignIn = () => {
        setLoading(true);
        return signInWithPopup(auth, githubProvider)
    }


     // logout 
     const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }


     // updateProfile 
     const UserUpdateProfile = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        })
    }


    useEffect(() => {

        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            console.log(currentUser);

           

            setLoading(false)
        });

        return () => {
            return unsubscribe();
        }

    }, [])


    const AuthInfo = {
        user, loading, createUser, signIn, logOut, UserUpdateProfile, githubSignIn, googleSignIn,auth
    }



    return (
        <AuthContext.Provider value={AuthInfo}>
              {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;