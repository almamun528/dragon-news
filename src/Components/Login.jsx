import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../ContextApi/AuthProvider';


const Login = () => {
    const {loginUser,setUser} = useContext(AuthContext)
    const location = useLocation()
    const [error, setError] = useState({})
    const navigate = useNavigate()
    const handleLoginForm = e =>{
        e.preventDefault();
        const form = new FormData(e.target);
        const email = form.get("email");
        const password = form.get("password");
        // this function is for login/sign in into website 
        loginUser( email, password)
        .then(result =>{
            const user = result.user
            setUser(user)
            navigate(location?.state? location.state : '/')

        })
        .catch(err=>{
           setError({...error, login:err.code })
        })
        console.log(email, password);
    }

    return (
      <main className="flex items-center justify-center">
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form onSubmit={handleLoginForm} className="card-body">
            <h1 className="text-3xl font-bold text-center py-2">Login now!</h1>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              {/*  */}
              {error.login && <label className="label text-red-500">
               { error.login}
                </label>}
              {/*  */}
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
          <p className="text-center py-2">
            New here? please{" "}
            <Link className="font-bold" to="/auth/register">
              Register
            </Link>{" "}
          </p>
        </div>
      </main>
    );
};

export default Login;