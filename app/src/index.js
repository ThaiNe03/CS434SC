import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import App from "./AuctionParticipation1.js";
import Interface from "./AuctionInterface.js";
import Home from "./HomePage.js";
import Viewer from "./AuctionViewer.js";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import Login from "./Login.js";
import DangKy from "./DangKy.js";

const GiaoDien = () => {
  const [user, setUser] = useState(null);
  const [isRegistered, setIsRegistered] = useState(false);
  const [showLogin, setShowLogin] = useState(true);

  const handleRegister = (username, password) => {
    setUser({ username, password });
    setIsRegistered(true);
    setShowLogin(true);
  };

  const handleLogin = (username, password) => {
    if (user && user.username === username && user.password === password) {
      alert("Đăng nhập thành công");
    } else {
      alert("Sai tài khoản hoặc mật khẩu.");
    }
  };

  const toggleForm = () => {
    setShowLogin(!showLogin);
  };

  return showLogin ? (
    <Login onLogin={handleLogin} onToggleForm={toggleForm} />
  ) : (
    <DangKy onRegister={handleRegister} onToggleForm={toggleForm} />
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <GiaoDien />
  </React.StrictMode>
);

reportWebVitals();
