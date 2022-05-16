import { useEffect, useState } from "react";

const useQuantity = (id) => {
  const [quantity, setQuantity] = useState(0);
  useEffect(() => {
    fetch(`https://pure-stream-67963.herokuapp.com/delivered/${id}`)
      .then((res) => res.json())
      .then((data) => setQuantity(data));
  }, []);

  return [quantity.carQuantity];
};

export default useQuantity;
