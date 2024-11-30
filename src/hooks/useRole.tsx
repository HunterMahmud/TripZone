import { useQuery } from '@tanstack/react-query';
import useAuth from './useAuth';
import useAxiosSecure from './useAxiosSecure';

const useRole = () => {
    const axiosSecure = useAxiosSecure();
    const {user} = useAuth();
    const {data: role, isLoading:roleLoading} = useQuery({
        queryKey: ['role', user?.email],
        enabled: !!user?.email,
        queryFn: async()=>{
            const {data} = await axiosSecure(`/user/${user?.email}`);
            return data;
        }
    })
    return [role,roleLoading ];
}

export default useRole;