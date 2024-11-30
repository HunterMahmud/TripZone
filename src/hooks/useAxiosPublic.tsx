
import axios  from 'axios';

const axiosPublic = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL,
    // baseURL: 'https://trip-zone-server.vercel.app',
})
const useAxiosPublic = () => {
    return axiosPublic;
};

export default useAxiosPublic;