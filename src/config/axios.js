import axios from 'axios'
import { END_POINT } from './env'
import { toast } from 'react-toastify';
import { getToken } from '../utils/auth/auth';
import { capitalizeFirstLetter } from '../utils/utils';

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
		
		if(err?.response?.data?.message){
			const message = capitalizeFirstLetter(err?.response?.data?.message);
			toast.error(message)
		}else{
			toast.error(err.message);
		}
		throw err;
	})