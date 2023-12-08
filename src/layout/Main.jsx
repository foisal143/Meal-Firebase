import React, { createContext, useState } from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
export const MealsContext = createContext(null);
const Main = () => {
  const { meals } = useLoaderData();
  const [meal, setMeal] = useState([]);
  return (
    <div>
      <MealsContext.Provider value={[meal, setMeal]}>
        <Header></Header>
        <div className="min-h-[calc(100vh-160px)]">
          <Outlet></Outlet>
        </div>
        <Footer></Footer>
      </MealsContext.Provider>
    </div>
  );
};

export default Main;
