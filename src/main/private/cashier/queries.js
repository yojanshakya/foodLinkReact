import axios from "axios"
import { useQuery } from "react-query"

export const useGetAllUnpaidBills = ()=>{
	
	return useQuery("get-all-unpaid-bills", {
		queryFn: ()=>{
			return axios({
				url: "/bill/fetch-bill-all-user-unpaid",
				method: "GET",
			})
		},
		select: (res)=>{
			const data = res?.data?.data
			const bills = data?.map((item)=> {
				const orders = item
					?.totalOrderSummary
					?.flat()
					?.filter((order) => !order.isPaid)

				return {orders, total : item.totalPrice, userData: item.userData};
			})
			
			console.log({bills})
			return data
		}
	})
}


export const useGetPaidBillList = ()=>{
	return useQuery("paidbilllist", {
		queryFn: ()=> axios({
			url: "/bill",
			method:"get"
		}),
		select: (data)=> data?.data?.data?.map((bill)=> bill.billJson)?.filter((item)=> !!item.userData) || []
	})
}