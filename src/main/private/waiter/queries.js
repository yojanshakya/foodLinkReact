import axios from "axios";
import { useQuery } from "react-query";

export const useGetAllBookedTables = () =>
	useQuery("useGetAllBookedTables",{
		queryFn: () => {
			return axios({
				url: "/table-module/fetch-all-booked"
			})
		},
		select: (data)=>{
			if(data?.data?.data){
				return data?.data?.data.map((item)=> ({
					...item,
					tableBookedEndDate: (new Date(item.tableBookedEndDate)).getTime(),
					tableBookedStartDate: (new Date(item.tableBookedStartDate)).getTime()
				}))
			}
			return []
		}
	});