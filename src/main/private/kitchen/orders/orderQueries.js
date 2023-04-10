import axios from "axios"
import { useMutation, useQueries, useQuery } from "react-query"


export const useGetOrders = ()=>{
	return useQuery('getOrders', ()=>{
		return axios({
			url: '/api/order/fetch-all-user-order'
		})
	})
}

export const useChangeOrderToCompleted = ()=> {
	return useMutation('changeOrderToCompleted', (orderId)=>{
		return axios({
			url: `/api/order/change-to-completed/${orderId}`
		})
	})
}
