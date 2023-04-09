import React from "react";
import {useQuery} from 'react-query'
import { useLoginQuery } from "./queries";
import { toast } from "react-toastify";

export function Login(){

  const [username, setUsername] = React.useState('')
  const [password, setPassword] = React.useState('')

  const {data, isError, isLoading, mutate: login} = useLoginQuery();

  const onSubmit = (e)=>{
    toast("ehllo")
    e.preventDefault()
  }
	return (
    <div
      class="login-page"
      cz-shortcut-listen="true"
      style={{"minHeight": "495.6px"}}>
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
                onChange={(e)=> setUsername(e.target.value)}/>
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
                  onChange={(e)=> setPassword(e.target.value)}
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
              <a href="forgot-password.html">I forgot my password</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}