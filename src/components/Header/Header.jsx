import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../ContextProvaider/ContextProvaider';

const Header = () => {
  const { user, logOut } = useContext(UserContext);

  const handlerSignOut = () => {
    logOut()
      .then(() => {})
      .catch(er => console.log(er.message));
  };
  return (
    <nav className="navbar flex justify-between items-center px-5 md:px-12 bg-base-300">
      <Link to="/">
        <button className="btn btn-ghost text-xl">MEAL ROUT</button>
      </Link>
      <div className="flex gap-10">
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/review-product">Review Product</Link>
        {user ? '' : <Link to="/login">Login</Link>}
      </div>
      {user && (
        <div>
          <span>{user && user.displayName}</span>

          <button onClick={handlerSignOut} className="btn btn-primary ms-2">
            SignOut
          </button>
        </div>
      )}
    </nav>
  );
};

export default Header;
