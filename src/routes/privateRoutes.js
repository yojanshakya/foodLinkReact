import { Outlet,createBrowserRouter } from "react-router-dom";
// import { Inventory } from "../main/private/manager/inventory";
import { MenuItemList } from "../main/private/manager/MenuItemList/menu-item-list";
import { Orders } from "../main/private/kitchen/orders/orders";
import { MenuItemDetails } from "../main/private/manager/MenuItemDetails/menu-item-details";
import { CustomerMenuItemList } from "../main/private/customer/customerItemList/CustomerItemList.js";
import { CustomerMenuOrder } from "../main/private/customer/menuOrder/MenuOrder";
import { UnpaidCustomerBillList} from "../main/private/cashier/unpaid-customer-bill-list";
import { TableBookingDetail } from "../main/private/cashier/table-booking-detail";
import { TableBookingStatus } from "../main/private/cashier/table-booking-status";
import { Dashboard } from "../main/private/Dashboard/Dashboard";
import { CustomerOrderStatus } from "../main/private/customer/orderStatus/OrderStatus";
import { CustomerMain } from "../main/private/customer/CustomerMain";
import { CustomerTableBooking } from "../main/private/customer/tableBooking/customerTableBooking";
import { CashierBillDetail } from "../main/private/cashier/customerBillDetail/cashier-bill-detail";
import { CustomerBillDetail } from "../main/private/customer/customerBill/customerBill";
import { PaidCustomerBillList } from "../main/private/cashier/paid-customer-bill-list";
import { WaiterTableDetails } from "../main/private/waiter/table-details";
import { TableCreate } from "../main/private/manager/TableCreate/TableCreate";

export const privateRoutes = createBrowserRouter([
  {
    path: '/',
    element: <Dashboard />,
    children: [
      {
        path: "/manager",
        element: <>
          <Outlet />
          {/* <Navigate to={'/manager/inventory'}/> */}
        </>,
        children: [
          
          {
            path:'/manager/table',
            element: <TableCreate/>
          },
          {
            path: '/manager/item-list',
            element: <MenuItemList />
          },{
            path: '/manager/item-details',
            element: <MenuItemDetails />
          },
        ]
      },
      {
        path: "/kitchen",
        element: <><Outlet /></>,
        children: [{
          path: '/kitchen/orders',
          element: <Orders />
        },]
      },
      {
        path: '/customer',
        element: <><CustomerMain /></>,
        children: [
          {
            path: "/customer/table-booking",
            element: <CustomerTableBooking />
          },
          {
            path: '/customer/menu-order',
            element: <CustomerMenuOrder />
          },
          {
            path: '/customer/item-list',
            element: <CustomerMenuItemList />
          },
          {
            path: '/customer/order-status',
            element: <CustomerOrderStatus />
          },
          {
            path: '/customer/bill',
            element: <CustomerBillDetail />
          },
        ]
      },
      {
        path: '/cashier',
        element: <><Outlet /></>,
        children: [
          {
            path: '/cashier/bill-detail',
            element: <CashierBillDetail />
          },
          {
            path: '/cashier/bill-list-unpaid',
            element: <UnpaidCustomerBillList />
          },
          {
            path: '/cashier/bill-list-paid',
            element: <PaidCustomerBillList />
          },
          {
            path: '/cashier/item-list',
            element: < >Todo</>
          },
          {
            path: '/cashier/table-booking-detail',
            element: <TableBookingDetail />
          },
          {
            path: '/cashier/table-booking-status',
            element: <TableBookingStatus />
          },
        ]
      },
      {
        path: '/waiter',
        element: <><Outlet /></>,
        children: [
          {
            path: '/waiter/orders-list',
            element: <WaiterTableDetails />
          },
        ]
      }
    ]
  },

]);