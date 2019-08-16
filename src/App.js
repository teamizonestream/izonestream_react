import React, { Suspense, lazy } from "react";
import { Route, Link } from "react-router-dom";
import { useQuery } from "react-apollo-hooks";
import styled, { keyframes } from "styled-components";
import Lottie from "lottie-react-web";
import background from "./assets/images/background.jpg";
import NyanCat from "./assets/animation/nyan-cat.json";
import GET_CATEGORIES from "./Queries/App";

const Main = lazy(() => import("./pages/Main"));
const Video = lazy(() => import("./pages/Video"));

const backgroundScroll = keyframes`
  from {
    background-position: 0 0;
  }
  to {
    background-position: 3000px 0px;
  }
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;

const SidebarContent = styled.div`
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(54, 19, 19, 0.5);
  display: flex;
  flex-direction: column;
`;

const Sidebar = styled.div`
  flex: 3;
  background: url(${background});
  background-repeat: repeat;
  background-attachment: fixed;
  background-size: cover;
  animation: ${backgroundScroll} 60s linear infinite;
  animation-direction: reverse;
`;

const LogoArea = styled.div`
  flex: 1;
  border-bottom: 1px solid #ffffff;
  margin: 0 1em;
  padding: 1em 0;
`;

const MenuArea = styled.div`
  flex: 6;
  padding: 0 2em;
`;

const ListItem = styled.li`
  padding: 0.5em 2em;
  margin: 1em -2em;
  &:hover {
    background: rgba(255, 255, 255, 0.2);
    transition: 0.5s;
  }
`;

const CategoryTitle = styled.p`
  font-size: 0.75em;
  color: rgba(255, 255, 255, 0.8);
  margin: 1em 0 0 0;
  font-weight: 400;
`;

const StyledLink = styled(Link)`
  color: #ffffff;
  text-decoration: none;
  font-size: 1em;
  font-weight: 400;
`;

const Content = styled.div`
  flex: 17;
  background: #ffffff;
  padding: 2em;
`;

const App = () => {
  const { data } = useQuery(GET_CATEGORIES);

  return (
    <Suspense fallback={<Lottie options={{ animationData: NyanCat }} />}>
      <Container>
        <Sidebar>
          <SidebarContent>
            <LogoArea />
            <MenuArea>
              <ul>
                <CategoryTitle>동영상</CategoryTitle>
                {data !== undefined &&
                  data.categories.map(category => (
                    <ListItem key={category.id}>
                      <StyledLink to={`/videos/${category.id}`}>
                        {category.name}
                      </StyledLink>
                    </ListItem>
                  ))}
                <CategoryTitle>사진</CategoryTitle>
                {data !== undefined &&
                  data.categories.map(category => (
                    <ListItem key={category.id}>
                      <StyledLink to={`/photos/${category.id}`}>
                        {category.name}
                      </StyledLink>
                    </ListItem>
                  ))}
              </ul>
            </MenuArea>
          </SidebarContent>
        </Sidebar>
        <Content>
          <Route exact path="/" component={Main} />
          <Route exact path="/videos/:category" component={Video} />
        </Content>
      </Container>
    </Suspense>
  );
};

export default App;
