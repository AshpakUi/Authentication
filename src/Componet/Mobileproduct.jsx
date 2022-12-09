import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Mobileproduct() {
  const [name, setname] = useState("ashpak shaikh");
  const [age, setage] = useState(0);

  const Getdata = async () => {
    const result = await axios.post("http://localhost:3030/postreq", {
      username: name,
      age: age,
    });
    console.log(result);
  };

  return (
    <div>
      <h1>this is Mobileproduct Component</h1>
      <div className="app ">
        <div className="form">
          <form onSubmit={ Getdata}>
            <input
              type="text"
              placeholder="Enter name"
              onChange={(e) => setname(e.target.value)}
              required
            />
            <input
              type="number"
              placeholder="Enter Number"
              onChange={(e) => setage(e.target.value)}
              required
            />
            <input type="submit" />
          </form>
        </div>
      </div>
    </div>
  );
}
