import React from "react";
import { useDispatch } from "react-redux";
import { setAge, setName, setStep } from "../slices/enrollmentSlice";
import { store } from "../store";

const ActionProvider = ({ createChatBotMessage, state, setState, children }) => {
  const dispatch = useDispatch();
  const handleName = () => {
    const message = createChatBotMessage("Please enter your age");
    setState((prev) => ({ ...prev, messages: [...prev.messages, message] }));
  };

  const handleAge = (name) => {
    const message = createChatBotMessage("Please enter your age");
    setState((prev) => ({ ...prev, messages: [...prev.messages, message] }));
    if (name) dispatch(setName(name));
    console.log("parse3", store.getState());
  };

  const handleAgeUpdate = (age) => {
    document.getElementsByClassName("react-chatbot-kit-chat-input-form")[0].style.display = "none";
    if (age) dispatch(setAge(age));

    const message = createChatBotMessage("Thank you. In 5 seconds, bot will exit");
    setState((prev) => ({ ...prev, messages: [...prev.messages, message] }));

    for (let i = 7; i >= 0; i--) {
      setTimeout(async () => {
        const message = createChatBotMessage(`${i - 2}`);
        await setState((prev) => ({
          ...prev,
          messages: [...prev.messages, message],
        }));
        if (i == 2) dispatch(setStep(3));
      }, (8 - i) * 1000);
    }
  };
  return (
    <div>
      {" "}
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: {
            handleName,
            handleAge,
            handleAgeUpdate,
            state,
          },
        });
      })}{" "}
    </div>
  );
};

export default ActionProvider;
