import React from "react";
import { Page, Header, Content, Search } from "../components/Page";

const Main = () => {
  return (
    <Page>
      <Header>
        <Search placeholder=" 검색어를 입력해주세요" />
      </Header>
      <Content />
    </Page>
  );
};

export default Main;
