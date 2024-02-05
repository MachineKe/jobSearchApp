import React from "react";
import PostingApp from "./PostingApp";
import { ApolloClient } from "@apollo/client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { createHttpLink } from "apollo-link-http";
import { ApolloProvider } from "@apollo/react-hooks/index";
import PostsHome from "./PostsHome";
import { loadErrorMessages, loadDevMessages } from "@apollo/client/dev";
import PostLogin from "./PostLogin";
import PostRegister from "./PostRegister";
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";

loadDevMessages();
loadErrorMessages();

const ApolloProviderFile = () => {
  const httpLink = createHttpLink({
    uri: "http://localhost:5000",
  });

  const client = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache(),
  });

  return (
    <div className="ApolloProvider">
      <ApolloProvider client={client}>
     
        <PostingApp />
          <PostsHome/>
<PostLogin/>
        <Routes>

          <Route path="/postregister" element={<PostRegister />} />

          {/* <PostRegister/> */}
        </Routes>
      </ApolloProvider>

    </div>
  );
};

export default ApolloProviderFile;
