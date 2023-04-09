
export function CustomerOrderList(){

	return  <div class="content-wrapper">
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
				<table class="table projects">
					<thead>
						<tr>
							<th >#</th>
							<th style="width: 30%">Name</th>
							<th class="text-center">Quantity</th>
							<th class="text-center">Status</th>
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
										<br/>
										<small> Momo is a dumpling </small>
									</div>
									<div class="mr-4">
										<img alt="Avatar" 
										style="width:3rem; height:3rem"
										 class="img-circle img-fluid"
										  src="https://akm-img-a-in.tosshub.com/businesstoday/images/story/202112/momo_660_060817115337-sixteen_nine.jpg?size=948:533"/>
									</div>
								</div>
							</td>
							<td class="text-center" >3</td>
							<td class="text-center">
								In progress
							</td>
						</tr>
						<tr style="border-top:1px solid #dee2e6">
							<td>2</td>
							<td>
								<div class="d-flex">
									<div class="mr-auto">
										<a> Momo </a>
										<br/>
										<small> Momo is a dumpling </small>
									</div>
									<div class="mr-4">
										<img alt="Avatar" style="width:3rem; height:3rem" class="img-circle img-fluid" src="https://akm-img-a-in.tosshub.com/businesstoday/images/story/202112/momo_660_060817115337-sixteen_nine.jpg?size=948:533"/>
									</div>
								</div>
							</td>
							<td class="text-center" >3</td>
							<td class="text-center">
								In progress
							</td>
						</tr>
						<tr style="border-top:1px solid #dee2e6">
							<td>3</td>
							<td>
								<div class="d-flex">
									<div class="mr-auto">
										<a> Momo </a>
										<br/>
										<small> Momo is a dumpling </small>
									</div>
									<div class="mr-4">
										<img alt="Avatar" style="width:3rem; height:3rem" class="img-circle img-fluid" src="https://akm-img-a-in.tosshub.com/businesstoday/images/story/202112/momo_660_060817115337-sixteen_nine.jpg?size=948:533"/>
									</div>
								</div>
							</td>
							<td class="text-center">3</td>
							<td class="text-center">
								In progress
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	</section>
</div>
}