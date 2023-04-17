import axios from "axios"
import { useMutation, useQuery } from "react-query"

export const useGetSpecificItem = ()=>{

	return useMutation('get-specific-item', {
		mutationFn: (id)=> {
			return axios({
				url: `food-item/fetch-specific/${id}`
			})
		}
	})
}