import styled from "styled-components";
import { sizes, theme } from "../GlobalStyle";
const SideTop = styled.div`
  .Hidden {
    display: none;
  }
`;
const SideFiBody = styled.div`
  grid-column: 0 / all;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  height: auto;
  background-color: ${theme.whiteHover};
`;
const SideBar = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(3, 1fr);
  /* border: 1px solid ${theme.black}; */
  * {
    border: 1px solid ${theme.black};
    margin: 1rem;
  }
  @media (min-width: ${sizes.tablet}px) {
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 1fr;
  }
`;

export { SideTop, SideFiBody, SideBar };
