import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";
import fetch from "cross-fetch";

const client = new ApolloClient({
  link: new HttpLink({
    uri: "https://embraguesla34.com/graphql",
    fetch,
  }),
  cache: new InMemoryCache(),
});

export default client;

