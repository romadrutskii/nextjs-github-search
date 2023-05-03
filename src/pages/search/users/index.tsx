import { client } from "@/api/searchUsers";
import UserSearchResults from "@/components/pages/UserSearchResults";
import { User, UserEdge, areSearchParamsCorrect } from "@/interfaces";
import { gql } from "@apollo/client";
import { GetServerSidePropsContext } from "next";

export async function getServerSideProps(context: GetServerSidePropsContext) {
  let users: User[] | null = null,
    error = null;
  if (areSearchParamsCorrect(context.query)) {
    try {
      const response = await client.query({
        query: gql`
          query {
            search(query: "${context.query.q} type:User", type: USER, first: 30) {\
              userCount
              edges {
                node {
                  ... on User {
                    company
                    login
                    name
                    location
                    bio
                    avatarUrl
                    id
                  }
                }
              }
            }
          }
        `,
      });
      users = response.data.search.edges.map((e: UserEdge) => e.node);
    } catch (e) {
      if (e instanceof Error) {
        error = e.message;
      }
    }
  } else {
    error = "Query params are not correct!";
  }
  return {
    props: {
      users,
      error,
    },
  };
}

export default UserSearchResults;
