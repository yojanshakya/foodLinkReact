import { useContext } from "react"
import { ordersContext } from "../CustomerMain"
import { useCreateOrder } from "./MenuOrderQueries";
import { toast } from "react-toastify";
import { NavLink, useNavigate } from "react-router-dom";

export function CustomerMenuOrder() {
	const navigate = useNavigate()

	const { orders,updateOrders,deleteOrder,clearAllOrders } = useContext(ordersContext);
	const { data: createOrderResponse,isError,mutate: createOrder } = useCreateOrder(
		() => {
			toast.success("Order created successfully")
			navigate("/customer/order-status");
			clearAllOrders()
		}
	)

	const onCreateOrder = () => {
		// todo map with orders
		createOrder(
			{
				order: orders.map((item) => ({
					quantity: item.quantity,
					foodId: item.foodId
				})),
				orderTime: Date.now()
			},
		)
	}

	const onQuantityChange = (item,changeType) => {
		if (changeType == "increase") {
			updateOrders({ ...item,quantity: item.quantity + 1 })
		} else if (item.quantity > 0) {
			updateOrders({ ...item,quantity: item.quantity - 1 })
		}
	}


	return <div class="content-wrapper">
		<section class="content-header">
			<div class="container-fluid">
				<div class="row mb-2">
					<div class="col-sm-6">
						<h1>Your Orders</h1>
					</div>
				</div>
			</div>
		</section>

		<section class="content">
			<div class="card">
				<div class="card-body p-0">
					{
						orders.length <= 0 ? (
							<div className="py-4 px-2">
								You have no orders choosen. Please go to <NavLink to={"/customer/item-list"}>menu</NavLink>  and choose order
							</div>) :
							<table class="table projects">
								<thead>
									<tr>
										<th style={{ "width": "1%" }}>#</th>
										<th>Name</th>
										<th>Price</th>
										<th class="text-center" style={{ "width": "15%" }}>Quantity</th>
										<th class="text-center">Subtotal</th>
										<th></th>
									</tr>
								</thead>
								<tbody>
									{
										orders.map((item,index) => {
											return <tr>
												<td>{index + 1}</td>
												<td>
													<div class="d-flex">
														<div class="mr-auto">
															<span> {item.foodName} </span>
															<br />
															<small> {item.description || "description todo"} </small>
														</div>
														<div class="mr-4">
															{/** todo change image */}
															<img alt="Avatar" style={{ "width": "3rem",height: "3rem" }} class="img-circle img-fluid" src={"data:image/png;base64," + item.foodImage} />
														</div>
													</div>
												</td>
												<td>Rs {item.foodPrice}</td>
												<td class="text-center">
													<div class="input-group">
														<span class="input-group-btn">
															<button onClick={() => onQuantityChange(item,"decrease")} type="button" class="quantity-left-minus btn btn-number btn-light" data-type="minus" data-field="">
																<span class="">-</span>
															</button>
														</span>
														<span
															type="text"
															id="quantity"
															name="quantity"
															class="form-control input-number"
														>{item.quantity}</span>
														<span class="input-group-btn">
															<button onClick={() => onQuantityChange(item,"increase")} type="button" class="quantity-right-plus btn btn-light btn-number" data-type="plus" data-field="">
																<span class="">+</span>
															</button>
														</span>
													</div>
												</td>
												<td class="text-center">{item.quantity * item.foodPrice}</td>
												<td class="project-actions text-right">
													<button onClick={() => deleteOrder(item)} class="btn btn-danger btn-sm" href="#">
														<i class="fas fa-trash"> </i>
													</button>
												</td>
											</tr>
										})
									}

								</tbody>
							</table>
					}
				</div>
			</div>

			{
				orders.length > 0 &&
				<div class="col-12">
					<a href="#" class="btn btn-secondary">Cancel</a>
					<button onClick={() => {
						onCreateOrder()
					}} type="submit" class="btn btn-success float-right" >Create Order</button>
				</div>
			}
		</section>
	</div>
}