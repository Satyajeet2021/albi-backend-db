import axios from 'axios'; 
import store from '../store';
import { authStatus } from '../action/Status';

const token = window.localStorage.getItem('token');

const axiosIntance = axios.create({
    baseURL: "https://appapi.albionline.com/api",
    // baseURL: "http://localhost:5000/api/",
    
    //baseURL: "https://api.albionline.com/api",
     
});

axiosIntance.interceptors.request.use((req) => {
    const { auth } = store.getState();
    // if(auth.token){
    //     req.headers.Authorization = `Bearer ${auth.token}`;
    // }
    return req;
})

axiosIntance.interceptors.response.use((res) => {
    return res;
}, (error) => {
    console.log(error.response);
    const status = error.response ? error.response.status : 500;
    if(status && status === 500){
        localStorage.clear();
        store.dispatch({ type: authStatus.LOGOUT_SUCCESS });
    }
    return Promise.reject(error);
})

export default axiosIntance;