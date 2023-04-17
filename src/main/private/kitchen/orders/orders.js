import { Loading } from "../../../../components/Loading/Loading"
import { useChangeOrderToCompleted, useGetOrdersByAllUsers } from "./orderQueries"

export function Orders() {

  const { data: allOrdersByUsers,isFetching: isOrdersLoading } = useGetOrdersByAllUsers()

  const {data: changeOrderData, isFetching: changeOrderFetching, mutate: changeOrderToCompleted} = useChangeOrderToCompleted();

  const onChangeToCompleted = (id)=>{
    changeOrderToCompleted(id);
  }
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

      {
        isOrdersLoading ?
          <Loading /> :

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
                      {allOrdersByUsers?.map((item) => (
                        <tr>
                          <td>{item.foodName}</td>
                          <td>
                            <span class={`badge badge-pill ${item.orderStatus ? "badge-success" : "badge-danger"}`}>{item.orderStatus ? "Completed" : "Not completed"}</span>
                          </td>
                          <td class="text-right">
                            {
                              !item.orderStatus ?
                                <button class="btn btn-success mr-auto" onClick={()=>{
                                  onChangeToCompleted(item.orderId)
                                }}>
                                  Mark as completed
                                </button> : null
                            }
                          </td>
                        </tr>))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </section>
      }

    </div>

    <aside class="control-sidebar control-sidebar-dark">
    </aside>
  </>
}