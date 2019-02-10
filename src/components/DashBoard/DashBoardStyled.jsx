import styled from "styled-components";
import { sizes, theme } from "../GlobalStyle";
const DashBoardWrap = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  grid-row-gap: 5em;
  grid-column-gap: 0rem;
  padding: 1em;
  /* box shadow */
  ._MainDash:hover {
    transform: translate(0px, -3px);
    box-shadow: 0 15px 45px -5px rgba(10, 16, 34, 1.3);
    transform: translate(0px, -2px);

    /* bg color on hover */
    /* background-color: #004d40; */
    /* bg color on hover */
  }
  /* box shadow */

  /* main dash text */
  ._MainDash_Text {
    padding-top: 20px;
    /* padding-bottom: 10px; */
  }
  /* main dash text */
  /* button edit info */
  ._Edit_Info {
    /* padding-top: 30px; */
    a {
      border-radius: 20px;
    }
  }
  /* button edit info */
  /* inner main dash contain for padding */
  ._MainDash_Contain {
    padding: 10px;
  }
  /* inner main dash contain for padding */
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
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: auto;
    grid-row-gap: 2em;
    grid-column-gap: 1em;
    ._MainDash_Contain {
      padding: 20px;
    }
  }
`;

const MainDash = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  padding-bottom: 1rem;
  /* background-image: ${props => `url(${props.bg})`}; */
  background-image:url('https://images.unsplash.com/photo-1549472579-e133f59d8b23?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80');
  background-blend-mode: multiply;
  background-position: top center;
  background-size: cover;
  background-repeat: no-repeat;
  background-color: #004d40;
  /* border: 1px solid ${theme.gold}; */
  box-shadow: 0 5px 15px -2px rgba(10, 16, 34, 0.4);
  transition: all 200ms ease;
  
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
     color: ${theme.white};
  }
  div > p {
    line-height: 1;
  }
  div > p:nth-child(1) {
    /* Fonts */
    text-transform: capitalize;
    font-size: 2rem;
    font-weight: 700;
    letter-spacing: 2;
    margin: 0;
  }
  div > p:nth-child(2) {
    margin: 5px 0;
    font-size: 1.2rem;
    font-weight: 500;
    /* color: ${theme.white}; */
  }

  div > p:nth-child(3) {
    /* Fonts */
    font-size: 1.1rem;
  }
  @media (min-width: ${sizes.tablet}px) {
    /* main dash */
    grid-column: 2/4;
    grid-template-columns: 1fr;
    grid-template-rows: auto;
    img {
      width: 50%;
      height: auto;
    }
    div > p:nth-child(3) {
    /* Fonts */
    font-size: 2.1rem;
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
