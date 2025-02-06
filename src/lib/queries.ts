import { gql } from "graphql-request";

export const GET_PINNED_REPOS = gql`
  query {
    user(login: "ir3ne") {
      pinnedItems(first: 6, types: REPOSITORY) {
        edges {
          node {
            ... on Repository {
              name
              description
              url
              stargazerCount
              forkCount
              languages(first: 3) {
                edges {
                  node {
                    name
                    color
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;
