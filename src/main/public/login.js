import React from "react";
import { useQuery } from 'react-query'
import { useLoginQuery } from "./queries";
import { toast } from "react-toastify";
import { NavLink } from "react-router-dom";

export function Login() {

  const [username,setUsername] = React.useState('')
  const [password,setPassword] = React.useState('')

  const { data,isError,isLoading,mutate: login } = useLoginQuery();

  const onSubmit = async (e) => {
    e.preventDefault()

    console.log(login({
      identifier: username,
      password
    }))

  }

  return (
    <section class="vh-100" style={{ "backgroundImage": `url("../../dist/img/loginBackground.jpg")` }}>
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
                  <div class="card-body p-4 p-lg-5 text-black">
                    <form onSubmit={onSubmit}>
                      {/* <div class="d-flex align-items-center mb-3 pb-1">
                        <div style={{width:"5rem"}}>

                          <img
                            src="../../dist/img/main/Logo.png"
                            alt="AdminLTE Logo"
                            class="brand-image img-circle img-fluid"
                            style={{ opacity: 1 }}
                          />
                        </div>
                        <span class="display-4 ml-3 mb-0">Food Link</span>
                      </div> */}

                      <h5 class="fw-normal mb-3 pb-3" style={{ "letter-spacing": "1px" }}>Sign into your account</h5>

                      <div class="form-outline mb-4">
                        <input type="email" id="form2Example17" class="form-control form-control-lg"
                          placeholder="Email"
                          value={username}
                          onChange={(e) => setUsername(e.target.value)} />
                        <label class="form-label" for="form2Example17">Email address</label>
                      </div>

                      <div class="form-outline mb-4">
                        <input type="password" id="form2Example27" class="form-control form-control-lg" 
                          placeholder="Password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)} />
                        <label class="form-label" for="form2Example27" >Password</label>
                      </div>

                      <div class="pt-1 mb-4">
                        <button class="btn btn-dark btn-lg btn-block" style={{"backgroundColor": "#F2a900", color: "white", border: "none"}} >Login</button>
                      </div>

                      <a class="small text-muted" href="#!">Forgot password?</a>
                      <p class="mb-5 pb-lg-2" style={{ "color": "#393f81" }}>Don't have an account? <a href="#!"
                        style={{ "color": "#393f81" }}>Register here</a></p>
                      <a href="#!" class="small text-muted">Terms of use.</a>
                      <a href="#!" class="small text-muted">Privacy policy</a>
                    </form>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )

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
          <div class="card-body login-card-body">
            <p class="login-box-msg">Sign in to start your session</p>
            <form
              onSubmit={onSubmit}
            >
              <div class="input-group mb-3">
                <input
                  type="text"
                  class="form-control"
                  id="email"
                  placeholder="Email"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)} />
                <div class="input-group-append">
                  <div class="input-group-text">
                    <span class="fas fa-envelope"></span>
                  </div>
                </div>
              </div>
              <div class="input-group mb-3">
                <input
                  id="password"
                  type="password"
                  class="form-control"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <div class="input-group-append">
                  <div class="input-group-text">
                    <span class="fas fa-lock"></span>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-8"></div>

                <div class="col-4">
                  <button
                    class="btn btn-primary btn-block">
                    Sign In
                  </button>
                </div>
              </div>
            </form>
            <p class="mb-1">
              <NavLink to="/register">Click here to register</NavLink>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}