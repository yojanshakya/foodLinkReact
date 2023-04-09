export function Orders(){
	
	return <>
      <div class="content-wrapper">
        <section class="content-header">
          <div class="container-fluid">
            <div class="row mb-2">
              <div class="col-sm-6">
                <h1>Orders</h1>
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
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Momo</td>
                      <td>
                        <span class="badge badge-pill badge-danger">Not Started</span>
                      </td>
                      <td class="text-right">
                        <button class="btn btn-warning mr-auto">
                          Mark as started
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td>Pizza</td>
                      <td>
                        <span class="badge badge-pill badge-danger">Not Started</span>
                      </td>
                      <td class="text-right">
                        <button class="btn btn-warning mr-auto">
                          Mark as started
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td>Chowmein</td>
                      <td>
                        <span class="badge badge-pill badge-warning">Started</span>
                      </td>
                      <td class="text-right">
                        <button class="btn btn-success mr-auto">
                          Mark as completed
                        </button>
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
      </aside>
	</>
}