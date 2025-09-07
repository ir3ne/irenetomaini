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

        setRepos(data.user.pinnedItems.edges.map((edge) => edge.node));
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
      <h2 className="Section-title">Pinned Repositories</h2>
      {loading ? (
        <Loader />
      ) : (
        <div className="Projects-grid">
          {repos.map((repo) => (
            <a
              key={repo.name}
              href={repo.url}
              target="_blank"
              rel="noopener noreferrer"
              className="Project-card-link"
            >
              <div className="Project-card">
                <div className="Project-header">
                  <h3 className="Project-name">{repo.name}</h3>
                </div>
                <p className="Project-description">{repo.description}</p>
                {repo.languages.edges.length > 0 && (
                  <div className="Project-languages">
                    {repo.languages.edges.slice(0, 3).map(({ node }) => (
                      <span
                        key={node.name}
                        className="Language-tag"
                        style={{ backgroundColor: "#202020", color: "#ffffff" }}
                      >
                        {node.name}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

export default PinnedRepos;
