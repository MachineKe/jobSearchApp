import React, { useContext } from "react";
import NavBar from "./Components/NavBar/NavBar";
// import Search from "./Components/SearchDiv/Search";
import Jobs from "./Components/JobDiv/Jobs";
import Value from "./Components/ValueDiv/Value";
import Footer from "./Components/FooterDiv/Footer";
import { Routes, Route, redirect as Redirect } from "react-router-dom";
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
import PostRegister from "./Components/Posting/Client/PostRegister";
import { ApolloClient } from "@apollo/client";
import { InMemoryCache } from "@apollo/client";
import { createHttpLink } from "apollo-link-http";
import { ApolloProvider } from "@apollo/react-hooks/index";
import { loadErrorMessages, loadDevMessages } from "@apollo/client/dev";
import PostLogin from "./Components/Posting/Client/PostLogin";
import PostsHome from "./Components/Posting/Client/PostsHome";
import { AuthProvider } from "./Components/Posting/Client/Context/auth";
import { AuthContext } from "./Components/Posting/Client/Context/auth";
import {setContext} from 'apollo-link-context'

import SinglePost from "./Components/Posting/Client/SinglePost";

loadDevMessages();
loadErrorMessages();
const App = () => {
  const { user, logout } = useContext(AuthContext);
  const httpLink = createHttpLink({
    uri: "http://localhost:5000",
  });


const authLink = setContext(()=>{
  const token = localStorage.getItem('jwtToken')
  return {
    headers: {
      Authorization: token ? `Bearer ${token}` : ''
    }
  }
})


  const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
  });


  return (
    <div className="App">
      <ApolloProvider client={client}>
        <AuthProvider>
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
            {/* <Route path="/login" element={<Login />} /> */}
            {/* <Route path="/register" element={<Register />} /> */}
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
            <Route path="/apolloProvider" element={<ApolloProvider />} />
            <Route path="/register" element={<PostRegister />} />
            <Route
              path="/login"
              element={<PostLogin />}
            />
            <Route path="/posts" element={<PostsHome />} />

 <Route path="/posts/:postId" element={<SinglePost />} />

          </Routes>

          <NoNav>
            <NoFooter>
              <Footer />
            </NoFooter>
          </NoNav>
        </AuthProvider>
      </ApolloProvider>
    </div>
  );
};

export default App;
