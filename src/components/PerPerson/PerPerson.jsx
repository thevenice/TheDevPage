import React from "react";
import { Link } from "react-router-dom";
import {
  LeftBox,
  ImgBg,
  LeftBoxTop,
  DetailBelow,
  DetailsBDiv
} from "./PerPersonStyled";
import Data from "../../People.json";
// import bg150 from "../../assets/images/150.png";
import { Consumer } from "../context";

class PerPerson extends React.Component {
  render() {
    return (
      <Consumer>
        {value => {
          return (
            <React.Fragment>
              {/* left side panel dark */}
              {console.log(value.state)}
              {Data.map(person => {
                const id = value.state.currentId;
                // normal div with ul
                const DivUl = (x, y) => {
                  return (
                    <DetailsBDiv>
                      <ul>
                        <p>{x} </p>
                        <p>{y}</p>
                      </ul>
                    </DetailsBDiv>
                  );
                };
                // bio divs with ul
                const BioDivUl = (x, y) => {
                  return (
                    <DetailsBDiv bio>
                      <ul>
                        <p>{x} </p>
                        <p>{y}</p>
                      </ul>
                    </DetailsBDiv>
                  );
                };
                const Ternaries = (x, y) => {
                  return (
                    <DetailsBDiv>
                      <ul>
                        <p>{x} </p>
                        <p> {y ? "Yes" : "No"}</p>
                      </ul>
                    </DetailsBDiv>
                  );
                };
                // const ArrayInObjDes = (x, y) => {
                //   return (
                //     <div>
                //       <ul>
                //         <p> {x}</p>
                //         <p>
                //           {y.map(i => (
                //             <span>{` ${i}`}</span>
                //           ))}
                //         </p>
                //       </ul>
                //     </div>
                //   );
                // };

                const ClickAble = (x, y) => {
                  return (
                    <DetailsBDiv>
                      <ul>
                        <p> {x}</p>
                        <p>
                          {
                            <a
                              target="_blank"
                              href={`https://www.${x}.com/${y}`}
                            >
                              {y}
                            </a>
                          }
                        </p>
                      </ul>
                    </DetailsBDiv>
                  );
                };
                // Clickable2
                const ClickAble2 = (q, x, y) => {
                  return (
                    <DetailsBDiv>
                      <ul>
                        <p> {x}</p>
                        <p>
                          {q === "email" ? (
                            <a target="_blank" href={`${y}`}>
                              {y}
                            </a>
                          ) : (
                            <a
                              target="_blank"
                              href={`https://www.${q}.com/${y}`}
                            >
                              {y}
                            </a>
                          )}
                        </p>
                      </ul>
                    </DetailsBDiv>
                  );
                };

                console.log("current id", id);
                // console.log("match id", value.match.params.id);
                if (person.contact.twitter === id) {
                  return (
                    <LeftBoxTop key={person.contact.twitter}>
                      <LeftBox key={person.contact.twitter}>
                        {/* first row of Leftbox */}
                        <ImgBg>
                          <div className="backTopBtn">
                            <Link to="/people">go back</Link>
                          </div>
                          <img src={person.imageUrl} alt="150px" />
                          <div>
                            <p>{person.name}</p>
                            <p className="P_Type">{person.type}</p>
                          </div>
                        </ImgBg>

                        <DetailBelow>
                          <div>
                            {" "}
                            {/* bio */}
                            {BioDivUl("bio", person.bio)}
                          </div>
                          <div>
                            {/* DOB */}
                            {DivUl("D.O.B", person.DOB)}
                            {/* MainLang */}
                            {person.type === "web developer"
                              ? DivUl("Main Language", person.skills.lang)
                              : ""}
                            {/* Stack */}
                            {person.type === "web developer"
                              ? DivUl("stack", person.skills.stack)
                              : ""}
                          </div>
                          <div>
                            {/* Location */}
                            {DivUl("Location", person.country)}
                            {/* FRONTEND  */}
                            {DivUl("FrontEnd", person.skills.fe_f)}
                            {/*BACKEND  */}
                            {DivUl("BackEnd", person.skills.be_f)}
                            {/*Available  */}
                          </div>
                          <div>
                            {Ternaries("Available", person.available)}
                            {/*OTHER SKILLS  */}
                            {/* {ArrayDes("Other Skills", person.skills.other)} */}

                            {/*TWITTER  */}
                            {ClickAble("twitter", person.contact.twitter)}
                            {ClickAble("github", person.contact.github)}

                            {/*EMAIL  */}
                            {ClickAble2("email", "Email", person.contact.email)}
                          </div>

                          {/* END */}
                        </DetailBelow>
                      </LeftBox>
                    </LeftBoxTop>
                  );
                }
              })}
            </React.Fragment>
          );
        }}
      </Consumer>
    );
  }
}
export default PerPerson;
