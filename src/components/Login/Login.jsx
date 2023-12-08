import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../ContextProvaider/ContextProvaider';

const Login = () => {
  const { loginUser } = useContext(UserContext);
  const handlerFormSubmit = e => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    loginUser(email, password)
      .then(result => {
        console.log(result.user);
      })
      .catch(er => console.log(er.message));
  };
  return (
    <div className="hero min-h-[calc(100vh-80px)] ">
      <div className="hero-content w-full lg:w-1/2 flex-col ">
        <div className="text-center ">
          <h1 className="text-4xl font-bold">Login Please!</h1>
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handlerFormSubmit} className="card-body">
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
                placeholder="password"
                name="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
                <Link to="/register" className="label-text-alt link link-hover">
                  New in this website?
                </Link>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
