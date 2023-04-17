import axios from "axios"
import { useMutation, useQueries, useQuery } from "react-query"
import { queryClient } from "../../../.."


export const useGetOrdersByAllUsers = ()=>{
	return useQuery('getAllOrdersOfAllUser', {
		queryFn: ()=>{
			return axios({
				url: '/order/fetch-all-user-order-detail'
			})
		},
		select: (data)=> {
			return data?.data?.data?.map(({orderSummary, username})=>{
				const orders = orderSummary?.map((order)=>{
					return {
						...order,
						username: username
					}
				})

				return orders;
			}).flat();

		}
	})
}

export const useChangeOrderToCompleted = ()=> {
	return useMutation('changeOrderToCompleted', 
	{
		mutationFn: (orderId)=>{
			return axios({
				method: "Patch",
				url: `/order/change-to-completed/${orderId}`
			})
		},
		onSuccess: ()=>{
			queryClient.invalidateQueries({
				queryKey: ['getAllOrdersOfAllUser']
			})
		}
	})
}
