import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
  User,
} from "firebase/auth";
import { useEffect, useState, createContext } from "react";
import auth from "./../firebase/firebase.config";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useAxiosPublic from "./../hooks/useAxiosPublic";

interface AuthContextType {
  emailPasswordRegister: (email: string, password: string) => Promise<any>;
  emailPasswordLogIn: (email: string, password: string) => Promise<any>;
  googleLogin: () => Promise<any>;
  setLoading: (loading: boolean) => void;
  loading: boolean;
  user: User | null;
  userUpdateProfile: (displayName: string, photoURL: string) => Promise<void>;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
  logOut: () => Promise<void>;
}

interface AuthProviderProps {
  children: React.ReactNode;
}

export const AuthContext = createContext<AuthContextType | null>(null);

const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const axiosPublic = useAxiosPublic();
  const [user, setUser] = useState<User | null>(null);
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
    if (auth.currentUser) {
      return updateProfile(auth.currentUser, {
        displayName,
        photoURL,
      });
    } else {
      return Promise.reject(new Error("No current user is logged in"));
    }
  };

  const logOut = async () => {
    setLoading(true);
    return signOut(auth);
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        const userInfo = { email: currentUser?.email };
        axiosPublic.post("/jwt", userInfo).then((res) => {
          if (res?.data?.token) {
            localStorage.setItem("access-token", res?.data?.token);
            setUser(currentUser);
            setLoading(false);
          }
        });
      } else {
        localStorage.removeItem("access-token");
        setUser(null);
        setLoading(false);
      }
    });
    return () => unSubscribe();
  }, [axiosPublic]);

  const authInfo: AuthContextType = {
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
        {children}
        <ToastContainer />
      </AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;
