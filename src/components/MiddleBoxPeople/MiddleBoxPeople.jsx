import React from "react";
import { Link } from "react-router-dom";
import Data from "../../People.json";
import { MiddleBox, MCards } from "./MiddleBoxPeopleStyled";
import { Consumer } from "../context";

class MiddleBoxPeople extends React.Component {
  render() {
    return (
      <Consumer>
        {value => {
          return (
            <MiddleBox>
              <div className="MBL1">
                {Data.map(person => {
                  const id = person.contact.twitter;
                  return (
                    <MCards
                      key={id}
                      className="MCard"
                      onClick={_ => value.onHandle(id)}
                    >
                      {" "}
                      <Link
                        key={id}
                        className="MBLChild1"
                        // target="_blank"

                        to={`/people/${id}`}
                      >
                        <img src={person.imageUrl} alt="img150" />
                        <div>
                          <p>{person.name}</p>
                          <p>{person.type}</p>
                          <p>
                            {person.type === "web developer"
                              ? person.skills.stack
                              : person.country}
                          </p>
                        </div>
                      </Link>
                    </MCards>
                  );
                })}
              </div>
            </MiddleBox>
          );
        }}
      </Consumer>
    );
  }
}

export default MiddleBoxPeople;
