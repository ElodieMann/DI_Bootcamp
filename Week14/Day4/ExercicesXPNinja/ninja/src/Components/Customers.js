import React, { useEffect, useState } from "react";
import axios from "axios";

const Customers = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const res = await axios.get("http://localhost:3000/api/customers");

    const data = res.data;
    console.log(data);
    setData(data);
  };

  return (
    <div>
      <ul style={{listStyle: "none"}}>
        {data.map((user) => {
          return ( <li key={user.id} style={{borderTop: '1px solid', padding:'10px'}}>
            {user.firstName} {user.lastName}
          </li>)
         
        })}
      </ul>
    </div>
  );
};

export default Customers;
