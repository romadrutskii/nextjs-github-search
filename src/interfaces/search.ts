import { Endpoints } from "@octokit/types";

export type SearchParams = Endpoints["GET /search/repositories"]["parameters"];

export function areSearchParamsCorrect(params: any): params is SearchParams {
  return (params as SearchParams).q !== undefined || "q" in params;
}
