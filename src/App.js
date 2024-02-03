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
import Register2 from "./Components/Account/Register2";
import Login2 from "./Components/Account/Login2";
import ChatsContainer from "./Components/Chat/ChatsContainer";
import ChatAlt1 from "./Components/ChatAlt1/ChatAlt1";
import NoFooter from "./Components/ChatAlt1/noFooter";
import AuthPage from "./Components/ChatAlt1/AuthPage";
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
        <Route path="/register2" element={<Register2 />} />
        <Route path="/login2" element={<Login2 />} />

        <Route path="/reset" element={<ResetPassword />} />
        <Route path="/completeProfile" element={<AccountDetails />} />
        <Route path="/camera" element={<Camera />} />
        <Route path="/uploadImg" element={<ImgUpload />} />
        <Route path="/chatscontainer" element={<ChatsContainer />} />

        {/* alternative chat components alt1 */}
        <Route path="/chatalt1" element={<ChatAlt1 />} />

        <Route path="/chatalt1auth" element={<AuthPage />} />
      </Routes>
      <NoNav>
        <NoFooter>
          <Footer />
        </NoFooter>
      </NoNav>
    </div>
  );
};

export default App;
