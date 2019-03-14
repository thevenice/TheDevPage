import styled from "styled-components";
import { sizes, theme } from "../GlobalStyle";
const LeftBoxTop = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  background-color: ${theme.whiteoff};
  @media (min-width: ${sizes.tablet}px) {
    /* atleast tablet size to apply this */
    grid-template-columns: repeat(10, 1fr);
    grid-template-rows: repeat(auto-fit, minmax(1fr, auto));
    > div {
      margin: 1em 2em;
      box-shadow: 0px 2px 25px 2px #eee;
    }
  }
`;
const LeftBox = styled.div`
  display: grid;
  box-sizing: border-box;
  grid-template-columns: 1fr;
  grid-template-rows: minmax(auto, 1fr);
  background-color: ${theme.white};
  text-align: left;
  margin: 0;
  padding: 0;
  @media (min-width: ${sizes.tablet}px) {
    /* atleast tablet size to apply this */
    grid-column-start: 1;
    grid-column-end: 11;
    grid-template-columns: 1fr 3fr;
    grid-template-rows: auto;
    border: 1px solid ${theme.white};
  }
  @media (min-width: ${sizes.desktop}px) {
    /* atleast tablet size to apply this */
    grid-column-start: 3;
    grid-column-end: 9;
    grid-template-columns: 1fr 4fr;

    /* grid-row-start: 2;
    grid-row-end: 10; */
  }
`;

const ImgBg = styled.div`
  width: auto;
  text-align: center;
  padding: 0;
  object-fit: contain;
  .backTopBtn {
    display: block;
    background-color: inherit;
    text-align: start;
    padding: 15px 10px;
    a {
      font-size: 19px;
      padding: 3px 6px;
      border: 1px solid ${theme.gold};
      background-color: ${theme.goldbg};
      color: ${theme.golddark};
      text-transform: uppercase;
      text-decoration: none;
    }
  }
  img {
    /* height: 100vw; */
    width: 100%;
  }
  div {
    text-align: center;
    p:nth-child(1) {
      font-weight: 600;
      color: ${theme.blackhover};
      font-size: 16px;
      letter-spacing: 2;
    }
    p:nth-child(2) {
      font-weight: 470;
      text-transform: uppercase;
      color: ${theme.alinks};
    }
  }
  @media (min-width: ${sizes.tablet}px) {
    /* atleast tablet size to apply this */
    .backTopBtn {
      display: none;
    }
    div > p:nth-child(1) {
      font-size: 1rem;
    }
    div > p:nth-child(2) {
      font-size: 1.2rem;
    }
  }
`;
const DetailBelow = styled.div`
  box-sizing: border-box;
  padding-left: 0.7rem;
  padding-right: 0.7rem;
  /* border-bottom: 1px solid #000; */

  a {
    text-decoration: none;
    color: ${theme.alinks};
  }
  li > span {
    padding: 2px;
    background-color: #eee;
  }
  @media (min-width: ${sizes.tablet}px) {
    /* atleast tablet size to apply this */
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: auto;
    > div:nth-child(1) {
      grid-column: 1/4;
      padding-right: 1rem;
      border-bottom: 1px solid ${theme.borderlight};
    }
  }
`;
const DetailsBDiv = styled.div`
  ul {
    text-align: center;
    line-height: 0.9;
    padding: 0;
    margin-bottom: 2.4rem;
  }
  ul > p {
    margin-left: ${props => (props.bio ? "15%" : "0")};
    margin-right: ${props => (props.bio ? "15%" : "0")};
    line-height: ${props => (props.bio ? 1.2 : 0.7)};
  }
  ul > p:nth-child(1) {
    font-size: 0.8em;
    font-weight: 600;
    text-transform: uppercase;
    color: ${theme.black2};
    margin: 0;
  }

  ul > p:nth-child(2) {
    margin-top: 9px;
    font-size: 1.5em;
    color: ${theme.blackhover};
    font-weight: 470;
  }
  @media (min-width: ${sizes.tablet}px) {
    /* atleast tablet size to apply this */
    ul > p:nth-child(1) {
      font-size: 0.8rem;
    }
    ul > p:nth-child(2) {
      font-size: 1.2rem;
    }
  }
`;

export { LeftBox, ImgBg, LeftBoxTop, DetailBelow, DetailsBDiv };
