import React from 'react';
import { Link } from 'react-router-dom';

const Product = ({ meal }) => {
  return (
    <Link to={`/products/${meal.idMeal}`}>
      <div className="cursor-pointer">
        <img src={meal.strMealThumb} alt="" />
        <h3 className="font-semibold text-xl">{meal.strMeal}</h3>
      </div>
    </Link>
  );
};

export default Product;
