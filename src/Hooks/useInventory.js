import { useEffect, useState } from "react";

const useInventory = (id) => {
  const [info, setInfo] = useState({});

  useEffect(() => {
    const url = `https://pure-stream-67963.herokuapp.com/inventory/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setInfo(data));
  }, [id]);
  return [info];
};

export default useInventory;
