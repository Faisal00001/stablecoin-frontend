import { Routes, Route } from "react-router-dom";

import MainLayout from "../Layout/MainLayout";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Dashboard from "../Layout/Dashboard";
import Overview from "../Dashboard/Overview/Overview";
import Market from "../Dashboard/Market/Market";
import MyWallet from "../Dashboard/MyWallet/MyWallet";
import Home from "../Pages/Home/Home";
import StableCoinBalanceManagement from "../Dashboard/StableCoinBalanceManagement/StableCoinBalanceManagement";
import TransactionsHistory from "../Dashboard/TransactionsHistory/TransactionsHistory";

const Router = () => {
  return (
    <Routes>
      {/* Main Layout Routes */}
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Route>

      {/* Dashboard Layout Routes */}
      <Route path="dashboard" element={<Dashboard />}>
        <Route path="overview" element={<Overview />} />
        <Route path="stableCoinBalanceManagement" element={<StableCoinBalanceManagement />} />
        <Route path="transactionHistory" element={<TransactionsHistory />} />
        <Route path="myWallet" element={<MyWallet />} />
      </Route>
    </Routes>
  );
};

export default Router;
