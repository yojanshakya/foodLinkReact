import { USER_TYPES } from "../../../../config/constants"

export const sidebarItems = {
	[USER_TYPES.manager]: [
		{
			text: 'Item List',
			path: '/manager/item-list'
		},
		{
			text: 'Unpaid bill list',
			path: '/cashier/bill-list-unpaid'
		},
		{
			text: 'Paid bill list',
			path: '/cashier/bill-list-paid'
		},
		{
			text: 'Table Management',
			path: '/manager/table'
		},
	],
	[USER_TYPES.chef]: [
		{
			text: 'Orders',
			path: '/kitchen/orders'
		},

	],
	[USER_TYPES.customer]: [
		{
			text: 'Book Table',
			path: '/customer/table-booking'
		},
		{
			text: 'Menu',
			path: '/customer/item-list'
		},
		{
			text: 'Order item list',
			path: '/customer/menu-order'
		},
		{
			text: 'Order Status',
			path: '/customer/order-status'
		},
		{
			text: 'Bill',
			path: '/customer/bill'
		},
	],
	[USER_TYPES.cashier]: [
		// {
		// 	text: 'Bill detail',
		// 	path: '/cashier/bill-detail'
		// },
		{
			text: 'Unpaid bill list',
			path: '/cashier/bill-list-unpaid'
		},
		{
			text: 'Paid bill list',
			path: '/cashier/bill-list-paid'
		},
		{
			text: 'Table booking detail',
			path: '/cashier/table-booking-detail'
		},
	],
	[USER_TYPES.waiter]: [
		{
			text: 'Orders List',
			path: '/waiter/orders-list'
		},
	],
}