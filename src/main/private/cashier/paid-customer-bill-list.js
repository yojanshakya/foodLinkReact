import { useGetAllUnpaidBills,useGetPaidBillList } from "./queries";
import { useNavigate } from 'react-router-dom'

export function PaidCustomerBillList() {

	const { data } = useGetPaidBillList()

	const navigate = useNavigate()

	const onBillSee = (data) => {
		navigate('/cashier/bill-detail',{
			state: { data: { ...data,paid: true } }
		})
	}
	return <div class="content-wrapper">
		<section class="content-header">
			<div class="container-fluid">
				<div class="row mb-2">
					<div class="col-sm-12">
						<h1 className="text-center">Paid Bills List</h1>
					</div>
				</div>
			</div>
		</section>

		<section class="content">
			<div class="container-fluid">
				{
					data?.length == 0 ?
						<div className="card card-solid p-4">
							No unpaid bills
						</div> :
						<div class="card">
							<div class="card-body p-0">
								<table id="example2" class="table table-striped table-valign-middle">
									<thead>
										<tr>
											<th>Customer</th>
											<th>Username</th>
											<th>Action</th>
										</tr>
									</thead>
									<tbody>
										{
											data?.map(({ userData,totalOrderSummary,totalPrice }) => {
												return <tr>
													<td>{`${userData.firstName} ${userData.lastName}`}</td>
													<td>{`${userData.username}`}</td>
													<td>
														<button className="btn btn-info" onClick={() => {
															onBillSee({ userData,totalOrderSummary,totalPrice })
														}}>
															<i class="far fa-eye"></i>
														</button>
													</td>
												</tr>
											})
										}
									</tbody>
								</table>
							</div>
						</div>
				}
			</div>
		</section>
	</div>
}