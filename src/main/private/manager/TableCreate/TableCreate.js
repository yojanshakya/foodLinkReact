import { useState } from 'react';
import { useBookTable,useGetAllTableWithBookingTime } from '../../customer/tableBooking/queries';
import { formatAMPM } from '../../../../utils/utils';
import { useCreateTable,useDeleteTable } from './queries';



export function TableCreate() {

	const { data: allTableData,error,isLoading } = useGetAllTableWithBookingTime();

	const { data: deleteTableData,mutate: deleteTable } = useDeleteTable()
	const { data: createTableData,mutate: createTable } = useCreateTable()

	const [isModalOpen,setIsModalOpen] = useState();
	const [tableName,setTableName] = useState('')

	const onClickAddTable = () => {
		createTable();
		setIsModalOpen(false);
		setTableName('');
	}

	return <div class="content-wrapper">
		<section class="content-header">
			<div class="container-fluid">
				<div class="row mb-2">
					<div class="col-sm-6">
						<h1>Table Management</h1>
					</div>
					<div className="col-sm-6 text-right">
						<button className='btn btn-success' onClick={() => {
							setIsModalOpen(true)
						}}>Add Table</button>
					</div>
				</div>
			</div>
		</section>

		<section class="content">
			<div class="container-fluid">
				<div class="card">
					<div class="card-body p-0">
						<table id="example2" class="table table-striped table-valign-middle">
							<thead>
								<tr>
									<th>Table</th>
									<th>Action</th>
								</tr>
							</thead>
							<tbody>
								{
									!isLoading && Object.entries(allTableData || {})?.map(([code,bookings]) => {
										return <tr>
											<td>{code}</td>
											<td>
												<button onClick={() => {
													deleteTable(bookings[0].id)
												}} class="btn btn-danger"><i class="fa fa-trash"></i></button>
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
			isModalOpen && <div>
				<div class="modal-backdrop fade show"></div>
				<div class={`modal fade show`} style={{ "paddingRight": "17px","display": "block" }}>
					<div class="modal-dialog">
						<div class="modal-content">
							<div class="modal-header">
								<h4 class="modal-title">Create Table</h4>
								<button type="button" class="close" data-dismiss="modal" aria-label="Close">
									<span aria-hidden="true" onClick={() => {
										setIsModalOpen(false)
									}}>×</span>
								</button>
							</div>
							<div class="modal-body">
								<div className='row'>
									<div className='col'>
										<div className='form-group '>
											<label>Table Name</label>
											<input className='form-control ' type="text" value={tableName} onChange={(e) => {
												setTableName(e.target.value);
											}} />
										</div>
									</div>
								</div>
							</div>
							<div class="modal-footer">
								<button type="button" disabled={!tableName} class="btn btn-primary ml-auto" onClick={() => {
									onClickAddTable(tableName);
								}}>Create Table</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		}
	</div>
}