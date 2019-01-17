import React from "react";
import { MainTop, LandChild, Div2, Div3 } from "./LandingStyled";
// import Hero from "../Hero/Index";

class LandingPage extends React.Component {
  render() {
    return (
      <MainTop>
        {/*  RESPONSIVE Done */}
        <LandChild>
          <div>
            <h1>BIG HEADING HERE</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum
              unde harum.
            </p>
          </div>
          <Div2>Div2</Div2>
        </LandChild>
        <LandChild>
          <Div3>Div3</Div3>
          <div>
            {" "}
            <h1>BIG HEADING HERE</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum
              unde harum.
            </p>
          </div>
        </LandChild>
        <div>
          <h1>Team Creator</h1>
        </div>
        <LandChild>
          <div>
            <h2>NAME</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Accusantium quibusdam ipsum aperiam cum.
            </p>
          </div>
          <div>
            <h2>NAME</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Accusantium quibusdam ipsum aperiam cum.
            </p>
          </div>
        </LandChild>
        <LandChild>
          <div>div7</div>
          <div>div8</div>
        </LandChild>
      </MainTop>
    );
  }
}

export default LandingPage;
