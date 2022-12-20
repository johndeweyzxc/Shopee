import React from "react";
import {Routes, Route, BrowserRouter as Router} from "react-router-dom";

import App from "./Pages/App";
import Shop from "./Pages/Shop";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import SellOnShopee from "./Pages/SellOnShopee";
import SellerCenter from "./Pages/SellerCenter";

function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/sellonshopee' element={<SellOnShopee />} />
        <Route path='/sellercenter' element={<SellerCenter />} />
        <Route path='/shop/:shopname' element={<Shop />} />
      </Routes>
    </Router>
  );
}

export default AppRouter;
