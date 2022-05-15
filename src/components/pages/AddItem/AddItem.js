import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const AddItem = () => {
  const [user] = useAuthState(auth)
  const email = user?.email;
    const hamdleAddItem = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const price = `$${e.target.price.value}`;
        const picture = e.target.picture.value;
        const quantity = e.target.quantity.value;
        const supplier = e.target.supplier.value;
        const description = e.target.description.value;
        const newItem = { name, price, picture, quantity, supplier, description ,email};
        fetch("http://localhost:5000/inventory", {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(newItem) 
        })
      e.target.reset();
    };
    return (
      <div className='my-16'>
        <h3 className='text-center mb-4 shadow-white'>Add new inventory item</h3>
        <div className=" border-2 shadow border-blue-400  p-16 mx-auto rounded login-form">
          <form onSubmit={hamdleAddItem}>
            <input
              type="name"
              name="name"
              placeholder="Name"
              id=""
              autoComplete="on"
              className="p-2 px-3 m-2 focus:outline-none border-2 border-blue-400 "
            />{" "}
            <br />
            <input
              type="number"
              name="price"
              id=""
              min="1"
              placeholder="Price"
              autoComplete="on"
              className="p-2 px-3 m-2 focus:outline-none border-2 border-blue-400"
            />
            <br />
            <input
              type="url"
              name="picture"
              id=""
              placeholder="Picture URL"
              autoComplete="on"
              className="p-2 px-3 m-2 focus:outline-none border-2 border-blue-400"
            />
            <br />
            <input
              type="number"
              name="quantity"
              id=""
              placeholder="Quantity"
              min="0"
              className="p-2 px-3 m-2 focus:outline-none border-2 border-blue-400"
            />
            <br />
            <input
              type="text"
              name="supplier"
              placeholder=" Distributor Name"
              id=""
              autoComplete="on"
              className="p-2 px-3 m-2 focus:outline-none border-2 border-blue-400"
            />
            <br />
            <input
              type="text"
              name="description"
              placeholder="About"
              id=""
              className="p-2 px-3 m-2 focus:outline-none border-2 border-blue-400"
            />
            <br />
            <input
              type="submit"
              value="ADD ITEM"
              className="m-2 p-2 hover:border-red-500 hover:text-red-500 duration-300 border-1 border-blue-400 ease-linear text-blue-400 font-semibold border-2 submit-btn"
            />
          </form>
        </div>
      </div>
    );
};

export default AddItem;