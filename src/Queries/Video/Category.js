import gql from "graphql-tag";

export default gql`
  query getVideos($page: Int, $category: String!) {
    videos(page: $page, category: $category) {
      _id
      name
      filePath
    }
  }
`;
