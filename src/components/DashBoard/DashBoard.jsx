import React, { Component } from "react";
import { Link } from "react-router-dom";
import { DashBoardWrap, MainDash } from "./DashBoardStyled";
import Data from "../../People.json";
import { Consumer } from "../context";
class DashBoard extends Component {
  render() {
    return (
      <Consumer>
        {value => {
          return (
            <>
              {Data.map(person => {
                const user = value.state.username;
                console.log(user);
                if (person.contact.twitter === user) {
                  return (
                    <DashBoardWrap key={user}>
                      <MainDash className="_MainDash" bg={person.imageUrl}>
                        <div className="_MainDash_Contain">
                          <img src={person.imageUrl} alt={person.name} />
                          <div className="_MainDash_Text">
                            <p>{person.name}</p>
                            <p>Available: {person.available ? "Yes" : "Not"}</p>
                            <p>{person.bio}</p>
                            <span className="_Edit_Info">
                              {" "}
                              <Link to="/form">Edit Info 🖉</Link>
                            </span>
                          </div>
                        </div>
                      </MainDash>
                    </DashBoardWrap>
                  );
                }
              })}
            </>
          );
        }}
      </Consumer>
    );
  }
}
export default DashBoard;
