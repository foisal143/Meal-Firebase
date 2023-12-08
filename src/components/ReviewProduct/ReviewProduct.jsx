import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { MealsContext } from '../../layout/Main';
import ReviewCart from '../ReviewCart/ReviewCart';

const ReviewProduct = () => {
  const [meal, setMeal] = useContext(MealsContext);
  console.log(meal);
  const handlerRemove = id => {
    const rest = meal.filter(ml => parseInt(ml.idMeal) !== parseInt(id));
    setMeal(rest);
  };
  return (
    <div className="my-20">
      <h3 className="text-2xl font-semibold text-center mb-12">
        Review Meals here: {meal.length}
      </h3>
      {meal.length === 0 && <p className="text-center ">No Product added</p>}
      <div>
        {meal &&
          meal.map(ml => (
            <ReviewCart
              key={ml.idMeal}
              handlerRemove={handlerRemove}
              ml={ml}
            ></ReviewCart>
          ))}
      </div>
    </div>
  );
};

export default ReviewProduct;
