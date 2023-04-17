import axios from "axios";
import { useQuery } from "react-query";

export const useGetOrderStatusByUser = ()=>
useQuery("orderStatusByUser", ()=>{
	return axios({
		url: "/order/fetch-all-order-specific-user-detail"
	}).then((res)=>{
		return res?.data?.data
	})
});