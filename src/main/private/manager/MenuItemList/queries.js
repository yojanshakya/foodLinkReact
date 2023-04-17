import axios from "axios";
import { useMutation, useQuery } from "react-query"
import { queryClient } from "../../../..";

export const useDeleteMenuItem = ()=> {

	return useMutation('deleteMenuItem', {
		mutationFn: (id)=> axios({
			url: `/food-item/delete-specific-food/${id}`,
			method: "delete"
		}),
		onSuccess: ()=>{
			queryClient.invalidateQueries({
				queryKey: ["customer-get-all-menu-items"]
			});

			
		}
	});
}