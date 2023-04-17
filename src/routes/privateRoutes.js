import { Outlet,createBrowserRouter } from "react-router-dom";
import { Inventory } from "../main/private/manager/inventory";
import { MenuItemList } from "../main/private/manager/MenuItemList/menu-item-list";
import { Orders } from "../main/private/kitchen/orders/orders";
import { MenuItemDetails } from "../main/private/manager/MenuItemDetails/menu-item-details";
import { CustomerMenuItemList } from "../main/private/customer/customerItemList/CustomerItemList.js";
import { CustomerMenuOrder } from "../main/private/customer/menuOrder/MenuOrder";
import { CustomerBillDetail } from "../main/private/cashier/customerBillDetail/customer-bill-detail";
import { CustomerBillList } from "../main/private/cashier/customer-bill-list";
import { TableBookingDetail } from "../main/private/cashier/table-booking-detail";
import { TableBookingStatus } from "../main/private/cashier/table-booking-status";
import { Dashboard } from "../main/private/Dashboard/Dashboard";
import { CustomerOrderStatus } from "../main/private/customer/orderStatus/OrderStatus";
import { CustomerMain } from "../main/private/customer/CustomerMain";

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
        children: [{
          path: '/manager/inventory',
          element: <Inventory />
        },{
          path: '/manager/item-list',
          element: <MenuItemList />
        },{
          path: '/manager/item-details',
          element: <MenuItemDetails />
        }]
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
        ]
      },
      {
        path: '/cashier',
        element: <><Outlet /></>,
        children: [
          {
            path: '/cashier/bill-detail',
            element: <CustomerBillDetail />
          },
          {
            path: '/cashier/bill-list',
            element: <CustomerBillList />
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
    ]
  },

]);