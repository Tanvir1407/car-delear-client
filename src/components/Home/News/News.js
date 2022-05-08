import React from 'react';
import './News.css'

const News = () => {
    return (
      <div>
        <p className="text-gray-400 text-center mb-0 mt-4">
          Read our latest news
        </p>
        <h1 className="text-gray-800 text-center font-bold">LATEST NEWS</h1>
        <div className=" d-flex flex-col-reverse flex-md-row">
          <div className="m-12 new-img">
            {" "}
            <img
              src={
                "https://c4.wallpaperflare.com/wallpaper/6/790/348/car-honda-civic-type-r-vehicle-honda-civic-wallpaper-preview.jpg"
              }
              alt=""
            />
          </div>
          <div className="m-12">
            <h5 className="max-w-lg">
              PORSCHE 911 IS TEXT OF THE PRINTIN A GALLEY OF TYPE AND BLED IT TO
              MAKE A TYPE SPECIMEN BOOK.
            </h5>
            <p className="mt-4 text-gray-400">
              NOVEMBER 29, 2021 |{" "}
              <span className="text-lg font-bold text-red-600">
                POST BY JOHN DOE
              </span>
            </p>
            <p className="max-w-lg mt-12 text-lg text-base text-gray-400">
              White is a very popular colour with car buyers, but is it
              something you should consider for your own new car? <br />
              <br /> To help point you in the right direction, here’s carwow’s
              guide on the pros and cons of picking white paint.
            </p>
            <button className="text-gray-500 duration-500 ease-linear hover:bg-red-600 hover:text-white  font-medium border px-3 py-2">Read More </button>
          </div>
        </div>
      </div>
    );
};

export default News;