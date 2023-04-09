import { Navigate,Outlet,createBrowserRouter } from "react-router-dom";
import { TableDetails } from "../main/private/waiter/table-details";
import { TableStatus } from "../main/private/waiter/table-status";
import { Inventory } from "../main/private/manager/inventory";
import { MenuItemList } from "../main/private/kitchen/menu-item-list";
import { Orders } from "../main/private/kitchen/orders";
import { MenuItemDetails } from "../main/private/kitchen/menu-item-details";
import { CustomerMenuItemList } from "../main/private/customer/MenuItemList";
import { CustomerMenuOrder } from "../main/private/customer/MenuOrder";
import { CustomerOrderList } from "../main/private/customer/OrderList";
import { CustomerBillDetail } from "../main/private/cashier/customer-bill-detail";
import { CustomerBillList } from "../main/private/cashier/customer-bill-list";
import { TableBookingDetail } from "../main/private/cashier/table-booking-detail";
import { TableBookingStatus } from "../main/private/cashier/table-booking-status";
import { Dashboard } from "../main/private/Dashboard/Dashboard";

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
        }]
      },
      {
        path: "/kitchen",
        element: <><Outlet /></>,
        children: [{
          path: '/kitchen/item-list',
          element: <MenuItemList />
        },{
          path: '/kitchen/orders',
          element: <Orders />
        },{
          path: '/kitchen/item-details',
          element: <MenuItemDetails />
        }]
      },
      {
        path: '/customer',
        element: <><Outlet /></>,
        children: [
          {
            path: '/customer/item-list',
            element: <CustomerMenuItemList />
          },
          {
            path: '/customer/menu-order',
            element: <CustomerMenuOrder />
          },
          {
            path: '/customer/item-list',
            element: <CustomerOrderList />
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
            element: <CustomerOrderList />
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