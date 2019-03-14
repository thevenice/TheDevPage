import React, { Component } from "react";
import { Consumer } from "../context";
import { FormParent, FormTop, FormWrap, Button } from "../Form/FormStyled";

class SignIn extends Component {
  render() {
    return (
      <Consumer>
        {value => {
          const SignInText = (title, name, type, holder, val) => (
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
          const onSubmit = e => {
            e.preventDefault();
            console.log(value.state);
          };
          return (
            <FormTop onSubmit={onSubmit}>
              {/* boxwrap */}
              <FormWrap>
                <div className="titleForm">
                  <p>Log In!</p>
                </div>
                {SignInText(
                  "Username",
                  "username",
                  "text",
                  "Enter Username",
                  value.state.username
                )}
                {SignInText(
                  "password",
                  "password",
                  "password",
                  "*******",
                  value.state.userPassword
                )}
                <Button
                  className="buttonSubmit"
                  type="submit"
                  value="Log in"
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
export default SignIn;
