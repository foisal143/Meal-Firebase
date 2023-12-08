import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Product from '../Product/Product';

const Products = () => {
  const { meals } = useLoaderData();
  console.log(meals);
  return (
    <div className="my-20">
      <h3 className="text-center mb-12 text-3xl font-bold">All Meal here </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-5 md:px-12">
        {meals.map(meal => (
          <Product key={meal.idMeal} meal={meal}></Product>
        ))}
      </div>
    </div>
  );
};

export default Products;
