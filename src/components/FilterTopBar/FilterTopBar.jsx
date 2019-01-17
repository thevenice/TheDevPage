import React, { Component } from "react";
import { FilterBody, FilterBtn } from "./FilterTopBarStyled";
import { Consumer } from "../context";
class FilterTopBar extends Component {
  render() {
    return (
      <Consumer>
        {value => {
          return (
            <FilterBody>
              <div>
                <FilterBtn className="FTop" onClick={_ => value.onFilterOpen()}>
                  {" "}
                  Filter
                </FilterBtn>
              </div>
            </FilterBody>
          );
        }}
      </Consumer>
    );
  }
}
export default FilterTopBar;
