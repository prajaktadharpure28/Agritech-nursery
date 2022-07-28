import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard";
import Addplant from "./components/Addplant/Addplant";
import Showplant from "./components/Showplant/Showplant";
import Getdata from "./components/Getdata/Getdata";


console.log(process.env.REACT_APP_API_KEY)
function App() {

  return(
    <>
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Dashboard/>} />
    <Route path="/addplant" element={<Addplant/>} />
    <Route path="/get/allplant" element={<Showplant/>} />
    <Route path="/getdata" element={<Getdata/>} />
  
    
    </Routes>
    </BrowserRouter>
    </>
  );
}


export default App;
