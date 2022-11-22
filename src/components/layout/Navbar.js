import React, { useState, useEffect } from "react";
import bdrop from "../../assets/img/bdrop.png";
import SearchPage from "./SearchPage";

import "../../assets/css/Navbar.css";

const Navbar = () => {
  const [role, setRole] = useState(0)

  useEffect(() => {
    if (localStorage.getItem("role_id")) {
      setRole(localStorage.getItem("role_id"))
    }
  }, [])

  const handleLogout = () => {
    localStorage.setItem("role_id", 0)
    localStorage.setItem("user_id", 0)
    window.location = "/home";
  }

  return (
    <nav className="nav">
      <img src={bdrop} alt="bdroplogo" />
      <a href="#">
        E-BLOOD SEVA
      </a>
      {/* comman */}
      {role === "0" ? <a href="/home">HOME&nbsp;<i className="fa fa-home"/></a> : null}
      {role === "0" ? <a href="/login/usr">LOGIN&nbsp;<i className="fa fa-sign-in"/></a> : null}
      {role === "0" ? <a href="/reg/usr">REGISTER&nbsp;<i className="fa fa-user-plus"/></a> : null}
      {role === "0" ? <SearchPage /> : null}
      {role === "1" || role === "2" ? <a href="/login/usr/dash">DASHBOARD&nbsp;<i className="fa fa-tachometer"/></a> : null}
      {role === "1" || role === "2" ? <a href="/login/usr/req">REQUEST&nbsp;<i className="fa fa-paper-plane"/></a> : null}
      {role === "4" ? <a href="/login/bbnk/dash">DASHBOARD&nbsp;<i className="fa fa-tachometer"/></a> : null}
      {role === "3" ? <a href="/login/ngo/dash">DASHBOARD&nbsp;<i className="fa fa-tachometer"/></a> : null}
      {role === "3" ? <a href="/login/ngo/campaign/req">REQUEST&nbsp;<i className="fa fa-paper-plane"/></a> : null}
      {role === "5" ? <a href="/login/ngo/dash">DASHBOARD&nbsp;<i className="fa fa-tachometer"/></a> : null}
      {role !== "0" ? <a href="#" onClick={handleLogout}>LOGOUT&nbsp;<i className="fa fa-sign-out"/></a> : null}
    </nav>
  );
};

export default Navbar;
