import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
const handleFormSubmit = e =>{
    e.preventDefault()
    const form = new FormData(e.target)
    const name = form.get('name')
    const photo = form.get('photo')
    const email = form.get('email')
    const password = form.get('password')
    console.log(name, email, password, 'here is your all information');
}


    return (
      <main className="flex items-center justify-center">
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl ">
          <form onSubmit={handleFormSubmit} className="card-body">
            <h1 className="text-2xl py-3 text-center font-bold">
              Register now!
            </h1>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="input input-bordered"
                required
              />
            </div>
            {/*  */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo Url</span>
              </label>
              <input
                type="text"
                name="photo"
                placeholder="photo Url"
                className="input input-bordered"
                required
              />
            </div>
            {/*  */}
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
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Register</button>
            </div>
          </form>
          <p className="text-center py-3">
            Already Have account?{" "}
            <Link className="font-bold" to="/auth/login">
              Login
            </Link>
          </p>
        </div>
      </main>
    );
};

export default Register;