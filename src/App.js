import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/auth/Login";
import Center from "./pages/Center";
import AddCenter from "./pages/AddCenter"
import { useState } from "react";
import Facilites from "./pages/Facility";
import FacilityScreen from "./pages/FacilityScreen";



const App = () => {
  
const[active,setActive]=useState();
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />

        <Route path="/facility" element={<Facilites active={active} setActive={setActive}/> } />
        <Route path="/center" element={<Center active={active} setActive={setActive}/> } />
        <Route path="add-center" element={<AddCenter active={active} setActive={setActive} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
