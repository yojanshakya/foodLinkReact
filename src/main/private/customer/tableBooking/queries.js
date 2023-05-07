import axios from "axios";
import { useMutation, useQuery } from "react-query";
import { queryClient } from "../../../..";

export const useGetAllTableWithBookingTime = () =>
	useQuery("useGetAllTableWithBookingTime",{
		queryFn: () => {
			return axios({
				url: "/table-module/fetch-all-available"
			})
		},
		select: (data)=>{
			if(data?.data?.data){
				const responseData = data?.data?.data || [];
				const tableNameSet = new Set();

				responseData.forEach((table)=>{
					tableNameSet.add(table.code);
				})

				const tableMap = {}
				Array.from(tableNameSet).forEach((item)=>{
					tableMap[item] = [];
				});

				responseData.forEach((item)=>{
					if(item.tableBookedStartDate && item.tableBookedEndDate){
						item.tableBookedStartDate = new Date(item.tableBookedStartDate)
						item.tableBookedEndDate = new Date(item.tableBookedEndDate)
					}
					tableMap[item.code].push(item);
				}) 
				return tableMap;
			}
		}
	});


export const useBookTable = (onSuccess)=>
	useMutation("book table", {
		onSuccess: ()=>{
			queryClient.invalidateQueries("useGetAllTableWithBookingTime")
			onSuccess?.()
		},
		mutationFn: ({fromTime, toTime, id})=>{

			const fromDateObject = (new Date())
			fromDateObject.setHours(fromTime.split(':')[0], fromTime.split(':')[1])
			
			const toDateObject = (new Date())
			toDateObject.setHours(toTime.split(':')[0], toTime.split(':')[1])

			return axios({
				url: `/table-module/update-to-booked/${id}`,
				method: "patch",
				data: {
					"bookedStartDate": fromDateObject.getTime(),
					"bookedEndDate": toDateObject.getTime()
				}
			})
		}
	})

export const useUnBookTable = ()=>
	useMutation("un book table", {
		mutationFn: (fromDate, toDate, id)=>{
			return axios({
				url: `/table-module/update-to-not-booked/${id}`
			})
		}
	})