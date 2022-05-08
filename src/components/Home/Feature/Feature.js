import React from 'react';

const Feature = () => {
    return (
      <div className="mx-auto w-100">
        <div className="d-flex flex-column-reverse flex-md-row bg-black py-16">
          <div className=" ">
            <img
              width={700}
              src={
                "https://i.ibb.co/TgzkckZ/wp4114933-lamborghini-car-wallpapers.jpg"
              }
              alt=""
            />
          </div>
          <div className=" my-16  ">
            <h1 className=" text-blue-500 text-center font-extrabold ">
              {" "}
              LAMBORGHINI
            </h1>
            <p className="italic font-semibold text-yellow-50 text-center text-2xl">
              Get the Porsche You always Wanted <br />
              <span className="text-4xl text-red-500 not-italic font-bold">
                450$
              </span>
              <br /> per month
            </p>
            <p className="text-yellow-50 font-semibold text-center text-2xl">
              LIMITED TIME OFFER!
            </p>
            <p className="text-red-400 hover:cursor-pointer duration-300 hover:text-red-600 text-center text-xl">
              Read More
            </p>
          </div>
        </div>
      </div>
    );
};

export default Feature;