import { useNavigate } from "react-router-dom";
import { Loading } from "../../../../components/Loading/Loading";
import { useGetAllMenuItem } from "../../customer/customerItemList/queries"
import { useDeleteMenuItem } from "./queries";

export function MenuItemList() {

	const { data: allMenuItems,isFetching } = useGetAllMenuItem();
	const {data: deleteData, mutate: deleteItem} = useDeleteMenuItem()	

	const navigate = useNavigate();

	const onDelete = (id)=>{
		deleteItem(id);
	}

	const onEdit = (id)=>{
		navigate('/manager/item-details', {
			state: {
				id
			}
		})
	}

	return <div class="content-wrapper">
		<section class="content-header">
			<div class="container-fluid">
				<div class="row mb-2">
					<div class="col-sm-6">
						<h1>Menu Item</h1>
					</div>
				</div>
			</div>
		</section>

		<section class="content">
			<div class="card card-solid">
				<div class="card-body pb-0">
					<div class="row">
						{
							isFetching ? <Loading /> : allMenuItems.map((item) => {
								return <div class="col-12 col-sm-6 col-md-4 d-flex align-items-stretch flex-column">
									<div class="card bg-light d-flex flex-fill">
										<div class="card-body">
											<div class="row">
												<div class="col-7">
													<h2 class="lead"><b>{item.foodName}</b></h2>
													<p class="text-muted text-sm"><b>Description: </b>{item.description} </p>
												</div>
												<div class="col-5 text-center">
													{/** todo image */}
													<img
														src="https://greenbowl2soul.com/wp-content/uploads/2019/11/vegetable-chow-mein.jpg" alt="user-avatar" class="img-circle img-fluid" />
												</div>
											</div>
										</div>
										<div class="card-footer">
											<div class="text-right">
												<button onClick={()=> onEdit(item.id)} class="btn btn-sm btn-primary">
													Edit
												</button>
												<button onClick={()=>onDelete(item.id)} type="button" class="btn ml-2 btn-sm btn-danger">
													Delete
												</button>
											</div>
										</div>
									</div>
								</div>
							})
						}

					</div>

				</div>
			</div>
		</section >
		<div class="row mb-3">
			<div class="col-12">
				<button type="submit" class="btn btn-success float-right" >Add new item</button>
			</div>
		</div>
	</div >
}