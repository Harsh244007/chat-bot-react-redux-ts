import React, { useEffect } from "react";
import { store } from "../store";

const MessageParser = ({ children, actions }) => {
  
  const parse = (message) => {

    if (isNaN(message)) actions.handleAge(message);
    else if (!isNaN(message)) actions.handleAgeUpdate(message);
  };
  return (
    <div>
      {" "}
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, { parse: parse, actions: {} });
      })}{" "}
    </div>
  );
};
export default MessageParser;
