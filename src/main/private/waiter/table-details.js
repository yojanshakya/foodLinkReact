import { useEffect,useState } from "react";
import { Loading } from "../../../components/Loading/Loading";
import { useGetAllMenuItem } from "../customer/customerItemList/queries";
import { useChangeOrderToCompleted,useGetOrdersByAllUsers } from "../kitchen/orders/orderQueries";
import { useGetAllBookedTables } from "./queries";

export function WaiterTableDetails() {

  const { data: allOrdersByUsers,isLoading: isOrdersLoading } = useGetOrdersByAllUsers()
  // const {data: allMenuItem, isLoading: allMenuItemLoading} = useGetAllMenuItem()

  const { data: changeOrderData,isLoading: changeOrderFetching,mutate: changeOrderToCompleted } = useChangeOrderToCompleted();

  const { data: bookedTables,isLoading: bookedTablesLoading } = useGetAllBookedTables();

  const onChangeToCompleted = (id) => {
    changeOrderToCompleted(id);
  }

  console.log({ allOrdersByUsers })

  const [servedIds,setServedIds] = useState([]);

  useEffect(() => {
    setServedIds(JSON.parse(localStorage.getItem("servedIds")) || [])

  },[])

  const onServed = (orderId) => {
    let newServed = []
    if (servedIds.some((item)=> item == orderId)) {
      newServed =  [...servedIds.slice(0,servedIds.findIndex((item)=>item==orderId)),
        ...servedIds.slice(servedIds.findIndex((item)=> item == orderId) + 1)]
      
      setServedIds(newServed)
    }else{
      newServed = [...servedIds, orderId]
      setServedIds(newServed)
    }

    localStorage.setItem('servedIds', JSON.stringify(newServed) )
  }

  return <>
    <div class="content-wrapper">
      <section class="content-header">
        <div class="container-fluid">
          <div class="row mb-2">
            <div class="col-sm-12">
              <h1 className="text-center">Orders</h1>
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
                  <table id="example2" class="table table-striped table-valign-middle">
                    <thead>
                      <tr>
                        <th>Table</th>
                        <th>User</th>
                        <th>Dish</th>
                        <th>Status</th>
                        <th>Served</th>
                      </tr>
                    </thead>
                    <tbody>
                      {!isOrdersLoading && !bookedTablesLoading && allOrdersByUsers?.map((item) => (
                        <tr>
                          <td>{
                            bookedTables.find(
                              (table) =>
                                table.username == item.username
                                && table.tableBookedStartDate <= Date.now()
                                && table.tableBookedEndDate >= Date.now())?.code || "Table 3"
                          }</td>
                          <td>
                            {item.username}
                          </td>
                          <td>{item.foodName}</td>
                          <td>
                            <span class={`badge badge-pill ${item?.orderStatus ? "badge-success" : "badge-danger"}`}>{item?.orderStatus ? "Completed" : "Not completed"}</span>
                          </td>
                          <td>
                            <div class="form-check">
                              <input
                               checked={servedIds?.some((served) => served == item?.orderId)}
                                class="form-check-input"
                                type="checkbox"
                                value="" id="flexCheckChecked"
                                onClick={()=> onServed(item.orderId)} />
                            </div>
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