import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';

const MyItem = () => {
    const [user] = useAuthState(auth)
    const [myItem,setMyItem ] =useState([])
    const userEmail = user?.email

    useEffect(() => {
      fetch(`http://localhost:5000/myitem?email=${userEmail}`)
        .then((res) => res.json())
        .then((data) => setMyItem(data));
    }, [myItem]);
        const navigate = useNavigate(); 
    const NavigateToUpdate = (id) => {
          navigate(`/manageinventory/${id}`);
    }
    const handleDeleteItem = (id) => {
         const proceed = window.confirm("Are you sure you want to Delete?");
         if (proceed) {
           fetch(`http://localhost:5000/delete/${id}`, {
             method: "DELETE",
           })
             .then((res) => res.json())
             .then((data) => {
               if (data.deleteCount > 0) {
                 const remaining = myItem.filter((car) => car._id !== id);
                setMyItem(remaining);
               }
             });
         }
    }

    return (
      <div>
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
            {myItem.map((car) => (
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
                    <button
                      onClick={() => handleDeleteItem(car._id)}
                      className="py-2 px-3 rounded text-white bg-red-500 hover:bg-red-600 duration-300"
                    >
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

export default MyItem;