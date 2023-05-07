import axios from "axios"
import { useMutation, useQuery } from "react-query"
import { useNavigate } from "react-router-dom"
import {toast} from 'react-toastify'


export const usePayBill = (billSummary)=>{
	const navigate = useNavigate();

	return useMutation("usePayBill", {
		mutationFn: (customerUserId)=>{
			return axios({
				url: "/bill/change-to-paid",
				method: "post",
				data: {
					customerUserId
				}
			}).then((res)=>{
				return axios({
					url:"/bill",
					method:"post",
					data: {
						billJson: billSummary
					}
				})
			})
		},
		onSuccess: (data)=>{
			
			toast.success("Successfully confirmed bill paid status");
			navigate('/cashier/bill-list-unpaid')
		}
	})
}