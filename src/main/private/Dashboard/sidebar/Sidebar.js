import { Link } from "react-router-dom"
import { sidebarItems } from "./sidebarItems"
import { getUserType } from "../../../../utils/auth/auth"

export function Sidebar() {

	

	return (
		<aside class="main-sidebar sidebar-light-primary elevation-4">
			<a href="../../index3.html" class="brand-link">
				<img
					src="../../dist/img/main/Logo.png"
					alt="AdminLTE Logo"
					class="brand-image img-circle "
					style={{ opacity: 1 }}
				/>
				<span class="brand-text font-weight-light">Food Link</span>
			</a>

			{/* <!-- Sidebar --> */}
			<div class="sidebar">
				{/* <!-- SidebarSearch Form --> */}
				<div class="form-inline">
					<div class="input-group" data-widget="sidebar-search">
						<input
							class="form-control form-control-sidebar"
							type="search"
							placeholder="Search"
							aria-label="Search"
						/>
						<div class="input-group-append">
							<button class="btn btn-sidebar">
								<i class="fas fa-search fa-fw"></i>
							</button>
						</div>
					</div>
				</div>

				{/* <!-- Sidebar Menu --> */}
				<nav class="mt-2">
					<ul
						class="nav nav-pills nav-sidebar flex-column"
						data-widget="treeview"
						role="menu"
						data-accordion="false"
					>

						{console.log(sidebarItems["waiter"], "slkf")}
						{
							sidebarItems[getUserType()]?.map(({text, path})=>{
								return <li class="nav-item">
								<Link to={path} class="nav-link">
									{/* todo icons */}
									{/* <i class="nav-icon fas fa-light fa-dollar-sign "></i> */}
									<p>
										{text}
									</p>
								</Link>
							</li>
							})
						}
						
						

					</ul>
				</nav>
				{/* <!-- /.sidebar-menu --> */}
			</div>
			{/* <!-- /.sidebar --> */}
		</aside>)
}



const sidebarItemsOld = [
	{
		text: 'Manager Item List',
		path: '/manager/item-list'
	},
	{
		text: 'Manager Item Details',
		path: '/manager/item-details'
	},
	{
		text: 'Kitchen Orders',
		path: '/kitchen/orders'
	},
	
	{
		text: 'Customer Item List',
		path: '/customer/item-list'
	},
	{
		text: 'Customer Order item list',
		path: '/customer/menu-order'
	},
	{
		text: 'Customer Order Status',
		path: '/customer/order-status'
	},
	{
		text: 'Cashier bill detail',
		path: '/cashier/bill-detail'
	},
	{
		text: 'Cashier bill list',
		path: '/cashier/bill-list'
	},
	{
		text: 'Cashier item list',
		path: '/cashier/item-list'
	},
	{
		text: 'Cashier table booking detail',
		path: '/cashier/table-booking-detail'
	},
	{
		text: 'Cashier table booking status',
		path: '/cashier/table-booking-status'
	},
]