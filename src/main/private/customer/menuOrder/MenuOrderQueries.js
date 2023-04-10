import axios from "axios";
import { useMutation,useQuery } from "react-query";

export function useCreateOrder() {
	return useMutation('createOrderByUser',(orders) => {
		/**
		 * type of order is  
		   {
					"order": [
						{
							"quantity": 0,
							"foodId": "string"
						}
					]
		  	}
		 */

		return axios({
			method: "post",
			url: '/api/order/create'
		})
	})
}