import axios from "axios"
import { useMutation, useQuery } from "react-query"
import { toast } from "react-toastify"

export const useGetSpecificItem = ()=>{

	return useMutation('get-specific-item', {
		mutationFn: (id)=> {
			return axios({
				url: `food-item/fetch-specific/${id}`
			})
		}
	})
}


export const useGetAllSubCategories = ()=> {
	return useQuery('get-all-sub-category', {
		queryFn: ()=> {
			return axios ({
				url: `sub-category/fetch-all`
			})
		},
		select: (data)=> data?.data?.data
	})
}

export const useCreateFood = (onSuccess)=>{
	return useMutation('create-food', {
		mutationFn: (data)=>{
			return axios({
				url: '/food-item/create',
				method: "POST",
				data
			}).then((res)=>{
				if(!(res?.data.statusCode >= 200 && res?.data.statusCode <300))
				{
					debugger;
					res?.data?.message?.forEach((msg)=> {
						toast.error(msg)
					})
					throw new Error(res)
				}	
				return res
			})
		},
		onSuccess,
	})
}


export const useUpdateSpecificFood = ( onSuccess)=>{
	return useMutation('update-food', {
		mutationFn: (data)=>{
			const foodId = data.get("foodId");
			delete data.delete("foodId");
			return axios({
				url: `/food-item/update-specific-food/${foodId}`,
				method: "patch",
				data
			}).then((res)=>{
				if(!(res?.data.statusCode >= 200 && res?.data.statusCode <300))
				{
					res?.data?.message?.forEach((msg)=> {
						toast.error(msg)
					})
					throw new Error(res)
				}	
				return res
			})
		},
		onSuccess,
	})
}