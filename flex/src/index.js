import React from "react";
import ReactDOM from "react-dom";
import "regenerator-runtime/runtime";
import * as Flex from "@twilio/flex-ui";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

const mountNode = document.getElementById("root");
console.log(process.env);
window.onload = () => {
  const configuration = {
    sso: {
      accountSid: process.env.REACT_APP_APPID
    }
  };
  console.log(configuration);
  Flex.progress(mountNode)
    .provideLoginInfo(configuration, mountNode)
    .then(() => Flex.Manager.create(configuration))
    .then(manager => renderApp(manager))
    .catch(error => handleError(error));
};

function renderApp(manager) {
  ReactDOM.render(<App manager={manager} />, mountNode);
}

function handleError(error) {
  console.error("Failed to initialize Flex", error);
}

registerServiceWorker();
