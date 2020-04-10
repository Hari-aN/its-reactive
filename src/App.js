import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import * as Icon from "react-feather";

import "./App.scss";

import Home from "./components/home";
import Navbar from "./components/navbar";
import Links from "./components/links";
import Cluster from "./components/mine/cluster";
import FAQ from "./components/faq";
import Banner from "./components/banner";
import PatientDB from "./components/patientdb";
import Muhalla from "./components/mine/muhalla";
import Deepdive from "./components/deepdive";
import Resources from "./components/resources";

const history = require("history").createBrowserHistory;

function App() {
  const pages = [
    {
      pageLink: "/its-reactive/",
      view: Home,
      displayName: "Home",
      animationDelayForNavbar: 0.2,
    },
    {
      pageLink: "/its-reactive/window",
      view: Muhalla,
      displayName: "World-Window",
      animationDelayForNavbar: 0.3,
    },
    {
      pageLink: "/its-reactive/demographics",
      view: PatientDB,
      displayName: "Demographics",
      animationDelayForNavbar: 0.3,
    },
    {
      pageLink: "/its-reactive/deepdive",
      view: Deepdive,
      displayName: "Deep Dive",
      animationDelayForNavbar: 0.4,
    },
    {
      pageLink: "/its-reactive/clusters",
      view: Cluster,
      displayName: "Clusters",
      animationDelayForNavbar: 0.4,
    },
    {
      pageLink: "/its-reactive/links",
      view: Links,
      displayName: "Helpful Links",
      animationDelayForNavbar: 0.5,
    },
    {
      pageLink: "/its-reactive/faq",
      view: FAQ,
      displayName: "FAQ",
      animationDelayForNavbar: 0.6,
    },
    {
      pageLink: "/its-reactive/essentials",
      view: Resources,
      displayName: "Essentials",
      animationDelayForNavbar: 0.7,
    },
  ];

  return (
    <div className="App">
      <Router history={history}>
        <Route
          render={({ location }) => (
            <div className="Almighty-Router">
              <Navbar pages={pages} />
              <Banner />
              <Route exact path="/" render={() => <Redirect to="/" />} />
              <Switch location={location}>
                {pages.map((page, i) => {
                  return (
                    <Route
                      exact
                      path={page.pageLink}
                      component={page.view}
                      key={i}
                    />
                  );
                })}
                <Redirect to="/" />
              </Switch>
            </div>
          )}
        />
      </Router>

      <footer className="fadeInUp" style={{ animationDelay: "2s" }}>
        <h5>We stand with everyone fighting on the frontlines</h5>
        <div className="link">
          <a href="https://github.com/covid19india">covid19india</a>
        </div>

        <a
          href="https://github.com/haribhai/its-reactive"
          className="button github"
        >
          <Icon.GitHub />
          <span>Its Reactive on GitHub</span>
        </a>
        <a
          className="button excel"
          href="https://bit.ly/patientdb"
          target="_noblank"
        >
          <Icon.Database />
          <span>Crowdsourced Patient Database&nbsp;</span>
        </a>
        <a
          href="https://twitter.com/covid19indiaorg"
          target="_noblank"
          className="button twitter"
          style={{ justifyContent: "center" }}
        >
          <Icon.Twitter />
          <span>View updates on Twitter</span>
        </a>
        <a
          href="https://bit.ly/covid19crowd"
          className="button telegram"
          target="_noblank"
        >
          <Icon.MessageCircle />
          <span>Join Telegram to Collaborate!</span>
        </a>
        <a
          href="https://github.com/covid19india/covid19india-react"
          className="button github"
        >
          <Icon.GitHub />
          <span>Open Sourced on GitHub</span>
        </a>
      </footer>
    </div>
  );
}

export default App;
