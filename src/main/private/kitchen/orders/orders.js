import { useQuery } from "react-query";
import { Loading } from "../../../../components/Loading/Loading"
import { useGetAllMenuItem } from "../../customer/customerItemList/queries";
import { useChangeOrderToCompleted } from "./orderQueries"
import axios from "axios";

export function Orders() {

  const { data: allMenuItem,isLoading: allMenuItemLoading } = useGetAllMenuItem()

  const { data: changeOrderData,isLoading: changeOrderFetching,mutate: changeOrderToCompleted } = useChangeOrderToCompleted();

  const { data: allOrdersByUsers,isLoading: isOrdersLoading } = useQuery('fetch-all-user-orderssss',{
    queryFn: () => {
      return axios({
        url: '/order/fetch-all-user-order'
      })
    },
    select: (res) => res?.data?.data
  })


  console.log({ allMenuItem,allOrdersByUsers })
  const onChangeToCompleted = (id) => {
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
                <div class="card-body p-0">
                  {
                    allOrdersByUsers?.filter((item)=> !item.isCompleted)?.length > 0 ? <table id="example2" class="table table-striped table-valign-middle">
                      <thead>
                        <tr>
                          <th>Dish</th>
                          <th>Status</th>
                          <th>Quantity</th>
                          <th className="text-center">Action</th>
                        </tr>
                      </thead>
                      <tbody>

                        {!allMenuItemLoading && !isOrdersLoading && allOrdersByUsers?.filter((item) => !item?.isCompleted).map((item) => (
                          <tr>
                            <td>{allMenuItem?.find((menu) => menu?.id == item.foodId)?.foodName || "Thali Set"}</td>
                            <td>
                              <span class={`badge badge-pill ${item?.isCompleted ? "badge-success" : "badge-danger"}`}>{item?.isCompleted ? "Completed" : "Not completed"}</span>
                            </td>
                            <td>
                              <span >{item.quantity}</span>
                            </td>
                            <td class="text-center  ">
                              {
                                !item?.isCompleted ?
                                  <button class="btn btn-success mr-auto" onClick={() => {
                                    onChangeToCompleted(item.id)
                                  }}>
                                    Mark as completed
                                  </button> : null
                              }
                            </td>
                          </tr>))}
                      </tbody>
                    </table> : <p class="p-4 mb-0">There are no pending orders</p>
                  }
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