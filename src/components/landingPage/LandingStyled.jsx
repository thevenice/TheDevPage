import styled from "styled-components";
import { sizes, theme } from "../GlobalStyle";
import HandshakeColor from "../../assets/SVG/handshake-colour.svg";
import ChociesColor from "../../assets/SVG/choices-colour.svg";

const MainTop = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  font-size: 30px;
.headershadow{
   text-shadow:3px 7px 7px #c2c2c2
}
@media (min-width:${sizes.desktop}px) {
  .headershadow{
    font-size:4em;
  }
}

._creator{
  display:grid;
  grid-row-gap:50px;
  ._singlechild{
    margin:0;
    h2{
      background: linear-gradient(50deg, #849100, #8b6f1b, gold);
      background-clip: text;
      -webkit-background-clip: text;
      color: transparent;
    }
  }
}


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
    background-color: ${theme.white};
    height: 45vh;
    border: 0.5px solid ${theme.borderThin};
    h1 {
      background: linear-gradient(50deg, #849100, #8b6f1b, gold);
      background-clip: text;
      -webkit-background-clip: text;
      color: transparent;
      font-size: 1.2em;
    }
    p {
      font-size: 0.7em;
    }
  }
  @media (min-width: ${sizes.desktop}px) {
    grid-template-columns: repeat(auto-fit, minmax(30%, 1fr));
    grid-template-rows: 1fr;
    grid-column-gap: 10px;
    height: 100vh;
    > div {
      /* box-shadow: 0px 5px 7px 0px #e0e0e0; */
      h1 {
        font-size: 2em;
      }
      p {
        font-size: 0.8em;
      }
    }
  }
`;
const Div2 = styled.div`
  background: url(${HandshakeColor}) no-repeat;
  align-content: center;
  background-size: contain;
  width: 100%;
  height: 100%;
  @media (min-width: ${theme.desktop}px) {
    height: 100%;
    width: 50%;
  }
`;
const Div3 = styled.div`
  background: url(${ChociesColor}) no-repeat;
  background-size: contain;
  width: 100%;
  height: 100%;
  @media (min-width: ${theme.desktop}px) {
    height: 100%;
    width: 50%;
  }
`;
export { MainTop, LandChild, Div2, Div3 };
