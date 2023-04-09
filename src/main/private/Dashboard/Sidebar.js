
export function Sidebar(){
	return <aside class="main-sidebar sidebar-light-primary elevation-4">
	{/* <!-- Brand Logo --> */}
	<a href="../../index3.html" class="brand-link">
		<img
			src="../../dist/img/main/Logo.png"
			alt="AdminLTE Logo"
			class="brand-image img-circle "
			style={{opacity: 1}}
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
				{/* <!-- Add icons to the links using the .nav-icon class
			 with font-awesome or any other icon font library --> */}
				<li class="nav-item">
					<a href="./customer-bill-list.html" class="nav-link">
						<i class="nav-icon fas fa-light fa-dollar-sign "></i>
						<p>
							Bills
						</p>
					</a>
				</li>
				<li class="nav-item">
					<a href="./table-booking-status.html" class="nav-link">
						<i class="nav-icon fas fa-table"></i>
						<p>
							Tables
						</p>
					</a>
				</li>

			</ul>
		</nav>
		{/* <!-- /.sidebar-menu --> */}
	</div>
	{/* <!-- /.sidebar --> */}
</aside>
}