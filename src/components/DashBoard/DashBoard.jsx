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
                      <MainDash>
                        <img src={person.imageUrl} alt={person.name} />
                        <div>
                          <p>{person.name}</p>
                          <p>Available: {person.available ? "Yes" : "Not"}</p>
                          <p>{person.bio}</p>
                          <span>
                            {" "}
                            <Link to="/form">Edit Info 🖉</Link>
                          </span>
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
