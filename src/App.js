import React from "react";
import NavBar from "./Components/NavBar/NavBar";
// import Search from "./Components/SearchDiv/Search";
import Jobs from "./Components/JobDiv/Jobs";
import Value from "./Components/ValueDiv/Value";
import Footer from "./Components/FooterDiv/Footer";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import Community from "./Components/community/Community";

const App = () => {
  return (
    <div className="App">
      <NavBar />
      {/* <Search /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/community" element={<Community />} />

        <Route path="/jobs" element={<Jobs />} />
        <Route path="/value" element={<Value />} />

        <Route path="/footer" element={<Footer />} />
      </Routes>
    </div>
  );
};

export default App;
