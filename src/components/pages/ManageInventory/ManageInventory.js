import React, { useEffect, useState } from 'react';

const ManageInventory = () => {
    const [cars, setCars] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5000/inventory")
            .then(res => res.json())
            .then(data=>setCars(data))
    },[])
    return (
      <div className='mt-10'>
        <table class="table table-striped">
          <thead>
            <tr>
              <th scope="col">Picture</th>
              <th scope="col">Name</th>
              <th scope="col">Price</th>
              <th scope="col">Quantity</th>
              <th scope="col">Update</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
          <tbody>
            {cars.map((car) => (
              <>
                <tr>
                  <td>
                    <img
                      className="h-16 rounded-r-full"
                      src={car.picture}
                      alt=""
                    />
                  </td>
                  <td>
                    <h5>{car.name}</h5>
                  </td>
                  <td>{car.price}</td>
                  <td>{car.quantity}</td>
                  <td>
                    <button>Update</button>
                  </td>
                  <td>
                    <button>Delete</button>
                  </td>
                </tr>
              </>
            ))}
          </tbody>
        </table>
      </div>
    );
};

export default ManageInventory;