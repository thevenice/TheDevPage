import styled from "styled-components";
import { sizes, theme } from "../GlobalStyle";

const FilterBody = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: 1fr;
  box-sizing: border-box;
  background-color: ${theme.white};
  /* border: 1px solid ${theme.white}; */
  margin: 0.2em 0em;
  overflow: hidden;
  /* box-shadow: 0px 2px 25px 2px #eee; */
  div {
    align-items: center;
    width: 100%;
    height: 100%;
  }
  div > .FTop:hover {
    background-color: ${theme.whiteHover};
  }
  @media (min-width: ${sizes.tablet}px) {
    margin: 1em;
  }
`;
const FilterBtn = styled.button`
  cursor: pointer;
  font-size: 1.2em;
  background-color: ${theme.white};
  border: 1px solid ${theme.white};
  border-right: 2px solid ${theme.gold};
  box-sizing: border-box;
  outline: none;
  width: 100%;
  height: 100%;

  @media (min-width: ${sizes.tablet}px) {
    font-size: 1.5em;
  }
`;

export { FilterBody, FilterBtn };
