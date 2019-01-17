import styled from "styled-components";
import { sizes, theme } from "../GlobalStyle";
import bgdiv2 from "../../assets/images/benni-asal-752715-unsplash.jpg";

const MainTop = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  font-size: 30px;
  /* * {
    border: 1px solid ${theme.gold};
  }
  * > * {
    border: 1px solid ${theme.gold};
  } */
`;
const LandChild = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  height: 100vh;
  padding: 5px 10px;
  > div {
    margin: auto;
    padding: 0px 10px;
    background-color: ${theme.gold};
    height: 45vh;
    h1 {
      font-size: 1.2em;
    }
    p {
      font-size: 0.7em;
    }
  }
  @media (min-width: ${sizes.desktop}px) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
    height: 100vh;
    > div {
      h1 {
        font-size: 2em;
      }
      p {
        font-size: 1.3em;
      }
    }
  }
`;
const Div2 = styled.div`
  background-image: url(${bgdiv2});
  background-size: cover;
  width: 100%;
  height: 50%;
  @media (min-width: ${theme.desktop}px) {
    height: 100%;
  }
`;
const Div3 = styled.div`
  background-image: url(${bgdiv2});
  background-size: cover;
  width: 100%;
  @media (min-width: ${theme.desktop}px) {
    /* height: 100%; */
  }
`;
export { MainTop, LandChild, Div2, Div3 };
