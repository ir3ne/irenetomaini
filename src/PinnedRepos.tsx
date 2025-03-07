import { request } from "graphql-request";
import { useEffect, useState } from "react";
import { GET_PINNED_REPOS } from "./lib/queries";
import Loader from "./Loader";
import { GitHubResponse, Repository } from "./types/github";

const GITHUB_API = "https://api.github.com/graphql";
const TOKEN = import.meta.env.VITE_GITHUB_TOKEN;

const PinnedRepos = () => {
  const [repos, setRepos] = useState<Repository[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const data: GitHubResponse = await request(
          GITHUB_API,
          GET_PINNED_REPOS,
          {},
          { Authorization: `Bearer ${TOKEN}` }
        );

        setRepos(data.user.pinnedItems.edges.map(edge => edge.node));
      } catch (error) {
        console.error("Error fetching pinned repos:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, []);

  return (
    <div>
      <h2 className="SectionTitle">Pinned Repositories</h2>
	  {loading ? (
        <Loader />
      ) : (
      <div className="ReposCardContainer">
        {repos.map(repo => (
          <div key={repo.name} className="RepoCard">
            <a href={repo.url} target="_blank" rel="noopener noreferrer">
              <div className="RepoName">{repo.name}</div>
            </a>
            <p>{repo.description}</p>
          </div>
        ))}
      </div>
	  )}
    </div>
  );
};

export default PinnedRepos;
