import React from "react";
import { useRegister } from "./queries";
import { Form,Formik } from "formik";

export function Register() {
	const { data,isError,isLoading,mutate: register } = useRegister();

	const onSubmit =  (values) => {
		register(values)
	}

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
							({ values,handleChange,handleBlur, submitForm }) => {
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