import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../ContextProvaider/ContextProvaider';
import { updateProfile } from 'firebase/auth';

const Register = () => {
  const { createUser } = useContext(UserContext);
  const handlerFromSubmit = e => {
    e.preventDefault();
    const email = e.target.email.value;
    const name = e.target.name.value;
    const password = e.target.password.value;
    createUser(email, password)
      .then(result => {
        const logeduser = result.user;
        updateUser(logeduser, name);
      })
      .catch(er => console.log(er.message));
  };
  const updateUser = (user, name) => {
    updateProfile(user, { displayName: name })
      .then(console.log('success'))
      .catch(er => console.log(er.message));
  };
  return (
    <div className="hero min-h-[calc(100vh-80px)] ">
      <div className="hero-content w-full lg:w-1/2 flex-col ">
        <div className="text-center ">
          <h1 className="text-4xl font-bold">Register Please!</h1>
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handlerFromSubmit} className="card-body">
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
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                name="email"
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
                <Link to="/login" className="label-text-alt link link-hover">
                  Already have an account?
                </Link>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Register</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
