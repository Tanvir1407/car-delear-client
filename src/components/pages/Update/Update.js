import useInventory from '../../../Hooks/useInventory';
import useQuantity from '../../../Hooks/useQuantity';
import { useParams } from 'react-router-dom';
import './Update.css';

const Update = () => {
    const id = useParams();
  const [car, setCar] = useInventory(id.id);
  const [Quantity] = useQuantity(id.id);


  const handleDelivered = () => {
    
    fetch(`http://localhost:5000/update/${id.id}`, {
      method: 'PUT',
      headers: {
        'content-type':'application/json'
      },
      body:JSON.stringify(Quantity)
    })
      .then(res => res.json())
      .then(data => console.log(data)) 
    
  }; 
  const handleInsert = (e) => {
    e.preventDefault()
    const quantity = e.target.quantity.value;
    console.log(quantity);
    e.target.reset()
  }; 
    return (
      <div className="container mt-16">
        <div className="row border-2 p-3 rounded ">
          <h3 className="text-center py-2 ">{car.name}</h3>
          <div className="row">
            <img
              className="col-md-4 border py-3 rounded"
              src={car.picture}
              alt=""
            />
            <div className="col-md-8 px-4 info">
              <h4>Distributor: {car.supplier}</h4>
              <h5 className="text-red-400">Price: {car.price}</h5>
              <p className="text-green-500 font-bold">
                Quantity: {car.quantity}
              </p>
              <p className="text-gray-600 font-serif">
                About: {car.description}
              </p>
              <div className="d-flex flex-column flex-md-row items-center justify-between">
                <button
                  onClick={handleDelivered}
                  className=" h-10 px-3 bg-red-500 duration-150 text-white rounded hover:bg-red-600"
                >
                  Delivered
                </button>
                <div className="my-3">
                  <form onSubmit={handleInsert} className="d-flex flex-column flex-sm-row">
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