import { Link, useLocation } from "react-router-dom"
import { sidebarItems } from "./sidebarItems"
import { getUserType } from "../../../../utils/auth/auth"
import './sidebar.css'

export function Sidebar() {

	const location = useLocation()

	return (
		<aside class="main-sidebar sidebar-light-primary elevation-4" style={{ backgroundColor: "#272727",color: "white" }}>
			<a href="../../index3.html" className="text-white" style={{borderBottom: "1px solid white"}} >
				<div style={{ height: "100%" }}>
					<img
						src="../../dist/img/main/LogoWhite.png"
						alt="AdminLTE Logo"
						class="img-fluid"
						style={{ opacity: 1,width: "100%",padding: "0 5.25rem" }}
					/>
				</div>

			</a>
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

			{/* <!-- Sidebar --> */}
			<div class="sidebar ">
				{/* <!-- Sidebar Menu --> */}
				<nav class="mt-2">
					<ul
						class="nav nav-pills nav-sidebar flex-column"
						data-widget="treeview"
						role="menu"
						data-accordion="false"
					>
						{
							sidebarItems[getUserType()]?.map(({ text,path }) => {
								return <li class="nav-item ">
									<Link to={path} class={`nav-link text-white ${location.pathname == path ? "activated" : ""}`}
									>
										<p className="text-white">
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