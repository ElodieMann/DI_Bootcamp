import React, { useEffect, useState } from "react";

const Fetch = () => {
  const [data, setData] = useState("");

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    try {

        const res = await fetch("http://localhost:3000/api/hello");

        if(!res.ok) {
            throw new Error(Error)
        }
        const resData = await res.text()
        setData(resData)
    } catch(e) {
        console.log(e);
    }
  };

  return(
    <h1>{data}</h1>
  )
};

export default Fetch;
