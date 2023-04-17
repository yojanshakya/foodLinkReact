import axios from "axios";
import { useQuery } from "react-query";

export function useGetAllMenuItem() {
	return useQuery('customer-get-all-menu-items',
		{
			queryFn: () =>
				axios({
					url: '/food-item/fetch-all'
				}),
			select: (res) => {
				return res?.data?.data
			}
		}
	)
}

export function useGetRecommendation() {
	return useQuery('recommendation',{
		queryFn: () => axios({
			url: '/recommendation/init'
		})
		,
		select: (res) => {
			return res?.data?.data?.map(item => item.foodSummary)
		}
	})
}