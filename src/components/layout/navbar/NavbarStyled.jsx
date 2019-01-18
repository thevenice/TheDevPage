import { sizes, theme } from "../../GlobalStyle";

import styled from "styled-components";
// Nav_Top
const NavTop = styled.div`
  display: grid;
  grid-template-rows: auto;
  grid-template-columns: 1fr;
  background-color: ${theme.white};
  transition: all 600ms cubic-bezier(0.22, 0.61, 0.36, 1);
  .hidden {
    display: none;
  }
  @media (min-width: ${sizes.tablet}px) {
    /*  */
    background-color: ${theme.white};
    .hidden {
      display: grid;
    }
  }
`;
// NAV_Main
const NavMain = styled.nav`
  display: grid;
  background-color: inherit;
  position: relative;
  box-sizing: border-box;
  grid-template-columns: 1fr minmax(100px, 300px);
  grid-column-gap: 10px;
  grid-row-gap: 0;
  grid-template-rows: 1fr;
  padding: 10px 20px;
  margin: 0;
  z-index: 111;
  width: 100%;

  a,
  button {
    text-decoration: none;
    outline: none;
  }
  /* a:hover {
    text-decoration: underline;
    text-decoration-color: ${theme.alinks};
  } */
  @media (max-width: ${sizes.tablet}px) {
    grid-template-columns: 2fr 10%;
    grid-column-gap: 0rem;
    /* padding: 15px; */
  }
`;
// NAV2
const Nav2 = styled.div`
  display: grid;
  justify-content: end;
  align-items: center;
  padding: 0;
  margin: 0;
  button {
    cursor: pointer;
    color: ${theme.golddark}!important;
    background-color: inherit;
    border: 1px solid ${theme.golddark}!important;
    border-radius: 2px;
    font-size: 18px;
    padding: 5px 15px;
  }
  button:hover {
    background-color: ${theme.whiteHover};
  }
  @media (min-width: ${sizes.tablet}px) {
    button {
      display: none;
    }
  }
`;
const Nav1 = styled.h1`
  display: grid;
  justify-content: start;
  align-items: center;
  padding: 0;
  margin: 0;
  font-family: "Anton", cursive;
  letter-spacing: 2px;
  font-weight: 400;
  text-shadow: 2px 2px ${theme.black2};
  a {
    color: ${theme.gold}!important;
    background-color: inherit;
    border-radius: 2px;
    font-size: 30px;
    padding: 2px 5px;
    /* margin-right: 2rem; */
    /* padding: 8px 19px; */
    z-index: 11;
  }
  @media (min-width: ${sizes.tablet}px) {
    padding: 0;
    a {
      font-size: 32px;
    }
  }
`;
// navHide Wrap
const NavHideOn = styled.div``;
const NavHide = styled.div`
  display: grid;
  grid-template-rows: repeat(10, 1fr);
  grid-template-columns: 1fr;
  grid-column-gap: 1rem;
  height: 100vh;
  background-color: inherit;
  font-family: "Exo 2", sans-serif;
  /* text-transform: uppercase; */
  font-size: 1.5em;
  font-weight: 400;
  border-bottom: 1px solid ${theme.borderlight};
  transition: all 200ms linear;

  div {
    padding-bottom: 10px;
    transition: a, button 200ms linear;
    width: 100%;
    /* box-shadow: 0px 1px 20px 2px #e0e0e0; */
  }

  a {
    padding: 5px 15px;
    transition: all 200ms linear;
    color: ${theme.black2};
    transition: all 200ms linear;
    text-decoration: none;
  }

  @media (max-width: ${sizes.tablet}px) {
    text-align: end;
    margin: 2em 1em;
    overflow-y: hidden;
    a,
    button {
      border-right: 3px solid ${theme.goldopa};
    }
    a:hover,
    button:hover {
      background-color: ${theme.whiteHover};
    }
  }
  @media (min-width: ${sizes.tablet}px) {
    grid-template-columns: repeat(10, 1fr);
    grid-template-rows: 1fr;
    height: auto;
    grid-column-gap: 2rem;
    font-size: 25px;
    font-weight: 600;
    text-align: auto;
    margin: 0;
    a:hover {
      text-decoration: underline;
      text-decoration-color: ${theme.golddark};
    }
  }
`;
const DarkLord = styled.button`
  /* margin: auto; */
  cursor: pointer;
  background-color: inherit;
  border: none;
  color: ${theme.black2};
  font-size: 2em;
  font-weight: 400;
  transition: all 600ms cubic-bezier(0.22, 0.61, 0.36, 1);
  text-decoration: none;
  outline: none;

  @media (min-width: ${sizes.tablet}px) {
    font-size: 25px;
    font-weight: 600;
  }
`;

// NAV1
export { NavTop, NavMain, Nav1, Nav2, NavHide, NavHideOn, DarkLord };
