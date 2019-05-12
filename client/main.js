import { Template } from "meteor/templating";
import { ReactiveVar } from "meteor/reactive-var";
import { Meteor } from "meteor/meteor";
import "./main.html";
import React from "react";
import ReactDOM from "react-dom";
import App from "../imports/App";
import * as serviceWorker from "./registerServiceWorker";

Meteor.startup(() => {
  ReactDOM.render(<App />, document.getElementById("root"));
});

serviceWorker.unregister();
