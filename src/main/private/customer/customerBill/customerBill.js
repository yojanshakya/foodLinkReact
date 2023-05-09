import { getUserData } from "../../../../utils/auth/auth";
import { useGetOrderStatusByUser } from "../orderStatus/queries";
import { useGetCustomerBill } from "./queries";
import domToPdf from 'dom-to-pdf'


export function CustomerBillDetail() {

	const { data: customerBillData } = useGetCustomerBill();

	const { data: orders,isLoading: isOrdersLoading } = useGetOrderStatusByUser();


	console.log({ orders,customerBillData })

	const date = new Date();

	const onPdfBill = () => {
		var element = document.getElementById('bill');
		var options = {
			filename: `bill-${Date.now()}.pdf`
		};
		domToPdf(element,options,function (pdf) {
			console.log('done');
		});
	}
	return <div class="content-wrapper">
		<section class="content-header">
			<div class="container-fluid">
				<div class="row mb-2">
					<div class="col-sm-12">
						<h1 className="text-center">Customer Bills List</h1>
					</div>
				</div>
			</div>
		</section>
		{
			orders?.length == 0 || (!isOrdersLoading && orders?.some((order) => !order.orderStatus)) ? <div className="content">
				<div className="container-fluid ">
					<div className="invoice px-2 py-4">
						Please wait for all your orders to be completed
					</div>
				</div>
			</div> : <section class="content">
				<div class="container-fluid" id="bill">
					<div class="invoice p-3 mb-3">
						<div class="row mb-4" >
							<div class="col-12">
								<h4>
									Food Link
									<small class="float-right">Date: {`${date.getUTCDate()}/${date.getMonth() + 1}/${date.getFullYear()}`}</small>
								</h4>
							</div>
						</div>
						<div class="row invoice-info mb-3">
							<div class="col-sm-4 invoice-col">
								<b>Customer Name: </b>{`${getUserData().firstName} ${getUserData().lastName}`}<br />
								<b>Customer Email: </b>{`${getUserData().email}`}<br />
							</div>
						</div>

						<div class="row">
							<div class="col-12 table-responsive">
								<table class="table table-striped">
									<thead>
										<tr>
											<th>S.N.</th>
											<th>Item</th>
											<th>Price</th>
											<th>Quantity</th>
											<th>Subtotal</th>
										</tr>
									</thead>
									<tbody>
										{
											customerBillData?.orders?.map((item,index) => {

												return <tr>
													<td>{index}</td>
													<td>{item.foodName}</td>
													<td>{item.orderFoodPrice}</td>
													<td>{item.orderFoodQuantity}</td>
													<td>Rs. {item.orderFoodPrice * item.orderFoodQuantity}</td>
												</tr>
											})
										}
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
										<tbody>
											<tr>
												<th>Total:</th>
												<td>Rs {customerBillData?.total}</td>
											</tr>
										</tbody></table>
								</div>
							</div>
						</div>

						<div class="row no-print">
							<div class="col-12">

								{/* <button type="button" class="btn btn-primary float-right" style={{ "marginRight": "5px" }}>
									<i class="fas fa-download"></i> Generate PDF
								</button> */}
							</div>
						</div>
					</div>
				</div>

				<div class="row no-print">
					<div class="col-12">
						<button className="btn btn-primary float-right mr-3" onClick={() => {
							onPdfBill()
						}}>
							<i class="fa fa-print mr-2"></i>
							Generate Pdf
						</button>
					</div>
				</div>
			</section>
		}
	</div>
}