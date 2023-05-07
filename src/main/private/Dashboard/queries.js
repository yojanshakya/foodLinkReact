import axios from "axios";
import { useQuery } from "react-query";

export const useUserProfile = () =>
	useQuery("userProfile",{
		queryFn: () => {
			return axios({
				method: "GET",
				url: "/user-management/user-profile"
			}).then((res) => {
				return res?.data?.data
			})
		},
		select: (data)=> data
	});