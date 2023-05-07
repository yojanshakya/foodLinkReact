import axios from "axios"
import { useMutation, useQueries, useQuery } from "react-query"
import { queryClient } from "../../../.."
import { toast } from "react-toastify"


export const useGetOrdersByAllUsers = ()=>{
	return useQuery('getAllOrdersOfAllUser', {
		queryFn: ()=>{
			return axios({
				url: '/order/fetch-all-user-order-detail'
			})
		},
		select: (res)=> {
			const data = res?.data?.data || []

			return data?.map((item)=> {
				item.orderSummary?.forEach((order)=> {
					order.username = item.username
				})	
				return item.orderSummary
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
				queryKey: ['fetch-all-user-orderssss']
			})
			toast.success("Successfully marked to completed.")
		}
	})
}
