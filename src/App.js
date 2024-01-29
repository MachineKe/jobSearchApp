import React from "react";
import NavBar from "./Components/NavBar/NavBar";
// import Search from "./Components/SearchDiv/Search";
import Jobs from "./Components/JobDiv/Jobs";
import Value from "./Components/ValueDiv/Value";
import Footer from "./Components/FooterDiv/Footer";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import Community from "./Components/community/Community";
import Companies from "./Components/community/Companies";
import About from "./Components/About/About";
import Login from "./Components/Account/Login";
import Register from "./Components/Account/Register";
import ResetPassword from "./Components/Account/ResetPass";
import NoNav from "./Components/Account/noNav";
import AccountDetails from "./Components/Account/AccountDetails";
import Camera from "./Components/Camera/Camera";
import ImgUpload from "./Components/ImgUploader/ImgUpload";
const App = () => {
  return (
    <div className="App">
      <NoNav>
        {" "}
        <NavBar />
      </NoNav>
      {/* <Search /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/community" element={<Community />} />
        <Route path="/companies" element={<Companies />} />
        <Route path="/about" element={<About />} />

        <Route path="/jobs" element={<Jobs />} />
        <Route path="/value" element={<Value />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/reset" element={<ResetPassword />} />
              <Route path="/completeProfile" element={<AccountDetails />} />
              <Route path="/camera" element={<Camera />} />
              <Route path="/uploadImg" element={<ImgUpload />} />

      
      </Routes>
      <NoNav>
      <Footer />
      </NoNav>
    </div>
  );
};

export default App;
