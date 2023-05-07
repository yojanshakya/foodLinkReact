import axios from "axios";
import { useMutation,useQuery } from "react-query"
import { queryClient } from "../../../..";
import { toast } from "react-toastify";

export const useDeleteMenuItem = () => {

	return useMutation('deleteMenuItem',{
		mutationFn: (id) => axios({
			url: `/food-item/delete-specific-food/${id}`,
			method: "delete"
		}),
		onSuccess: () => {
			queryClient.invalidateQueries({
				queryKey: ['get-sub-category-with-food']
			});
			toast.success("Successfully deleted item")

		}
	});
}
export const useGetSubCategoryWithFood = () => {

	return useQuery('get-sub-category-with-food',{
		queryFn: () => axios({
			url: `/sub-category/fetch-all-sub-category-with-food`,
		}),
		select: (res) => res?.data?.data?.map((subCat) => {
			return {
				category: subCat.subCategoryName,
				items: subCat.foodSummary.map((food) => ({
					foodCode: food.foodCode,
					discount: 0,
					hasDiscount: false,
					foodId:food.foodId,
					foodName: food.foodName,
					price: food.foodPrice,
					quantity: 0,
					foodImage: food.foodImage,
					foodDescription: food.foodDescription,
					subCategoryId: subCat.subCategoryId
				}))
			}
		}) || []
	});
}
