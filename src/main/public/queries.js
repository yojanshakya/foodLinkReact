import axios from "axios"
import { useMutation,useQuery } from "react-query"
import { setToken,setUserData,setUserType } from "../../utils/auth/auth"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"

export const useLoginQuery = () => {

	return useMutation('/auth/login',(data) =>
		axios({
			method: "POST",
			url: "/auth/login",
			data
		}).then(async (res) => {
			if ((res?.data?.data?.accessToken))
				setToken(res.data.data.accessToken)
			const userDetails = await axios({
				method: "GET",
				url: "/user-management/user-profile"
			})

			if (userDetails?.data?.data?.userType) {
				setUserType(userDetails?.data?.data?.userType);
				setUserData(userDetails?.data?.data);
			}

			window.location.reload()
		})
	)
}
export const useRegister = () => {
	const navigate = useNavigate()

	return useMutation('/user-management/register',
	{
		mutationFn: (data) => {
			return axios({
				method: "POST",
				url: "/user-management/register",
				data
			}).then((res) => {
				toast("Successfully created user.")
				navigate("/login")
			})
		}
	}
	)
}

