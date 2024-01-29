import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
const NoNav = ({ children }) => {
  const location = useLocation();
  const [showNav, setShowNav] = useState("");

  useEffect(() => {
    if (
      location.pathname === "/login" ||
      location.pathname === "/reset" ||
      location.pathname === "/register" || location.pathname === '/completeProfile' || location.pathname === '/camera'
    ) {
      setShowNav(false);
    } else {
      setShowNav(true);
    }
  }, [location]);

  return <div>{showNav && children}</div>;
};

export default NoNav;
