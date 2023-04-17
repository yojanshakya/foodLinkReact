import axios from "axios"
import { useMutation,useQuery } from "react-query"
import { setToken } from "../../utils/auth/auth"

export const useLoginQuery = () => {

	return useMutation('/auth/login',(data) =>
		axios({
			method: "POST",
			url: "/auth/login",
			data
		}).then((res) => {
			if ((res?.data?.data?.accessToken))
				setToken(res.data.data.accessToken)

			
		})
	)
}