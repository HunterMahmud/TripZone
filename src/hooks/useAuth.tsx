import { AuthContext } from '../AuthProvider/AuthProvider';
import { useContext } from 'react';



const useAuth = () => {
    const info = useContext(AuthContext);
    return info;
};

export default useAuth;