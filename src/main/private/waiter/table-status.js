export function TableStatus() {
	return <>
		<div class="content-wrapper">
			<section class="content-header">
				<div class="container-fluid">
					<div class="row mb-2">
						<div class="col-sm-6">
							<h1>Table Status</h1>
						</div>
					</div>
				</div>
			</section>

			<section class="content">
				<div class="container-fluid">
					<div class="card">
						<div class="card-body">
							<table id="example2" class="table table-bordered table-hover">
								<thead>
									<tr>
										<th>Table</th>
										<th>Status</th>
										<th>Action</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td>1</td>
										<td>
											<span class="badge badge-pill badge-warning"> Order in progress</span>
										</td>
										<td class="text-right">
											<a href="./table-details.html" type="button" class="btn btn-default">
												<i class="fa fa-eye" aria-hidden="true"></i>
											</a>
										</td>
									</tr>
									<tr>
										<td>2</td>
										<td>
											<span class="badge badge-pill badge-warning"> Cooking in progress</span>
										</td>
										<td class="text-right">
											<a href="./table-details.html" type="button" class="btn btn-default">
												<i class="fa fa-eye" aria-hidden="true"></i>
											</a>
										</td>
									</tr>
									<tr>
										<td>3</td>
										<td>
											<span class="badge badge-pill badge-success">Cooking Completed</span>
										</td>
										<td class="text-right">
											<button class="btn btn-success mr-auto">
												Mark order as completed
											</button>
											<a href="./table-details.html" type="button" class="btn btn-default">
												<i class="fa fa-eye" aria-hidden="true"></i>
											</a>
										</td>
									</tr>
									<tr>
										<td>4</td>
										<td>
											<span class="badge badge-pill badge-success">Order Completed</span>
										</td>
										<td class="text-right">
											<a href="./table-details.html" type="button" class="ml-auto d-inline-block btn btn-default">
												<i class="fa fa-eye" aria-hidden="true"></i>
											</a>
										</td>
									</tr>
									<tr>
										<td>4</td>
										<td>
											<span class="badge badge-pill badge-secondary">Unoccupied</span>
										</td>
										<td class="text-right">
											<a href="./table-details.html" type="button" class="btn btn-default">
												<i class="fa fa-eye" aria-hidden="true"></i>
											</a>
										</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</section>
		</div>

		<aside class="control-sidebar control-sidebar-dark">
		</aside>
	</>
}