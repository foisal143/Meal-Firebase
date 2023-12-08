import React, { useContext } from 'react';
import { UserContext } from '../../ContextProvaider/ContextProvaider';
import { Link, Navigate } from 'react-router-dom';

const PrivateRouter = ({ children }) => {
  const { user } = useContext(UserContext);
  if (user) {
    return children;
  }
  return <Navigate to="/login" replace={true}></Navigate>;
};

export default PrivateRouter;
