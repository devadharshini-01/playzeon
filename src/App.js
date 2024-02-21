import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/auth/Login";
import Center from "./pages/Center";
import Addcenter from "./pages/Addcenter";
import { useState } from "react";



const App = () => {
  
const[active,setActive]=useState();
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />

        <Route path="/center" element={<Center active={active} setActive={setActive}/> } />
        <Route path="add-center" element={<Addcenter active={active} setActive={setActive} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
