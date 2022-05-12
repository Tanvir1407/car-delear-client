import React, { useEffect, useState } from 'react';
import Items from './Items/Items';

const Inventory = () => {
    const [cars, setCars] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5000/cars")
            .then(res => res.json())
            .then(data => setCars(data))
        
    },[])
    return (
      <div className='bg-gray-100 pb-6'>
        <h2 className="text-center py-10 mb-8 "> Inventory Items</h2>
        <div className="row ">
          {cars.map((car) => (
            <Items key={car._id} car={car}></Items>
          ))}
        </div>
      </div>
    );
};

export default Inventory;