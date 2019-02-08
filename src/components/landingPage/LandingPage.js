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
            <h1>Welcome to DevPage </h1>
            <p>
              We have some of the best Learner who are looking for their first
              project, let's explore the right one to team up with you.
            </p>
          </div>
          <Div2 />
        </LandChild>
        <LandChild>
          <Div3 />
          <div>
            {" "}
            <h1>Purpose</h1>
            <p>we are hire to help developers and hiring agencies</p>
          </div>
        </LandChild>
        <div className={"_creator"}>
          <div>
            <h1 className={"headershadow"}>Team Creator</h1>
          </div>
          <LandChild>
            <div className={"_singlechild"}>
              <h2>Prakash Pawar</h2>
              <p>Just a self taught webdev trying to prove his worth.</p>
            </div>
          </LandChild>
        </div>
        {/* <LandChild>
          <div>div7</div>
          <div>div8</div>
        </LandChild> */}
      </MainTop>
    );
  }
}

export default LandingPage;
