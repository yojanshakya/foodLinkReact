import axios from 'axios'
import { END_POINT } from './env'
import { toast } from 'react-toastify';

axios.defaults.baseURL = END_POINT

axios.interceptors.response.use(
	(response) => {
		return response;
	},(err) => {
		toast.error(err.message);
		return err;
	})