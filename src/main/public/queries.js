import axios from "axios"
import { useMutation, useQuery } from "react-query"

export const useLoginQuery = ()=>{

	return useMutation('login', ({username, password})=>
	axios({
		method:"GET",
		url: "/login"
	}))
}