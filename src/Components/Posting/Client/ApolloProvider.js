import React from "react";
import PostingApp from "./PostingApp";
import {ApolloClient} from "@apollo/client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { createHttpLink } from "apollo-link-http";
import { ApolloProvider } from "@apollo/react-hooks/index";
import PostsHome from "./PostsHome";

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
      </ApolloProvider>
    </div>
  );
};

export default ApolloProviderFile;
