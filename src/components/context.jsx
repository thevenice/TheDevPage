import React from "react";
const Context = React.createContext();
class MyProvider extends React.Component {
  state = {
    name: "",
    username: "ikeoha_chidi",
    userPassword: "",
    password: "",
    confirmPassword: "",
    email: "",
    twitter: "",
    github: "",
    city: "",
    website: "",
    lang: "",
    fe_f: "",
    be_f: "",
    bio: "",
    other: [],
    currentId: "",
    highlight: true,
    navToggle: false,
    filterClose: true,
    signUpApply: true
  };

  render() {
    const { Provider } = Context;
    return (
      <Provider
        value={{
          state: this.state,
          onHandle: id => {
            this.setState({
              currentId: id
            });
          },
          onChangeForm: e =>
            this.setState({
              [e.target.name]: e.target.value
            }),
          onNavToggle: () => {
            !this.state.navToggle
              ? this.setState({ navToggle: true })
              : this.setState({ navToggle: false });
          },
          onDark: () => {
            !this.state.highlight
              ? this.setState({ highlight: true })
              : this.setState({ highlight: false });
          },
          onFilterOpen: () => {
            !this.state.filterClose
              ? this.setState({ filterClose: true })
              : this.setState({ filterClose: false });
          },
          onSignUp: () => {
            !this.state.signUpApply
              ? this.setState({ signUpApply: true })
              : this.setState({ signUpApply: false });
          }
        }}
      >
        {this.props.children}
      </Provider>
    );
  }
}
export { MyProvider };
export const Consumer = Context.Consumer;
