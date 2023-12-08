import React from 'react';
import DelicousFood from '../DelicousFood/DelicousFood';

const Home = () => {
  return (
    <div className="my-20 flex justify-center flex-col">
      <div className="carousel w-10/12 mx-auto">
        <div
          id="slide1"
          className="carousel-item h-[75vh] rounded-md overflow-hidden relative w-full "
        >
          <img
            src="https://www.themealdb.com/images/media/meals/ursuup1487348423.jpg"
            className="w-full h-full"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div
          id="slide2"
          className="carousel-item relative h-[75vh] rounded-md overflow-hidden  w-full"
        >
          <img
            src="https://www.themealdb.com/images/media/meals/yqwtvu1487426027.jpg"
            className="w-full h-full"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div
          id="slide3"
          className="carousel-item h-[75vh] rounded-md overflow-hidden  relative w-full"
        >
          <img
            src="https://www.themealdb.com/images/media/meals/kos9av1699014767.jpg"
            className="w-full h-full"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div
          id="slide4"
          className="carousel-item h-[75vh] rounded-md overflow-hidden  relative w-full"
        >
          <img
            src="https://www.themealdb.com/images/media/meals/g373701551450225.jpg"
            className="w-full h-full"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
      <DelicousFood></DelicousFood>
    </div>
  );
};

export default Home;
