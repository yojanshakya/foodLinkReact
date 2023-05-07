import { useGetOrderStatusByUser } from "./queries"

export function CustomerOrderStatus() {

	const { data: ordersList } = useGetOrderStatusByUser();

	return <div class="content-wrapper">
		<section class="content-header">
			<div class="container-fluid">
				<div class="row mb-2">
					<div class="col-sm-6">
						<h1>Order Status</h1>
					</div>
				</div>
			</div>
		</section>

		<section class="content">
			<div class="card">
				<div class="card-body p-0">
					<table class="table table-striped table-valign-middle">
						<thead>
							<tr>
								<th >S.N.</th>
								<th style={{ "width": "30%" }}>Name</th>
								<th class="text-center">Quantity</th>
								<th class="text-center">Status</th>
							</tr>
						</thead>
						<tbody>
							{
								ordersList?.map((item, index) => {
									return <tr>
										<td>{index+1}</td>
										<td>
											<div class="d-flex">
												<div class="mr-auto">
													<span> {item.foodName} </span>
													<br />
													<small> {item.description} </small>
												</div>
											</div>
										</td>
										<td class="text-center" >{item.orderFoodQuantity}</td>
										<td class="text-center">
											{/** todo use pills */}
											{
												item.orderStatus ?
													<span class="badge badge-pill badge-success">Completed</span>
													: <span class="badge badge-pill badge-danger">Not completed</span>}

										</td>
									</tr>
								})
							}


						</tbody>
					</table>
				</div>
			</div>
		</section>
	</div>
}