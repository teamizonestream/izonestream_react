import React, { Suspense, lazy } from "react";
import { Route, Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import Lottie from "lottie-react-web";
import background from "./assets/images/background.jpg";
import NyanCat from "./assets/animation/nyan-cat.json";

const Main = lazy(() => import("./pages/Main"));

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
  font-size: 0.8em;
  color: rgba(255, 255, 255, 0.8);
  margin: 1em 0 0 0;
`;

const StyledLink = styled(Link)`
  color: #ffffff;
  text-decoration: none;
  font-size: 1em;
`;

const Content = styled.div`
  flex: 17;
  background: #ffffff;
`;

const App = () => {
  return (
    <Suspense fallback={<Lottie options={{ animationData: NyanCat }} />}>
      <Container>
        <Sidebar>
          <SidebarContent>
            <LogoArea />
            <MenuArea>
              <ul>
                <CategoryTitle>동영상</CategoryTitle>
                <ListItem>
                  <StyledLink to="/">메인</StyledLink>
                </ListItem>
                <CategoryTitle>사진</CategoryTitle>
              </ul>
            </MenuArea>
          </SidebarContent>
        </Sidebar>
        <Content>
          <Route exact path="/" component={Main} />
        </Content>
      </Container>
    </Suspense>
  );
};

export default App;
