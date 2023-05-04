import { UserEdge } from "@/interfaces";
import {
  ApolloClient,
  InMemoryCache,
  createHttpLink,
  gql,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

const httpLink = createHttpLink({
  uri: "https://api.github.com/graphql",
});

const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      authorization: `Bearer ${process.env.GITHUB_API_ACCESS_TOKEN}`,
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

const usersApi = {
  search: async (q: string) => {
    const response = await client.query({
      query: gql`
        query {
          search(query: "${q} type:User", type: USER, first: 30) {
            userCount
            edges {
              node {
                ... on User {
                  login
                  name
                  location
                  bio
                  avatarUrl
                  id
                  url
                }
              }
            }
          }
        }
      `,
    });
    return response.data.search.edges.map((e: UserEdge) => e.node);
  },
};

export default usersApi;
