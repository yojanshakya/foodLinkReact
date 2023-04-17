import axios from "axios";
import { useMutation } from "react-query";

export function useCreateOrder(onSuccess) {
	return useMutation('createOrderByUser',{
		mutationFn: (orders) => {
			return axios({
				method: "post",
				url: '/order/create',
				data:orders,
			})
		},
		onSuccess: onSuccess,
	})
}