import { useEffect, useState } from "react";
import { getGithubRepos, type GithubRepo } from "../api/getGithubRepos";

export default function useDataRepos(url: string, repoType: string) {
  const [repos, setRepos] = useState<GithubRepo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const controller = new AbortController();
    async function fetchData() {
      try {
        const data = await getGithubRepos(url, controller.signal);
        const filteredRepos = data.filter((repo) =>
          repo.topics.includes(repoType),
        );
        setRepos(filteredRepos);
      } catch (err) {
        if (
          err instanceof Error &&
          (err.name === "AbortError" || err.name === "CanceledError")
        ) {
          return;
        }

        const errorObj = err instanceof Error ? err : new Error(String(err));
        setError(errorObj);
      } finally {
        setLoading(false);
      }
    }

    fetchData();

    return () => controller.abort();
  }, [url, repoType]);

  return { repos, loading, error };
}
