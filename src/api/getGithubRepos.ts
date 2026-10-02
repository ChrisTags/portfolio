import axios from "axios";

export type GithubRepo = {
  id: number;
  name: string;
  description?: string;
  topics: string[];
};

export async function getGithubRepos(
  url: string,
  signal?: AbortSignal,
): Promise<GithubRepo[]> {
  const { data } = await axios.get<GithubRepo[]>(url, { signal });

  return data;
}
