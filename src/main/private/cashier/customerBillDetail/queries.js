import axios from "axios"
import { useQuery } from "react-query"


export const useGetCustomerBill = ()=>{
	return useQuery('get-customer-bill', ()=>{
		return axios({
			'url': "/bill/fetch-bill-specific-user",
		})
	})
}