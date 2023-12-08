import React from 'react';

const DelicousFood = () => {
  return (
    <div className="my-32 flex flex-col lg:flex-row  justify-between items-center px-5 md:px-12">
      <div className="w-2/5 p-12">
        <img
          className="rounded-md"
          src="https://www.themealdb.com/images/media/meals/oe8rg51699014028.jpg"
          alt=""
        />
      </div>
      <div className="w-2/5">
        <h3 className="text-3xl font-bold">Wellcome To Meal Db</h3>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel
          consectetur atque facilis! Molestias unde quas consectetur delectus
          sunt quod voluptatum exercitationem illo commodi expedita repellat,
          repellendus consequatur necessitatibus beatae maxime?
        </p>
      </div>
    </div>
  );
};

export default DelicousFood;
