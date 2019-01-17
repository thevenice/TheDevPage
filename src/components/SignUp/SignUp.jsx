import React, { Component } from "react";
import { Consumer } from "../context";
import { FormParent, FormTop, FormWrap, Button } from "../Form/FormStyled";
import SignIn from "../SignIn/Index";

class SignUp extends Component {
  render() {
    return (
      <Consumer>
        {value => {
          const signUpText = (title, name, type, holder, val) => (
            <FormParent className="form_parent">
              <label htmlFor={name}>{title}</label>
              <input
                id={name}
                type={type}
                name={name}
                className="form_input"
                placeholder={holder}
                value={val}
                onChange={value.onChangeForm}
                autoComplete
                required
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
              <SignIn />
              <div>
                <p>Or</p>
                <Button
                  className="buttonSubmit"
                  type="button"
                  value="Join Now"
                  onClick={_ => value.onSignUp()}
                />
              </div>
              <FormWrap
                className={!value.state.signUpApply ? "notHidden" : "Hidden"}
              >
                <div className="titleForm">
                  <p>Sign up with us in 2 minutes</p>
                </div>
                {signUpText(
                  "twitter",
                  "twitter",
                  "text",
                  "Enter Twitter ID",
                  value.state.twitter
                )}
                {signUpText(
                  "email",
                  "email",
                  "email",
                  "Enter Email ID",
                  value.state.email
                )}
                {signUpText(
                  "password",
                  "password",
                  "password",
                  "password",
                  value.state.password
                )}
                {signUpText(
                  "Confirm password",
                  "confirmPassword",
                  "password",
                  "confirm password",
                  value.state.ConfirmPassword
                )}
                <Button
                  className="buttonSubmit"
                  type="submit"
                  value="sign up"
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
export default SignUp;
