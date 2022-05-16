import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import axios from 'axios';

const MyItem = () => {
  const [user] = useAuthState(auth);
  const [myItem, setMyItem] = useState([]);
  const [proceed, setProceed] = useState();

  
  //get inventory item by user email
    useEffect(() => {
      // fetch(`http://localhost:5000/myitem?email=${userEmail}`, {
      //   headers: {
      //     authorization:`Bearer ${localStorage.getItem("accessToken")}`,
      //   },
      // })
      //   .then((res) => res.json())
      //   .then((data) => setMyItem(data));

      const getMyItems = async () => {
        const userEmail = user?.email;
        const url = `http://localhost:5000/myitem?email=${userEmail}`;
        const { data } = await axios.get(url, {
          headers: {
            authorization:`Bearer ${localStorage.getItem("accessToken")}`,
          },
        });
        setMyItem(data)
      }
      getMyItems()
    }, [user, proceed]);
  
  
        const navigate = useNavigate(); 
        const NavigateToUpdate = (id) => {
          navigate(`/manageinventory/${id}`);
  }
  
  //delete single inventory item  by Id 
    const handleDeleteItem = (id) => {
      const proceed = window.confirm("Are you sure you want to Delete?");
      setProceed(proceed)
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