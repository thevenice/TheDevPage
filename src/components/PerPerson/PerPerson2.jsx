// import React from "react";
// import { LeftBox, ImgBg, LeftBoxTop } from "./PerPersonStyled";
// import Data from "../../People.json";
// import { Consumer } from "../context";

// class PerPerson extends React.Component {
//   render() {
//     return (
//       <Consumer>
//         {value => {
//           return (
//             <React.Fragment>
//               {/* left side panel dark */}
//               {console.log(value.state)}
//               {Data.map(person => {
//                 const id = value.state.currentId;
//                 const DivUl = (x, y) => {
//                   return (
//                     <div>
//                       <ul>
//                         <p>{x} </p>
//                         <p>{y}</p>
//                       </ul>
//                     </div>
//                   );
//                 };
//                 const Ternaries = (x, y) => {
//                   return (
//                     <div>
//                       <ul>
//                         <p>{x} </p>
//                         <p> {y ? "Yes" : "No"}</p>
//                       </ul>
//                     </div>
//                   );
//                 };
//                 const ArrayDes = (x, y) => {
//                   return (
//                     <div>
//                       <ul>
//                         <p> {x}</p>
//                         <p>
//                           {y.map(i => (
//                             <span>{` ${i}`}</span>
//                           ))}
//                         </p>
//                       </ul>
//                     </div>
//                   );
//                 };

//                 const ClickAble = (x, y) => {
//                   return (
//                     <div>
//                       <ul>
//                         <p> {x}</p>
//                         <p>
//                           {
//                             <a
//                               target="_blank"
//                               href={`https://www.${x}.com/${y}`}
//                             >
//                               {y}
//                             </a>
//                           }
//                         </p>
//                       </ul>
//                     </div>
//                   );
//                 };
//                 // Clickable2
//                 const ClickAble2 = (q, x, y) => {
//                   return (
//                     <div>
//                       <ul>
//                         <p> {x}</p>
//                         <p>
//                           {q === "email" ? (
//                             <a target="_blank" href={`${y}`}>
//                               {" "}
//                               {y}{" "}
//                             </a>
//                           ) : (
//                             <a
//                               target="_blank"
//                               href={`https://www.${q}.com/${y}`}
//                             >
//                               {y}
//                             </a>
//                           )}
//                         </p>
//                       </ul>
//                     </div>
//                   );
//                 };

//                 console.log("current id", id);
//                 // console.log("match id", value.match.params.id);
//                 if (person.contact.twitter === id) {
//                   return (
//                     <LeftBoxTop key={person.contact.twitter}>
//                       <LeftBox key={person.contact.twitter}>
//                         {/* first row of Leftbox */}
//                         <ImgBg>
//                           <img src={person.imageUrl} alt="150px" />
//                           <div>
//                             <p>{person.name}</p>
//                             <p>{person.skills.lang}</p>
//                           </div>
//                         </ImgBg>

//                         <div>
//                           <ul>
//                             {/* DOB */}
//                             {DivUl("D.O.B", person.DOB)}
//                             {/* Location */}
//                             {DivUl("Location", person.country)}
//                             {/* FRONTEND  */}
//                             {DivUl("FrontEnd", person.skills.fe_f)}
//                             {/*BACKEND  */}
//                             {DivUl("BackEnd", person.skills.be_f)}
//                             {/*Available  */}
//                             {Ternaries("Available", person.available)}
//                             {/*OTHER SKILLS  */}
//                             {ArrayDes("Other Skills", person.skills.other)}

//                             {/*TWITTER  */}
//                             {ClickAble("twitter", person.contact.twitter)}
//                             {ClickAble("github", person.contact.github)}

//                             {/*EMAIL  */}
//                             {ClickAble2("email", "Email", person.contact.email)}

//                             {/* END */}
//                           </ul>
//                         </div>
//                         <div />
//                       </LeftBox>
//                     </LeftBoxTop>
//                   );
//                 }
//               })}
//             </React.Fragment>
//           );
//         }}
//       </Consumer>
//     );
//   }
// }
// export default PerPerson;
