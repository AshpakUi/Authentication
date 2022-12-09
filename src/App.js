import logo from "./logo.svg";
import "./App.css";
import OtpSend from "./OtpSend";
import app from "./FirebaseConfig";
import { useState } from "react";
import Login from "./Componet/Login";

function App() {
  const [userLogin, setUserLogin] = useState(true);
  return (
    <div>{userLogin ? <Login /> : <OtpSend setUserLogin={setUserLogin} />}</div>
  );
}

export default App;
