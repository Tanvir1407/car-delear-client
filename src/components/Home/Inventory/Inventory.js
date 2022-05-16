import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Items from "./Items/Items";

const Inventory = () => {
  const [cars, setCars] = useState([]);
  useEffect(() => {
    fetch("https://pure-stream-67963.herokuapp.com/cars")
      .then((res) => res.json())
      .then((data) => setCars(data));
  }, []);
  return (
    <div className="bg-gray-100 pb-6">
      <h2 className="text-center py-10 mb-8 "> Inventory Items</h2>
      <div className="row ">
        {cars.map((car) => (
          <Items key={car._id} car={car}></Items>
        ))}
      </div>
      <div className="d-flex justify-center m-10">
        <Link to="/manageinventory">
          {" "}
          <button className="border-2 text-2xl border-red-400 hover:text-white duration-300 hover:bg-red-400 py-2 px-4 font-bold text-red-500 ">
            Manage Inventory
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Inventory;
