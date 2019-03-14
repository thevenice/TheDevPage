import styled from "styled-components";
import { sizes, theme } from "../GlobalStyle";
const PAWRAP = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 8vh auto;
  grid-column-gap: 2rem;
  box-sizing: border-box;
  background-color: inherit;
  padding: 0;
  margin: 0;
  width: 100%;
  .Hidden {
    display: none;
  }
  a {
    text-decoration: none;
    color: ${theme.black2};
  }
  /* > div {
    margin: 0.2em 0em;
  } */
  @media (min-width: ${sizes.tablet}px) {
    /* atleast tablet size to apply this */
    grid-template-columns: 1fr;
    height: 80vh;
    padding: 0;
    /* > div {
      margin: 1em;
    } */
  }
`;

export { PAWRAP };
