import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ManageInventory = () => {
    const [cars, setCars] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5000/inventory")
            .then(res => res.json())
            .then(data=>setCars(data))
    }, [])
    const navigate = useNavigate();
    const NavigateToUpdate = (id) => {
          navigate(`/manageinventory/${id}`);
    }
    return (
      <div className="mt-10">
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
                <tr key={car._id}>
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
                    <button
                      onClick={() => NavigateToUpdate(car._id)}
                      className="py-2 px-3 rounded text-white bg-green-500 hover:bg-green-600 duration-300"
                    >
                      Update
                    </button>
                  </td>
                  <td>
                    <button className="py-2 px-3 rounded text-white bg-red-500 hover:bg-red-600 duration-300">
                      Delete
                    </button>
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