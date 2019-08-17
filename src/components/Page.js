import React from "react";
import styled from "styled-components";
import defaultBackground from "../assets/images/background.jpg";

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
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
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

const GridList = styled.div`
  width: calc(100% - 4em);
  height: calc(100% + 4em);
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-auto-rows: 20em;
  grid-gap: 2em;
  padding: 2em;
`;

const CardContainer = styled.div`
  background: url(${props => `${props.thumb}`}), url(${defaultBackground});
  background-size: cover;
  border-radius: 0.5em;
  box-shadow: 0px 4px 12px rgba(125, 125, 125, 0.5);
`;

const CardTitle = styled.p`
  width: calc(100% - 2em);
  height: 4em;
  margin-top: 16em;
  background: rgba(0, 0, 0, 0.4);
  border-bottom-left-radius: 0.5em;
  border-bottom-right-radius: 0.5em;
  display: flex;
  align-items: center;
  color: #ffffff;
  padding-left: 1em;
  padding-right: 1em;
`;

const Card = ({ thumb, name }) => (
  <CardContainer thumb={thumb}>
    <CardTitle>{name}</CardTitle>
  </CardContainer>
);

export { Page, Header, Content, Title, Search, GridList, Card };
