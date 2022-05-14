import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const ManageInventory = () => {
    const [cars, setCars] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5000/inventory")
            .then(res => res.json())
            .then(data=>setCars(data))
    }, [cars])
    const navigate = useNavigate();
    const NavigateToUpdate = (id) => {
          navigate(`/manageinventory/${id}`);
  }
    
  const handleDeleteItem = (id) => {
    const proceed = window.confirm('Are you sure you want to Delete?');
    if (proceed) {
      fetch(`http://localhost:5000/delete/${id}`, {
        method : "DELETE"
      })
        .then(res => res.json())
        .then(data => {
          if (data.deleteCount > 0) {
            const remaining = cars.filter(car => car._id !== id);
            setCars(remaining);
          }
        })
    }
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
                    <button onClick={()=>handleDeleteItem(car._id)} className="py-2 px-3 rounded text-white bg-red-500 hover:bg-red-600 duration-300">
                      Delete
                    </button>
                  </td>
                </tr>
              </>
            ))}
          </tbody>
        </table>
        <div className="w-60 mx-auto ">
          <Link to="/additem">
            <button className="border-2 mb-20 text-xl border-red-400 hover:text-white duration-300 hover:bg-red-400 py-2 px-4 font-bold text-red-500">
              Add New Item
            </button>
          </Link>
        </div>
      </div>
    );
};

export default ManageInventory;