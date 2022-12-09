import React, { useState } from "react";
import {useNavigate} from "react-router-dom"
export default function Navbar() {
  const [data, setData] = useState("");
  console.log(data);
  const Navigate=useNavigate()

  const Navigatehandle = (e) => {
    console.log(e.target.value);
    Navigate(e.target.value)
    
  };
  return (
    <div className="Navbar_com">
      <div className="logOutcontainer">
        <button>logOut</button>
      </div>
      <select name="" id="" onChange={Navigatehandle}>
        <option value="/">Home</option>
        <option value="/product">Product</option>
        <option value="/mobileproduct">Mobileproduct</option>
      </select>
    </div>
  );
}
