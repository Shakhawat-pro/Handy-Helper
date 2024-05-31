import { useContext } from "react";
import { AuthContext } from "../Context/AuthProvider";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const axiosSecure = axios.create({
    baseURL: 'https://handy-helper-server.vercel.app',
    withCredentials: true
})

const useAxiosSecure = () => {
    const { logOut } = useContext(AuthContext)
    const navigate = useNavigate()
    axiosSecure.interceptors.response.use(res => {
        return res
    }, error => {
        console.log('error trucked in the interceptor', error.response);
        if (error.response.status === 401 || error.response.status === 403) {
            logOut()
                .then(() => {
                    navigate('/login')
                })
                .catch(error => console.log(error))
        }
    })
    return axiosSecure

};

export default useAxiosSecure;