import axios from "axios"
import { useMutation, useQuery } from "react-query"
import { queryClient } from "../../../.."

export const useDeleteTable = ()=>{
	return useMutation({
		onSuccess: ()=>{
			queryClient.invalidateQueries(["useGetAllTableWithBookingTime"])
		},
		mutationFn: (id)=>{
			return axios({
				method:"delete",
				url: `/table-module/${id}`
			})
		}
	})
}

export const useCreateTable = ()=>{
	return useMutation({
		onSuccess: ()=> {
			queryClient.invalidateQueries(["useGetAllTableWithBookingTime"])
		},
		mutationFn: (name)=>{
			return axios({
				method: "post",
				url: '/table-module',
				data: {
					code:  name
				}
			})
		}
	})
}