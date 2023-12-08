import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { MealsContext } from '../../layout/Main';

const ProductDetails = () => {
  const { meals } = useLoaderData();
  const [meal, setMeal] = useContext(MealsContext);

  const handlerAddToReview = m => {
    const newAr = [...meal, m];
    setMeal(newAr);
  };
  const { idMeal, strMeal, strMealThumb, strInstructions, strYoutube } =
    meals[0];
  return (
    <div className="flex my-20 gap-20 justify-center  px-5 md:px-12">
      <div className="w-1/2">
        <img src={strMealThumb} alt="" />
      </div>
      <div className="w-2/5 mx-auto">
        <h2 className="text-2xl mb-5 font-bold">{strMeal}</h2>
        <p>
          <span className="font-semibold text-xl">Instraction:</span>{' '}
          {strInstructions}
        </p>
        <p className="font-semibold text-xl">
          Youtube:{' '}
          <a className="text-base btn-link" href={strYoutube}>
            {strYoutube}{' '}
          </a>
        </p>
        <button
          onClick={() => handlerAddToReview(meals[0])}
          className="btn mt-5 btn-primary"
        >
          Add To Reveiw
        </button>
      </div>
    </div>
  );
};

export default ProductDetails;
