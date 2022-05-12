import React from 'react';
import './Items.css';

const Items = (props) => {
    const {car} = props
    return (
      <div className=" col-12 col-md-6 col-lg-4 my-1 d-flex justify-center">
        <div className="rounded-3 item-card bg-white p-2 border-1">
          <h4 className='my-2'>{car.name}</h4>
          <img className='rounded' src={car.picture} alt="" />
          <div className="mt-10">
            <h6 className="text-red-500">Price: {car.price}</h6>
            <h5>distributor: {car.supplier}</h5>
            <p className="text-gray-600 font-medium">
              About: {car.description}
            </p>
            <button  className="bg-red-300 w-100 text-white hover:bg-red-400 duration-300 font-semibold text-xl  py-2 border-2 border-red-400 bottom-0">
              Update
            </button>
          </div>
        </div>
      </div>
    );
};

export default Items;