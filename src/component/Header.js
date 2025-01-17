import React from "react";
import logo from "assets/images/logo-company.png";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  return (
    <header className="bg-white py-2 cursor-pointer">
      <img
        className="h-[67px] w-[161px]"
        onClick={() => navigate("/")}
        src={logo}
        alt="logo"
      />
    </header>
  );
}

export default Header;
