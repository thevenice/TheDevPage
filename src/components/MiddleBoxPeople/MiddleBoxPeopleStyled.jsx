import styled from "styled-components";
import { sizes, theme } from "../GlobalStyle";
const MiddleBox = styled.div`
  .MB0 {
    /* filter here */
    display: grid;
  }
  .MBL1 {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: repeat(auto-fit, minmax(300px, 1fr));
    align-items: center;
    justify-content: center;
    background-color: ${theme.whiteoff};
    box-sizing: border-box;
    transition: all 200ms linear;
  }
  @media (min-width: ${sizes.tablet}px) {
    /* atleast tablet size to apply this */
    .MB0 {
      /* filter here */
      background-color: blueviolet;
    }
    .MBL1 {
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    }
  }

  @media (min-width: ${sizes.desktop}px) {
    /* atleast desktop size to apply this */
    .MB0 {
      /* filter here */
      background-color: darkcyan;
    }
    .MBL1 {
      grid-column-gap: 2rem;
      grid-row-gap: 2rem;
      padding: 3vh 3vw;
    }
  }
  @media (min-width: ${sizes.gaint}px) {
    /* atleast gaint size to apply this */
    .MB0 {
      /* filter here */
      background-color: darkcyan;
    }
    .MBL1 {
      /*  */
    }
  }
`;
const MCards = styled.div`
  cursor: pointer;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  grid-column-gap: 0.1rem;
  margin: 0;
  padding: 1em;
  width: 100% !important;
  height: 100% !important;
  background-color: ${theme.white};
  *>p {
    margin-bottom: 0;
  }
  /* box-shadow: -5px 5px ${theme.gold}, 5px -5px ${
  theme.black2
}, -5px -5px blue,
    5px 5px #000, 5px -5px ${theme.gold}; */
  color: ${theme.black2};
  border: 1px solid ${theme.borderlight};
  /* fonts */
  font-size: 14px;
  font-weight: 800;
  line-height: 1.4em;
  img {
    display: block;
    width: 100%;
    border: 1px solid ${theme.borderlight};
    /* height: 50%; */
  }
  div {
    /*  */
  }
  p {
    text-transform: capitalize;
  }
  @media (min-width: ${sizes.tablet}px) {
    font-size: 16px;
  }
  @media (min-width: ${sizes.desktop}px) {
    font-size: 18px;
  }
`;

export { MCards, MiddleBox };
