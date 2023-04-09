
export function TableDetails() {

	return <>
		<div class="content-wrapper">
			<section class="content-header">
				<div class="container-fluid">
					<div class="row mb-2">
						<div class="col-sm-6">
							<h1>Table #1</h1>
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
										<th>Dish</th>
										<th>Status</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td>Momo</td>
										<td>
											<span class="badge badge-pill badge-info">Started</span>
										</td>

									</tr>
									<tr>
										<td>Pizza</td>
										<td>
											<span class="badge badge-pill badge-danger">Not Started</span>
										</td>

									</tr>
									<tr>
										<td>Chowmein</td>
										<td>
											<span class="badge badge-pill badge-info">Not Started</span>
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
		</aside></>
}