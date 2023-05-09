import { useGetCustomerBill } from "../../customer/customerBill/queries";
import { useGetOrderStatusByUser } from "../../customer/orderStatus/queries";
import { useLocation } from 'react-router-dom'
import { usePayBill } from "./queries";
import domToPdf from 'dom-to-pdf'

export function CashierBillDetail() {

	const location = useLocation();

	const { userData,totalPrice,totalOrderSummary,date: storedDate,paid } = location.state?.data || {};

	const date = new Date();

	const { mutate: payBill } = usePayBill({ userData,totalPrice,totalOrderSummary,date: Date.now() });

	const onPayConfirm = () => {
		payBill(userData.userId)
	}

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
		<section class="content" id="bill">
			<div class="container-fluid">
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
							<b>Customer Name: </b>{`${userData.firstName} ${userData.lastName}`}<br />
							<b>Customer Email: </b>{`${userData.email}`}<br />
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
										totalOrderSummary?.map((item,index) => {
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
											<td>Rs {totalPrice}</td>
										</tr>
									</tbody></table>
							</div>
						</div>
					</div>


				</div>
			</div>
		</section>
		{

			<div class="row no-print">
				<div class="col-12">
					{
						!paid &&
						<button
							onClick={() => {
								onPayConfirm()
							}}
							type="button" class="btn btn-success float-right" style={{ "marginRight": "5px" }}>
							Confirm Payment
						</button>
					}
					<button className="btn btn-primary float-right mr-3" onClick={() => {
						onPdfBill()
					}}>
						<i class="fa fa-print mr-2"></i>
						Generate Pdf
					</button>

				</div>
			</div>
		}



	</div>

}

