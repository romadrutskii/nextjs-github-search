import { SearchParams } from "@/interfaces";
import { Octokit } from "@octokit/rest";

const octokit = new Octokit({
  auth: process.env.GITHUB_API_ACCESS_TOKEN,
});

const repositoriesApi = {
  search: async (query: SearchParams) => {
    const response = await octokit.rest.search.repos(query);
    return response.data.items;
  },
};

export default repositoriesApi;
