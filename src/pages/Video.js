import React from "react";
import { useQuery } from "react-apollo-hooks";
import {
  Page,
  Header,
  Content,
  Search,
  GridList,
  Card
} from "../components/Page";
import { getThumbURL } from "../utils";
import GET_VIDEOS from "../Queries/Video/Category";

const Main = ({ match }) => {
  const { data } = useQuery(GET_VIDEOS, {
    variables: {
      category: match.params.category
    }
  });

  return (
    <Page>
      <Header>
        <Search placeholder=" 검색어를 입력해주세요" />
      </Header>
      <Content>
        <GridList>
          {data !== undefined &&
            data.videos.map(video => (
              <Card
                key={video._id}
                thumb={getThumbURL(video.filePath)}
                name={video.name}
              />
            ))}
        </GridList>
      </Content>
    </Page>
  );
};

export default Main;
