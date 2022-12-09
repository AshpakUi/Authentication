import axios from "axios";
import React, { useState, useEffect } from "react";

export default function Product() {
  const [data, setdata] = useState([]);

  const getdata = async () => {
    const result = await axios.get("http://localhost:3030/postreqget");
    setdata(result.data);
    console.log(result.data);
  };
  useEffect(() => {
    getdata();
  }, []);

  return (
    <div>
      <h1> this is Product componet</h1>
      <table border="2px" style={{ borderCollapse: "collapse" }}>
        <tr>
          <th>
            <h1>Name</h1>
          </th>
          <th>
            <h1>Age</h1>
          </th>
        </tr>
        {data.map((item) => (
          <tr>
            <td>
              <h1>{item.username}</h1>
            </td>
            <td>
              <h1> {item.age}</h1>
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
}
