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

const Search = styled.input`
  width: 26em;
  height: 3.5em;
  background: #ffffff;
  border-radius: 3em;
  box-shadow: 0px 2px 8px rgba(125, 125, 125, 0.5);
  border: none;
  padding: 0 1em;
  font-size: 0.8em;
  font-family: "Ionicons", "Noto Sans KR";
  font-weight: 400;
  &::placeholder {
    color: #7d7d7d;
  }
  &:focus {
    outline: none;
    box-shadow: 0px 2px 8px rgba(217, 89, 140, 0.5);
    transition: 0.5s;
  }
  &:hover {
    box-shadow: 0px 2px 8px rgba(217, 89, 140, 0.5);
    transition: 0.5s;
  }
`;

export { Page, Header, Content, Title, Search };
