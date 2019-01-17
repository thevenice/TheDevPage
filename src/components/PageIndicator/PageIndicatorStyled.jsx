import styled from "styled-components";
import { theme, sizes } from "../GlobalStyle";
const PageUl = styled.div`
  transition: all 300ms linear;
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  grid-template-rows: 1fr;
  > div {
    grid-column: 2/3;
    padding: 0.5rem 1rem;
    margin: 0;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr;
    text-align: center;
    width: 10vw;
  }
  div > * {
    cursor: pointer;
    align-content: center;
    padding: 5px 10px;
    text-align: center;
    font-size: 22px;
    border: 1px solid ${theme.borderlight};
  }
  div > button:nth-child(1),
  button:nth-child(3) {
    outline: none;
    background-color: ${theme.whiteoff};
  }
  div > button:nth-child(1):active,
  button:nth-child(3):active {
    background-color: ${theme.goldbg};
  }
  div > button:nth-child(1) {
    border-top-left-radius: 10%;
    border-bottom-left-radius: 10%;
  }
  div > button:nth-child(3) {
    border-top-right-radius: 10%;
    border-bottom-right-radius: 10%;
  }
  @media (min-width: ${sizes.tablet}px) {
    > div {
      margin: 0 auto;
    }
  }
`;
export { PageUl };
