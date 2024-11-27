import { useQuery } from '@tanstack/react-query';
import useAuth from './useAuth';
import useAxiosSecure from './useAxiosSecure';

const useRole = () => {
    const axiosSecure = useAxiosSecure();
    const {user} = useAuth();
    const {data: userRole, isLoading:roleLoading} = useQuery({
        queryKey: ['userRole', user?.email],
        enabled: !!user?.email,
        queryFn: async()=>{
            const {data} = await axiosSecure(`/user/role/${user?.email}`);
            return data;
        }
    })
    return [userRole,roleLoading ];
}

export default useRole;