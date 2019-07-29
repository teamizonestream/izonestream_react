import styled from "styled-components";

const Page = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const Header = styled.div`
  flex: 4;
  border-bottom: 1px solid #7d7d7d;
  display: flex;
  align-items: center;
`;

const Content = styled.div`
  flex: 39;
`;

const Title = styled.p`
  font-size: 2.25em;
  color: #000000;
  font-weight: 500;
`;

export { Page, Header, Content, Title };
