import React, { Component } from "react";
import { SideTop, SideFiBody, SideBar } from "./FilterSideBarStyled";
import { Consumer } from "../context";
class FilterSideBar extends Component {
  render() {
    return (
      <Consumer>
        {value => {
          return (
            <SideTop
              className={!value.state.filterClose ? "notHidden" : "Hidden"}
            >
              <SideFiBody>
                <SideBar>
                  <select>
                    <option value="op">Web Language & Frameworks</option>
                    <option value="op">React</option>
                    <option value="op">Vue</option>
                    <option value="op">Node</option>
                    <option value="op">Express</option>
                  </select>
                  <select>
                    <option value="op">Locality & city</option>
                  </select>
                  <select>
                    <option value="op">Main Skills & Focus</option>
                  </select>
                </SideBar>
              </SideFiBody>
            </SideTop>
          );
        }}
      </Consumer>
    );
  }
}
export default FilterSideBar;
