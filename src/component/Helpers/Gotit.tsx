import "./Options.css";
import { createChatBotMessage, createClientMessage } from "react-chatbot-kit";

// @ts-ignore
const GotItButton = (props) => {
  console.log(props, "props");
  async function handleGotIt() {
    // @ts-ignore
    const message = createClientMessage("Got it.");
    // @ts-ignore
    props.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
    }));
    const message2 = createChatBotMessage("Pick a slot!", {
      widget: "dateTime",
      delay:1000,
    });
    
    
// @ts-ignore
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
