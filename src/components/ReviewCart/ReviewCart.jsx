import React from 'react';

const ReviewCart = ({ ml, handlerRemove }) => {
  const { strMeal, strMealThumb, strCategory } = ml;
  return (
    <div className="lg:w-1/2 mx-auto">
      <div className="my-5 gap-5 border p-1 flex justify-between ">
        <img className="w-24 h-24" src={strMealThumb} alt="" />
        <div className="flex-grow flex justify-between items-center">
          <div>
            <h4 className="text-xl font-semibold">{strMeal}</h4>
            <p>
              <span className="font-semibold text-xl">Category:</span>{' '}
              {strCategory}
            </p>
          </div>
          <button
            onClick={() => handlerRemove(ml.idMeal)}
            className="w-5  h-5 flex justify-center text-red-500 items-center rounded-full bg-slate-200 p-5"
          >
            D
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReviewCart;
