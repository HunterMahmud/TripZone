import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";
import auth from "./../firebase/firebase.config";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import useAxiosPublic from "./../hooks/useAxiosPublic";

export const AuthContext = createContext(null);

const AuthProvider: React.FC = ({ children }) => {
  const axiosPublic = useAxiosPublic();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const googleProvider = new GoogleAuthProvider();
  const emailPasswordRegister = (email: string, password: string) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const emailPasswordLogIn = (email: string, password: string) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const googleLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  const userUpdateProfile = (displayName: string, photoURL: string) => {
    setLoading(true);
    return updateProfile(auth.currentUser, {
      displayName,
      photoURL,
    });
  };
  const logOut = async () => {
    setLoading(true);
    return signOut(auth);
  };
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        //get token and set to local storage
        // console.log(currentUser);
        const userInfo = { email: currentUser?.email };
        // console.log(userInfo);
        axiosPublic.post("/jwt", userInfo).then((res) => {
          if (res?.data?.token) {
            // console.log(res.data.token);
            localStorage.setItem("access-token", res?.data?.token);
            setUser(currentUser);
            setLoading(false);
          }
        });
      } else {
        // remove token from local storage
        localStorage.removeItem("access-token");
        setUser(null);

        setLoading(false);
      }
    });
    return () => unSubscribe();
  }, [axiosPublic]);
  const authInfo = {
    emailPasswordRegister,
    emailPasswordLogIn,
    googleLogin,
    setLoading,
    loading,
    user,
    userUpdateProfile,
    setUser,
    logOut,
  };
  return (
    <div>
      <AuthContext.Provider value={authInfo}>
        {children} <ToastContainer />
      </AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;
