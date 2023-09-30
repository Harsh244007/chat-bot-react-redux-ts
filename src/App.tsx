import { useDispatch, useSelector } from "react-redux";
import Page1 from "./component/pages/PageOne";
// import Chatbot from "./component/ChatBot/ChatBot";
import Page3 from "./component/pages/PageThree";
import { setChatMessages } from "./configs/slices/enrollmentSlice";
import config from "./configs/chat-configs/configs.tsx";
import MessageParser from "./configs/chat-configs/MessageParser";
import ActionProvider from "./configs/chat-configs/ActionProvider";
interface RootState {
  enrollment: {
    step: number;
  };
}
import Chatbot from "react-chatbot-kit";
import "react-chatbot-kit/build/main.css";
import { useEffect } from "react";

const App = () => {
  const dispatch = useDispatch();
  const step = useSelector((state: RootState) => state.enrollment.step);

  const saveMessages = (messages: unknown[], HTMLString: string) => {
    dispatch(setChatMessages(messages));
    localStorage.setItem("chat_messages", JSON.stringify(messages));
  };
  const loadMessages = () => {
    const messages = JSON.parse(localStorage.getItem("chat_messages")!);
    dispatch(setChatMessages(messages));
    return messages;
  };

  useEffect(() => {
    loadMessages();
  }, []);

  return (
    <div className="p-4 grid h-screen place-items-center">
      {step === 1 && <Page1 />}
      {step === 2 && (
        <Chatbot
          config={config}
          messageParser={MessageParser}
          className="classNamecheck"
          actionProvider={ActionProvider}
          saveMessages={saveMessages}
          messageHistory={loadMessages}
        />
      )}
      {step === 3 && <Page3 />}
    </div>
  );
};

export default App;
