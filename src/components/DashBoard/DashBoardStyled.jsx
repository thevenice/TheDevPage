import styled from "styled-components";
import { sizes, theme } from "../GlobalStyle";
const DashBoardWrap = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  grid-row-gap: 5em;
  grid-column-gap: 0rem;
  padding: 1em;
  background-color: ${theme.whiteoff};
  > div {
    box-shadow: 0px 2px 4px 0px ${theme.borderlight};
    border-radius: 8px;
    padding: 0.5rem 1rem;
    margin: 0 auto;
  }
  button,
  a {
    z-index: 11;
    border: 1px solid ${theme.gold};
    padding: 2.5px 2px;
    font-size: 1rem;
  }
  a {
    text-decoration: none;
  }

  /* Edit Settings */
  > div:nth-child(2) {
  }
  @media (min-width: ${sizes.tablet}px) {
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: auto;
    grid-row-gap: 2em;
    grid-column-gap: 1em;
  }
`;

const MainDash = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  padding-bottom: 1rem;
  background-color: ${theme.gold};
  border: 1px solid ${theme.gold};

  a {
    padding: 5px 10px;
    background-color: ${theme.golddark};
  }
  img {
    margin: 0 auto;
    width: 40%;
    height: auto;
    border-radius: 50%;
    border: 3px solid ${theme.gold};
    object-fit: contain;
  }
  div {
    grid-row-gap: 1rem;
  }
  div > p {
    line-height: 1;
  }
  div > p:nth-child(1) {
    /* Fonts */
    text-transform: capitalize;
    font-size: 1.5rem;
    font-weight: 700;
    letter-spacing: 2;
    margin: 0;
  }
  div > p:nth-child(2) {
    margin: 5px 0;
    font-size: 1.2rem;
    font-weight: 500;
    color: ${theme.black2};
  }

  div > p:nth-child(3) {
    /* Fonts */
    font-size: 1.1rem;
  }
  @media (min-width: ${sizes.tablet}px) {
    grid-column: 2/3;
    grid-template-columns: 1fr;
    grid-template-rows: auto;
    img {
      width: 50%;
      height: auto;
    }
  }
`;
// const SettingEdit = styled.div` display: grid;
// grid-template-columns: 1fr;
// grid-template-rows: auto;
// grid-row-gap: 0;
// background-color: ${theme.white};
// border:1px solid ${theme.white};

// button {
//   text-align: center;
//   padding: 5px 10px;
//   margin: auto;
// }
// > div > p:nth-child(1) {
//   text-transform: uppercase;
//   font-size: 1.2rem;
//   font-weight: 500;
// }
// > div > p:nth-child(2) {
//   font-size: 1rem;
//   /* background-color: ${theme.goldopa}; */
//   font-weight: 500;
// }
// @media(min-width:${sizes.tablet}px){
// grid-column:4/11;
// width:100%;
// }`;
export { DashBoardWrap, MainDash };
