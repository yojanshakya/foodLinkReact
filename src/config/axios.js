import axios from 'axios'
import { END_POINT } from './env'
import { toast } from 'react-toastify';
import { getToken } from '../utils/auth/auth';

axios.defaults.baseURL = END_POINT

axios.interceptors.request.use(
	(config)=>{
		if(getToken()){
			config.headers.Authorization = `Bearer ${getToken()}`
		}
		return config
	}
)

axios.interceptors.response.use(
	(response) => {
		return response;
	},(err) => {
		toast.error(err.message);
		return err;
	})