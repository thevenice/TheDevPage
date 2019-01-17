import React from "react";
import { Consumer } from "../context";
import {
  FormTop,
  FormWrap,
  FormParent,
  Button,
  FormHeader
} from "./FormStyled";
import Data from "../../People.json";

class Form extends React.Component {
  render() {
    return (
      <Consumer>
        {value => {
          // form templating
          const formFuncText = (title, name, type, holder, val) => (
            <FormParent className="form_parent">
              <label htmlFor={name}>{title}</label>
              <input
                type={type}
                name={name}
                className="form_input"
                placeholder={holder}
                value={val}
                onChange={value.onChangeForm}
              />
            </FormParent>
          );
          // onSubmit
          const onSubmit = e => {
            e.preventDefault();
            console.log(value.state);
          };
          return (
            <FormTop>
              {/* title UX here */}
              <FormWrap onSubmit={onSubmit}>
                <div>
                  {Data.map(person => {
                    const id = value.state.username;
                    if (person.contact.twitter === id) {
                      return (
                        <FormHeader>
                          <div>
                            <img src={person.imageUrl} alt="img" />
                          </div>
                          <div className="titleForm">
                            <p>Details of @{person.contact.twitter}</p>
                          </div>
                        </FormHeader>
                      );
                    }
                  })}
                </div>
                {formFuncText(
                  "name",
                  "name",
                  "text",
                  "Enter Name",
                  value.state.name
                )}
                {formFuncText(
                  "twitter",
                  "twitter",
                  "text",
                  "Enter Twitter ID",
                  value.state.twitter
                )}
                {formFuncText(
                  "github",
                  "github",
                  "text",
                  "Enter Github ID",
                  value.state.github
                )}
                {formFuncText(
                  "email",
                  "email",
                  "email",
                  "Enter Email ID",
                  value.state.email
                )}
                {formFuncText(
                  "city",
                  "city",
                  "text",
                  "City, Country",
                  value.state.city
                )}
                {formFuncText(
                  "website",
                  "website",
                  "text",
                  "Website url",
                  value.state.website
                )}{" "}
                {formFuncText(
                  "web Language",
                  "lang",
                  "text",
                  "Ex: Javascript, Ruby Etc.",
                  value.state.lang
                )}
                {formFuncText(
                  "Frontend framework",
                  "fe_f",
                  "text",
                  "Ex: React, Vue Etc.",
                  value.state.fe_f
                )}
                {formFuncText(
                  "Backend framework",
                  "be_f",
                  "text",
                  "Ex: Node Etc.",
                  value.state.be_f
                )}
                {formFuncText(
                  "Other Tech",
                  "other",
                  "text",
                  "Ex: Express, GraphQL, Etc.",
                  value.state.other
                )}
                {formFuncText(
                  "Bio",
                  "about",
                  "text",
                  "tell us something to display...",
                  value.state.bio
                )}
                <Button
                  className="buttonSubmit"
                  type="submit"
                  value="submit"
                  onClick={_ => alert("Changes Saved")}
                />
              </FormWrap>
            </FormTop>
          );
        }}
      </Consumer>
    );
  }
}
export default Form;
