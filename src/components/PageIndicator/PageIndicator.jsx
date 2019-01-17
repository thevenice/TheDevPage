import React, { Component } from "react";
import { PageUl } from "./PageIndicatorStyled";
class PageIndicator extends Component {
  render() {
    return (
      <PageUl>
        <div>
          <button>prevs</button>
          <div>current</div>
          <button>next</button>
        </div>
      </PageUl>
    );
  }
}
export default PageIndicator;
