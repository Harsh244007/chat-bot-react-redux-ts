import React from "react";

import "./Options.css";
import { createChatBotMessage, createClientMessage } from "react-chatbot-kit";

const GotItButton = (props) => {
  console.log(props, "props");
  async function handleGotIt() {
    const message = createClientMessage("Got it.");
    props.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
    }));
    const message2 = createChatBotMessage("Pick a slot!", {
      widget: "dateTime",
      delay:1000,
    });
    
    
    await props.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message2],
    }));

    console.log("custom handle");
  }
  const options = [
    {
      text: "Got it",
      handler: handleGotIt,
      id: 1,
    },
  ];

  const buttonsMarkup = options.map((option) => (
    <button key={option.id} onClick={option.handler} className="option-button">
      {option.text}
    </button>
  ));

  return <div className="options-container">{buttonsMarkup}</div>;
};

export default GotItButton;
