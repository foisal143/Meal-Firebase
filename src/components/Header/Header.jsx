import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../ContextProvaider/ContextProvaider';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
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
      <span
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden cursor-pointer"
      >
        {' '}
        {isOpen ? (
          <XMarkIcon className="w-6 h-6" />
        ) : (
          <Bars3Icon className="h-6 w-6" />
        )}{' '}
      </span>
      <div
        className={`flex gap-5 z-10 lg:gap-10 lg:static absolute right-0 ${
          isOpen ? 'top-16 bg-slate-200 p-5' : '-top-96'
        } flex-col lg:flex-row duration-500`}
      >
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/review-product">Review Product</Link>
        {user ? '' : <Link to="/login">Login</Link>}
        {user && (
          <div className="block lg:hidden">
            <span>{user && user.displayName}</span>

            <button onClick={handlerSignOut} className="btn btn-primary ms-2">
              SignOut
            </button>
          </div>
        )}
      </div>
      {user && (
        <div className="hidden lg:block">
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
