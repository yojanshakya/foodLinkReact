export function CustomerBillDetail(){

	return  <div class="content-wrapper">
	<section class="content-header">
		<div class="container-fluid">
			<div class="row mb-2">
				<div class="col-sm-6">
					<h1>Customer Bills List</h1>
				</div>
			</div>
		</div>
	</section>

	<section class="content">
		<div class="container-fluid">
			<div class="invoice p-3 mb-3">
				<div class="row mb-4" >
					<div class="col-12">
						<h4>
							Food Link
							<small class="float-right">Date: 2/10/2014</small>
						</h4>
					</div>
				</div>
				<div class="row invoice-info mb-3">
					<div class="col-sm-4 invoice-col">
						<b>Bill #007612</b><br/>
						<b>Customer Name:</b>Shyam Rai<br/>
						<b>Table No: 1</b><br/>
						<b>Phone No:</b> 968-34567<br/>
						<b>Date:</b> 2/22/2023
					</div>
				</div>

				<div class="row">
					<div class="col-12 table-responsive">
						<table class="table table-striped">
							<thead>
							<tr>
								<th>S.N.</th>
								<th>Item</th>
								<th>Quantity</th>
								<th>Subtotal</th>
							</tr>
							</thead>
							<tbody>
							<tr>
								<td>1</td>
								<td>Momo</td>
								<td>3</td>
								<td>Rs. 400</td>
							</tr>
							<tr>
								<td>2</td>
								<td>Pizza</td>
								<td>3</td>
								<td>Rs. 4000</td>
							</tr>
							<tr>
								<td>3</td>
								<td>Katti Roll</td>
								<td>2</td>
								<td>Rs. 500</td>
							</tr>
							</tbody>
						</table>
					</div>
				</div>

				<div class="row">
					<div class="col-6">
					</div>
					<div class="col-6">
						<p class="lead">Amount Due</p>

						<div class="table-responsive">
							<table class="table">
								<tbody><tr>
									<th style="width:50%">Subtotal:</th>
									<td>Rs 4900</td>
								</tr>
								<tr>
									<th>Tax (10%)</th>
									<td>Rs 490</td>
								</tr>
								<tr>
									<th>Total:</th>
									<td>Rs 4390</td>
								</tr>
							</tbody></table>
						</div>
					</div>
				</div>

				<div class="row no-print">
					<div class="col-12">
						<a href="invoice-print.html" rel="noopener" target="_blank" class="btn btn-default"><i class="fas fa-print"></i> Print</a>
						<button type="button" class="btn btn-success float-right"><i class="far fa-credit-card"></i> Submit
							Payment
						</button>
						<button type="button" class="btn btn-primary float-right" style="margin-right: 5px;">
							<i class="fas fa-download"></i> Generate PDF
						</button>
					</div>
				</div>
			</div>
		</div>
	</section>
</div>
}