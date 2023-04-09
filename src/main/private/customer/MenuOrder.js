export function CustomerMenuOrder(){

	return  <div class="content-wrapper">
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
				<table class="table projects">
					<thead>
						<tr>
							<th style="width: 1%">#</th>
							<th>Name</th>
							<th>Price</th>
							<th class="text-center" style="width:15%">Quantity</th>
							<th class="text-center">Subtotal</th>
							<th></th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>1</td>
							<td>
								<div class="d-flex">
									<div class="mr-auto">
										<a> Momo </a>
										<br />
										<small> Momo is a dumpling </small>
									</div>
									<div class="mr-4">
										<img alt="Avatar" style="width:3rem; height:3rem" class="img-circle img-fluid" src="https://akm-img-a-in.tosshub.com/businesstoday/images/story/202112/momo_660_060817115337-sixteen_nine.jpg?size=948:533"/>
									</div>
								</div>
							</td>
							<td>Rs 250</td>
							<td class="text-center">
								<div class="input-group">
									<span class="input-group-btn">
											<button type="button" class="quantity-left-minus btn btn-number btn-light"  data-type="minus" data-field="">
												<span class="">-</span>
											</button>
									</span>
									<input type="text" id="quantity" name="quantity" class="form-control input-number" value="10" min="1" max="100"/>
									<span class="input-group-btn">
											<button type="button" class="quantity-right-plus btn btn-light btn-number" data-type="plus" data-field="">
													<span class="">+</span>
											</button>
									</span>
							</div>
							</td>
							<td class="text-center">250</td>
							<td class="project-actions text-right">
								<a class="btn btn-danger btn-sm" href="#">
									<i class="fas fa-trash"> </i>
								</a>
							</td>
						</tr>
						<tr>
							<td>1</td>
							<td>
								<div class="d-flex">
									<div class="mr-auto">
										<a> Momo </a>
										<br />
										<small> Momo is a dumpling </small>
									</div>
									<div class="mr-4">
										<img alt="Avatar" style="width:3rem; height:3rem" class="img-circle img-fluid" src="https://akm-img-a-in.tosshub.com/businesstoday/images/story/202112/momo_660_060817115337-sixteen_nine.jpg?size=948:533"/>
									</div>
								</div>
							</td>
							<td>Rs 250</td>
							<td class="text-center">
								<div class="input-group">
									<span class="input-group-btn">
											<button type="button" class="quantity-left-minus btn btn-number btn-light"  data-type="minus" data-field="">
												<span class="">-</span>
											</button>
									</span>
									<input type="text" id="quantity" name="quantity" class="form-control input-number" value="10" min="1" max="100"/>
									<span class="input-group-btn">
											<button type="button" class="quantity-right-plus btn btn-light btn-number" data-type="plus" data-field="">
													<span class="">+</span>
											</button>
									</span>
							</div>
							</td>
							<td class="text-center">250</td>
							<td class="project-actions text-right">
								<a class="btn btn-danger btn-sm" href="#">
									<i class="fas fa-trash"> </i>
								</a>
							</td>
						</tr>
						<tr>
							<td>1</td>
							<td>
								<div class="d-flex">
									<div class="mr-auto">
										<a> Momo </a>
										<br />
										<small> Momo is a dumpling </small>
									</div>
									<div class="mr-4">
										<img alt="Avatar" style="width:3rem; height:3rem" class="img-circle img-fluid" src="https://akm-img-a-in.tosshub.com/businesstoday/images/story/202112/momo_660_060817115337-sixteen_nine.jpg?size=948:533"/>
									</div>
								</div>
							</td>
							<td>Rs 250</td>
							<td class="text-center">
								<div class="input-group">
									<span class="input-group-btn">
											<button type="button" class="quantity-left-minus btn btn-number btn-light"  data-type="minus" data-field="">
												<span class="">-</span>
											</button>
									</span>
									<input type="text" id="quantity" name="quantity" class="form-control input-number" value="10" min="1" max="100"/>
									<span class="input-group-btn">
											<button type="button" class="quantity-right-plus btn btn-light btn-number" data-type="plus" data-field="">
													<span class="">+</span>
											</button>
									</span>
							</div>
							</td>
							<td class="text-center">250</td>
							<td class="project-actions text-right">
								<a class="btn btn-danger btn-sm" href="#">
									<i class="fas fa-trash"> </i>
								</a>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>

		<div class="col-12">
			<a href="#" class="btn btn-secondary">Cancel</a>
			<input type="submit" value="Confirm Order" class="btn btn-success float-right"/>
		</div>
	</section>
</div>
}