import { useState } from 'react';
import { useBookTable,useGetAllTableWithBookingTime } from './queries';
import { formatAMPM } from '../../../../utils/utils';
import { getUserData } from '../../../../utils/auth/auth';

export function CustomerTableBooking() {

	const { data: allTableData,error,isLoading } = useGetAllTableWithBookingTime();
	const { data: bookTableData,error: bookTableErr,isLoading: bookTableLoading,mutate: bookTable } = useBookTable(
		() => {
			setSelectedTable()
		}
	);

	const [fromTime,setFromTime] = useState();
	const [toTime,setToTime] = useState();

	const [selectedTable,setSelectedTable] = useState();


	const handleBookTable = () => {
		bookTable({ fromTime,toTime,id: selectedTable });
	}

	// console.log({ allTableData,fromTime,toTime,selectedTable })

	return <div class="content-wrapper">
		<section class="content-header">
			<div class="container-fluid">
				<div class="row mb-2">
					<div class="col-sm-6">
						<h1>Book Tables</h1>
					</div>
				</div>
			</div>
		</section>

		<section class="content">
			<div class="container-fluid">
				<div class="card">
					<div class="card-body table-responsive p-0">
						<table class="table table-striped table-valign-middle">
						<thead>
								<tr>
									<th>Table</th>
									<th>Time</th>
									<th>Action</th>
								</tr>
							</thead>
							<tbody>
								{
									!isLoading && Object.entries(allTableData || {})?.map(([code,bookings]) => {

										const times = bookings.reduce((prev,curr,) => {
											const { tableBookedStartDate,tableBookedEndDate } = curr;

											if (!tableBookedEndDate && !tableBookedStartDate) {
												return ['']
											}

											const startDate = formatAMPM(tableBookedStartDate);
											const endDate = formatAMPM(tableBookedEndDate);

											return prev.concat(`${startDate} - ${endDate}`);
										},[])

										console.log({ userData: getUserData() })

										return <tr>
											<td>{code}</td>
											<td>{
												times.filter((time) => !!time).map((time,index) => {
													return <div>{time} {
														bookings?.[index].userEmail === getUserData()?.email ?
															<span class="badge badge-pill badge-success">Booked By You</span> : null
													}</div>
												})
											}</td>
											<td>
												<button class="btn btn-success mr-auto" onClick={() => {
													setSelectedTable(bookings[0].id)
												}}>
													Book table
												</button>
											</td>
										</tr>
									})}
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</section>
		{
			selectedTable && <div>
				<div class="modal-backdrop fade show"></div>
				<div class={`modal fade show`} style={{ "paddingRight": "17px","display": "block" }}>
					<div class="modal-dialog">
						<div class="modal-content">
							<div class="modal-header">
								<h4 class="modal-title">Book Table</h4>
								<button type="button" class="close" data-dismiss="modal" aria-label="Close">
									<span aria-hidden="true" onClick={() => {
										setSelectedTable(undefined)
									}}>×</span>
								</button>
							</div>
							<div class="modal-body">
								<div className='row'>
									<div className='form-group col-6'>
										<label>From Time</label>
										<input className='form-control' type="time" value={fromTime} onChange={(e) => {
											setFromTime(e.target.value);
										}} />
									</div>
									<div className='form-group col-6'>
										<label>To Time</label>
										<input className='form-control' type="time" value={toTime} onChange={(e) => {
											setToTime(e.target.value);
										}} />
									</div>
								</div>
							</div>
							<div class="modal-footer">
								<button type="button" disabled={!fromTime || !toTime} class="btn btn-primary ml-auto" onClick={() => {
									handleBookTable()
								}}>Book Table</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		}
	</div>



	return <div class="content-wrapper">
		<section class="content-header">
			<div class="container-fluid">
				<div class="row mb-2">
					<div class="col-sm-6">
						<h1>Book Tables</h1>
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
									<th>Time</th>
									<th>Action</th>
								</tr>
							</thead>
							<tbody>
								{
									!isLoading && Object.entries(allTableData || {})?.map(([code,bookings]) => {

										const times = bookings.reduce((prev,curr,) => {
											const { tableBookedStartDate,tableBookedEndDate } = curr;

											if (!tableBookedEndDate && !tableBookedStartDate) {
												return ['']
											}

											const startDate = formatAMPM(tableBookedStartDate);
											const endDate = formatAMPM(tableBookedEndDate);

											return prev.concat(`${startDate} - ${endDate}`);
										},[])

										console.log({ userData: getUserData() })

										return <tr>
											<td>{code}</td>
											<td>{
												times.filter((time) => !!time).map((time,index) => {
													return <div>{time} {
														bookings?.[index].userEmail === getUserData()?.email ?
															<span class="badge badge-pill badge-success">Booked By You</span> : null
													}</div>
												})
											}</td>
											<td>
												<button class="btn btn-success mr-auto" onClick={() => {
													setSelectedTable(bookings[0].id)
												}}>
													Book table
												</button>
											</td>
										</tr>
									})}
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</section>

		
	</div>
}