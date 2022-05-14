import React from 'react';

const AddItem = () => {
    const hamdleAddItem = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const price = `$${e.target.price.value}`;
        const picture = e.target.picture.value;
        const quantity = e.target.quantity.value;
        const supplier = e.target.supplier.value;
        const description = e.target.description.value;
        const newItem = { name, price, picture, quantity, supplier, description };
        fetch("http://localhost:5000/inventory", {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(newItem) 
        })
            .then(res => res.json())
            .then(data=>console.log(data))
    };
    return (
      <div>
        <div className="bg-blue-300  p-16 mx-auto rounded login-form">
          <form onSubmit={hamdleAddItem}>
            <input
              type="name"
              name="name"
              placeholder="Name"
              id=""
              autoComplete="on"
              className="p-2 px-3 m-2 focus:outline-none"
            />{" "}
            <br />
            <input
              type="number"
              name="price"
              id=""
              min="1"
              placeholder="Price"
              autoComplete="on"
              className="p-2 px-3 m-2 focus:outline-none"
            />
            <br />
            <input
              type="url"
              name="picture"
              id=""
              placeholder="Picture URL"
              autoComplete="on"
              className="p-2 px-3 m-2 focus:outline-none"
            />
            <br />
            <input
              type="number"
              name="quantity"
              id=""
              placeholder="Quantity"
              min="0"
              className="p-2 px-3 m-2 focus:outline-none"
            />
            <br />
            <input
              type="text"
              name="supplier"
              placeholder=" Distributor Name"
              id=""
              autoComplete="on"
              className="p-2 px-3 m-2 focus:outline-none"
            />
            <br />
            <input
              type="text"
              name="description"
              placeholder="About"
              id=""
              className="p-2 px-3 m-2 focus:outline-none"
            />
            <br />
            <input
              type="submit"
              value="ADD ITEM"
              className="m-2 p-1 hover:bg-blue-400 duration-300 ease-linear text-yellow-50 font-semibold border-2 submit-btn"
            />
          </form>
        </div>
      </div>
    );
};

export default AddItem;