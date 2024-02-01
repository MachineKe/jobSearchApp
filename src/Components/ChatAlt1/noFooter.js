import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
const NoFooter = ({ children }) => {
  const location = useLocation();
  const [showFooter, setShowFooter] = useState("");

  useEffect(() => {
    if (location.pathname === "/chatalt1") {
      setShowFooter(false);
    } else {
      setShowFooter(true);
    }
  }, [location]);

  return <div>{showFooter && children}</div>;
};

export default NoFooter;
