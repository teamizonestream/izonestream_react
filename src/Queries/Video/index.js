import gql from "graphql-tag";

export default gql`
  query getVideos($page: Int) {
    videos(page: $page) {
      _id
      name
      filePath
    }
  }
`;
