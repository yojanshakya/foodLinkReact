import React from "react";
import { useRegister } from "./queries";
import { Form,Formik } from "formik";
import { NavLink } from "react-router-dom";

export function Register() {
	const { data,isError,isLoading,mutate: register } = useRegister();

	const onSubmit = (values) => {
		register(values)
	}

	return <section class="vh-100" style={{ "backgroundImage": `url("../../dist/img/loginBackground.jpg")` }}>
		<div class="container py-5 h-100">
			<div class="row d-flex justify-content-center align-items-center h-100">
				<div class="col col-xl-10">
					<div class="card" style={{ "border-radius": "1rem" }}>
						<div class="row g-0">
							<div class="col-md-6 col-lg-5 d-none d-md-block">
								<img src="../../dist/img/loginImage.jpg"
									alt="login form" class="img-fluid" style={{ "border-radius": "1rem 0 0 1rem" }} />
							</div>
							<div class="col-md-6 col-lg-7 d-flex align-items-center">
								<div class="card-body  text-black" style={{ position: "absolute",height: "100%",overflow: "scroll",width: "100%" }}>
									<Formik
										initialValues={{
											"username": "",
											"email": "",
											"password": "",
											"rePassword": "",
											"firstName": "",
											"middleName": "",
											"lastName": "",
											"userType": "customer"
										}}
										onSubmit={(values) => {
											onSubmit(values)
										}}
									>
										{
											({ values,handleChange,handleBlur,submitForm }) => {
												return <>
													<div class="d-flex align-items-center justify-content-center mb-3 pb-1">
														<div style={{ width: "6rem" }}>

															<img
																src="../../dist/img/main/Logo.png"
																alt="AdminLTE Logo"
																class="brand-image img-circle img-fluid"
																style={{ opacity: 1 }}
															/>
														</div>
													</div>
													<h5 class="fw-normal mb-3 pb-3" style={{ "letter-spacing": "1px" }}>Create new account</h5>

													<Form
														onSubmit={(e) => {
															e.preventDefault()
															submitForm()
														}}
													>
														<div class="form-group mb-3">
															<label for="exampleInputEmail1">Username</label>
															<input
																type="text"
																class="form-control"
																name="username"
																value={values.username}
																onChange={handleChange}
																onBlur={handleBlur}
															/>
														</div>
														<div class="form-group mb-3">
															<label for="exampleInputEmail1">Email address</label>
															<input
																type="text"
																name="email"
																class="form-control"
																value={values.email}
																onChange={handleChange}
																onBlur={handleBlur}
															/>
														</div>
														<div class="form-group mb-3">
															<label for="exampleInputEmail1">Password</label>
															<input
																type="password"
																class="form-control"
																value={values.password}
																name="password"
																onChange={handleChange}
																onBlur={handleBlur}
															/>
														</div>
														<div class="form-group mb-3">
															<label for="exampleInputEmail1">Re Password</label>
															<input
																type="password"
																class="form-control"
																value={values.rePassword}
																name="rePassword"
																onChange={handleChange}
																onBlur={handleBlur}
															/>
														</div>
														<div class="form-group mb-3">
															<label for="exampleInputEmail1">First Name</label>
															<input
																class="form-control"
																value={values.firstName}
																name="firstName"
																onChange={handleChange}
																onBlur={handleBlur}

															/>
														</div>
														<div class="form-group mb-3">
															<label for="exampleInputEmail1">Middle Name</label>
															<input
																class="form-control"
																value={values.middleName}
																name="middleName"
																onChange={handleChange}
																onBlur={handleBlur}

															/>
														</div>
														<div class="form-group mb-3">
															<label for="exampleInputEmail1">Last Name</label>
															<input
																class="form-control"
																value={values.lastName}
																name="lastName"
																onChange={handleChange}
																onBlur={handleBlur}
															/>
														</div>

														<button
															class="btn btn-primary btn-block" style={{ backgroundColor: "rgb(242, 169, 0)" }}>

															Register
														</button>
														<p class="mb-5 mt-3 pb-lg-2" style={{ "color": "#393f81" }}>Already have an account? <NavLink to="/login"
															style={{ "color": "#F2a900" }}>Login</NavLink></p>

													</Form>

												</>
											}
										}



									</Formik>


								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>

	return (
		<div
			class="login-page"
			cz-shortcut-listen="true"
			style={{ "minHeight": "495.6px" }}>
			<div class="login-box">
				<div class="login-logo">
					Food Link
				</div>

				<div class="card">
					<Formik
						initialValues={{
							"username": "",
							"email": "",
							"password": "",
							"rePassword": "",
							"firstName": "",
							"middleName": "",
							"lastName": "",
							"userType": "customer"
						}}
						onSubmit={(values) => {
							onSubmit(values)
						}}
					>
						{
							({ values,handleChange,handleBlur,submitForm }) => {
								return <div class="card-body login-card-body">
									<h3 class="login-box-msg">Register</h3>
									<Form
										onSubmit={(e) => {
											e.preventDefault()
											submitForm()
										}}
									>
										<div class="form-group mb-3">
											<label for="exampleInputEmail1">Username</label>
											<input
												type="text"
												class="form-control"
												name="username"
												value={values.username}
												onChange={handleChange}
												onBlur={handleBlur}
											/>
										</div>
										<div class="form-group mb-3">
											<label for="exampleInputEmail1">Email address</label>
											<input
												type="text"
												name="email"
												class="form-control"
												value={values.email}
												onChange={handleChange}
												onBlur={handleBlur}
											/>
										</div>
										<div class="form-group mb-3">
											<label for="exampleInputEmail1">Password</label>
											<input
												type="password"
												class="form-control"
												value={values.password}
												name="password"
												onChange={handleChange}
												onBlur={handleBlur}
											/>
										</div>
										<div class="form-group mb-3">
											<label for="exampleInputEmail1">Re Password</label>
											<input
												type="password"
												class="form-control"
												value={values.rePassword}
												name="rePassword"
												onChange={handleChange}
												onBlur={handleBlur}
											/>
										</div>
										<div class="form-group mb-3">
											<label for="exampleInputEmail1">First Name</label>
											<input
												class="form-control"
												value={values.firstName}
												name="firstName"
												onChange={handleChange}
												onBlur={handleBlur}

											/>
										</div>
										<div class="form-group mb-3">
											<label for="exampleInputEmail1">Middle Name</label>
											<input
												class="form-control"
												value={values.middleName}
												name="middleName"
												onChange={handleChange}
												onBlur={handleBlur}

											/>
										</div>
										<div class="form-group mb-3">
											<label for="exampleInputEmail1">Last Name</label>
											<input
												class="form-control"
												value={values.lastName}
												name="lastName"
												onChange={handleChange}
												onBlur={handleBlur}
											/>
										</div>

										<div class="row">
											<div class="col-8"></div>

											<div class="col-4">
												<button
													class="btn btn-primary btn-block">

													Register
												</button>
											</div>
										</div>
									</Form>

								</div>
							}
						}



					</Formik>

				</div>
			</div>
		</div>
	);
}