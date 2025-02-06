export interface Repository {
  name: string;
  description: string;
  url: string;
  stargazerCount: number;
  forkCount: number;
  languages: {
    edges: {
      node: {
        name: string;
        color: string;
      };
    }[];
  };
}

export interface GitHubResponse {
  user: {
    pinnedItems: {
      edges: { node: Repository }[];
    };
  };
}
