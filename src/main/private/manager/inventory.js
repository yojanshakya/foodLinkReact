export function Inventory(){
	return <>
	<div class="content-wrapper">
        <section class="content-header">
          <div class="container-fluid">
            <div class="row mb-2">
              <div class="col-sm-6">
                <h1>Inventory</h1>
              </div>
              <div class="col-sm-6">
                <ol class="breadcrumb float-sm-right">
                  <li class="breadcrumb-item"><a href="#">Home</a></li>
                  <li class="breadcrumb-item active">DataTables</li>
                </ol>
              </div>
            </div>
          </div>
        </section>

        <section class="content">
          <div class="container-fluid">
						<div class="card">
							<div class="card-body">
								<div class="row">
									<div class="col-4">
										<div class="form-group">
											<label for="exampleInputEmail1">Item Name</label>
											<input class="form-control" id="exampleInputEmail1" placeholder="Enter name"/>
										</div>
									</div>
									<div class="col-4">
										<div class="form-group">
											<label for="exampleInputEmail1">Item Quantity</label>
											<input type="number" class="form-control" id="exampleInputEmail1" placeholder="Enter quantity"/>
										</div>
									</div>
									<div class="col-4">
										<div class="form-group">
											<label for="exampleInputEmail1">Price Per Item</label>
											<input type="number" class="form-control" id="exampleInputEmail1" placeholder="Enter price"/>
										</div>
									</div>
								</div>
							</div>

						</div>
            <div class="card">
              <div class="card-body">
                <table id="example2" class="table table-bordered table-hover">
                  <thead>
                    <tr>
                      <th>Item Name</th>
                      <th>Item Quantity</th>
                      <th>Price per Item</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Tomato</td>
                      <td>15</td>
                      <td>80</td>
                    </tr>
                    <tr>
                      <td>Potato</td>
                      <td>18</td>
                      <td>40</td>
                    </tr>
                    <tr>
                      <td>Spinach</td>
                      <td>1</td>
                      <td>80</td>
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