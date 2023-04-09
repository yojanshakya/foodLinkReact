import { Outlet } from "react-router-dom";
import { Sidebar } from "./Sidebar";

export function Dashboard() {

	return <div class="hold-transition sidebar-mini">
		<div class="wrapper">
			{/* <!-- Navbar --> */}
			<nav class="main-header navbar navbar-expand navbar-white navbar-light">
				{/* <!-- Left navbar links --> */}
				<ul class="navbar-nav">
					<li class="nav-item">
						<a class="nav-link" data-widget="pushmenu" href="#" role="button"
						><i class="fas fa-bars"></i></a>
					</li>
				</ul>
			</nav>

			<Sidebar/>
			<Outlet />
		</div>
	</div>
}