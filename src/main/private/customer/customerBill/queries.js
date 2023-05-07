import axios from "axios";
import { useQuery } from "react-query";

export const useGetCustomerBill = () => {
	return useQuery('get-customer-bill',{
		queryFn: () => {
			return axios({
				'url': "/bill/fetch-bill-specific-user",
			})
		},
		select: (res) => {
			const data = res?.data?.data
			const orders = data
				?.summary
				?.map((summary) => summary.orderSummary)
				?.flat()
				?.filter((order) => !order.isPaid)

			return {orders, total:res?.data?.data?.total }
		}
	})
}