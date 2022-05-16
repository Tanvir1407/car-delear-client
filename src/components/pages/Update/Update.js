import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useInventory from "../../../Hooks/useInventory";
import "./Update.css";

const Update = () => {
  const id = useParams();
  const [info] = useInventory(id.id);
  const [quantity, setQuantity] = useState(0);

  useEffect(() => {
    fetch(`https://pure-stream-67963.herokuapp.com/delivered/${id.id}`)
      .then((res) => res.json())
      .then((data) => setQuantity(data.carQuantity));
  }, [quantity]);

  //delevered functionality
  const handleDelivered = () => {
    const NewQuantity = quantity - 1;
    setQuantity(NewQuantity);
    const updateQuantity = { Quantity: quantity };
    console.log(NewQuantity);
    fetch(`https://pure-stream-67963.herokuapp.com/update/${id.id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateQuantity),
    });
  };

  // add quantity
  const handleAddQuantity = (e) => {
    e.preventDefault();
    const insertQuantity = parseInt(e.target.quantity.value);
    const totalQuantity = quantity + insertQuantity;
    const newQuantity = { Quantity: totalQuantity };
    setQuantity(newQuantity.Quantity);
    fetch(`https://pure-stream-67963.herokuapp.com/insert/${id.id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newQuantity),
    });

    e.target.reset();
  };
  return (
    <div className="container mt-16">
      <div className="row border-2 p-3 rounded ">
        <h3 className="text-center py-2 ">{info.name}</h3>
        <div className="row">
          <img
            className="col-md-4 border py-3 rounded"
            src={info.picture}
            alt=""
          />
          <div className="col-md-8 px-4 info">
            <h4>Distributor: {info.supplier}</h4>
            <h5 className="text-red-400">Price: {info.price}</h5>
            <p className="text-green-500 font-bold">Quantity: {quantity}</p>
            <p className="text-gray-600 font-serif">
              About: {info.description}
            </p>
            <div className="d-flex flex-column flex-md-row items-center justify-between">
              <button
                onClick={handleDelivered}
                className=" h-10 px-3 bg-red-500 duration-150 text-white rounded hover:bg-red-600"
              >
                Delivered
              </button>
              <div className="my-3">
                <form
                  onSubmit={handleAddQuantity}
                  className="d-flex flex-column flex-sm-row"
                >
                  <input
                    className="p-2 focus:outline-none border rounded text-green-600 "
                    type="number"
                    id="quantity"
                    name="quantity"
                    min="1"
                  />
                  <input
                    className="py-2  px-3 bg-green-500 duration-150 text-white rounded hover:bg-green-600"
                    type="submit"
                    value="Insert"
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Update;
