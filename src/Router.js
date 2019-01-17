import React from "react";
// import styled, { ThemeProvider } from "styled-components";
import "./App.css";
import { GlobalStyle, GlobalDark } from "./components/GlobalStyle";
import LandingPage from "./components/landingPage/Index.js";
import Navbar from "./components/layout/navbar/Index";
// import Footer from "./components/layout/footer/Index";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import PeopleAll from "./components/PeopleAll/PeopleAll";
import NotFound from "./components/NotFound/Index";
import PerPerson from "./components/PerPerson/Index";
import { MyProvider, Consumer } from "./components/context";
import Form from "./components/Form/Index.jsx";
import SignUp from "./components/SignUp/Index";
import DashBoard from "./components/DashBoard/Index";

class Router extends React.Component {
  render() {
    return (
      <MyProvider>
        <BrowserRouter>
          <div className="App">
            <Consumer>
              {value => {
                return !value.state.highlight ? (
                  <GlobalDark />
                ) : (
                  <GlobalStyle />
                );
              }}
            </Consumer>
            <Navbar brand="DevPage" theme={this.theme} />
            <Switch>
              <Route exact path="/" component={LandingPage} />
              {/*people only*/}
              <Route exact path="/people" component={PeopleAll} />
              />
              {/* perperson id */}
              <Route exact path={`/people/:id`} component={PerPerson} />
              {/* form */}
              <Route path="/form" component={Form} />
              {/* signup */}
              <Route path="/signup" component={SignUp} />
              {/* DashBoard */}
              <Route path="/dashboard" component={DashBoard} />
              <Route component={NotFound} />
            </Switch>

            {/* <Footer /> */}
          </div>
        </BrowserRouter>
      </MyProvider>
    );
  }
}

export default Router;
