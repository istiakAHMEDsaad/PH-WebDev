import { useState } from "react";
import AuthContext from "./AuthContext";
import PropTypes from "prop-types";
import { createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import auth from "../utilities/firebase.init";
import { useEffect } from "react";



const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    
    // create user with email & password function
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false);
        });

        return () => {
            unSubscribe();
        }
    }, [])
    
    const authInfo = {
        user, 
        loading,
        createUser,
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.object.isRequired,
}

export default AuthProvider;