import React from 'react';

const Feature = () => {
    return (
      <div>
        <div className="d-flex bg-black py-16">
          <div className="w-50">
            <img
              src={
                "https://i.ibb.co/TgzkckZ/wp4114933-lamborghini-car-wallpapers.jpg"
              }
              alt=""
            />
          </div>
          <div className=" my-16 w-50">
            <h1 className=" text-blue-500 text-center font-extrabold text-6xl">
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
          </div>
        </div>
      </div>
    );
};

export default Feature;