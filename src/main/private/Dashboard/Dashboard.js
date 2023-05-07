import { Outlet, useNavigate } from "react-router-dom";
import { Sidebar } from "./sidebar/Sidebar";
import { useUserProfile } from "./queries";
import { getUserType, logout, } from "../../../utils/auth/auth";
import React from "react";
import { USER_TYPES } from "../../../config/constants";

export function Dashboard() {

	const { data: userProfileData } = useUserProfile();

	const onLogout = ()=>{
		logout()
	}

	const navigate = useNavigate();

	React.useEffect(()=>{
		if(getUserType() == USER_TYPES.manager){
			navigate("/manager/item-list")
		}else if (getUserType()== USER_TYPES.chef){
			navigate("/kitchen/orders")
		}else if (getUserType()== USER_TYPES.customer){
			navigate("/customer/table-booking")
		}else if (getUserType() == USER_TYPES.cashier){
			navigate('/cashier/bill-list-unpaid');
		}else{
			navigate('/waiter/orders-list');
		}
	},[])

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

				<ul class="navbar-nav ml-auto mr-4">
					<li class="nav-item dropdown show">
						<a class="nav-link" data-toggle="dropdown" href="#" aria-expanded="true">
							<i class="far fa-user"></i>
						</a>
						<div class="dropdown-menu dropdown-menu-md dropdown-menu-right show" style={{ "left": "inherit","right": "0px" }}>
							<span class="dropdown-item dropdown-header">
								{
									`${userProfileData?.firstName} ${userProfileData?.lastName} (${userProfileData?.userType})`
									
								}
							</span>
							<div class="dropdown-divider"/>
							
							<div class="dropdown-divider">
							</div>
							<button onClick={()=> {
								onLogout();
							}} class="dropdown-item ">
								<span class="text-sm">Log Out</span>
								<i class="float-right fas fa-minus-circle"></i> 
							</button>
							<div class="dropdown-divider"></div>
						</div>
					</li>
				</ul>
			</nav>
			<Sidebar />
			<Outlet />
		</div>
	</div>
}