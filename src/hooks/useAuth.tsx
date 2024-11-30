import { AuthContext } from "../AuthProvider/AuthProvider";
import { useContext } from "react";



// Create the custom hook for authContext
const useAuth = () => {
    const context = useContext(AuthContext);
  
    if (!context) {
      throw new Error("useAuth must be used within an AuthProvider");
    }
  
    return context;
};

export default useAuth;
