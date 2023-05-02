import { Octokit } from "@octokit/rest";
import { GetServerSidePropsContext } from "next";
import { SearchUserParams } from "@/interfaces";
import UserSearchResults from "@/components/pages/UserSearchResults";

const octokit = new Octokit();

function areParamsCorrect(params: any): params is SearchUserParams {
  return (params as SearchUserParams).q !== undefined || "q" in params;
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  let users = null,
    error = null;
  if (areParamsCorrect(context.query)) {
    try {
      const response = await octokit.rest.search.users(context.query);
      users = response.data.items;
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
