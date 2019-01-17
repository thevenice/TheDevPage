import React from "react";
// import PerPerson from "../PerPerson/Index";
import { ThemeProvider } from "styled-components";
import { PAWRAP } from "./PeopleAllStyled";
import { theme, GlobalStyle } from "../GlobalStyle";
// import Data from "../../People.json";
import MiddleBoxPeople from "../MiddleBoxPeople/Index.js";
import FilterTopBar from "../FilterTopBar/Index";
import PageIndicator from "../PageIndicator/Index";
import { Consumer } from "../context";
import FilterSideBar from "../FilterSideBar/FilterSideBar";

const PeopleAll = props => {
  return (
    <Consumer>
      {value => {
        return (
          <ThemeProvider theme={theme}>
            <PAWRAP>
              <GlobalStyle />
              <FilterTopBar />
              <FilterSideBar />
              <div>
                <PageIndicator />
              </div>
              <MiddleBoxPeople />
              <div>
                <PageIndicator />
              </div>
            </PAWRAP>
          </ThemeProvider>
        );
      }}
    </Consumer>
  );
};
export default PeopleAll;
