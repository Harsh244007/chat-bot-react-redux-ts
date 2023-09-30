import { createChatBotMessage } from "react-chatbot-kit";
import GotItButton from "../../component/Helpers/Gotit";
import DateTimePicker from "../../component/DateTime/DateTimePicker";

const intialOption = {
  delay: 0,
  widget: "gotItCta",
};

const config = {
  initialMessages: [
    createChatBotMessage("Hello Welcome to student info system!", intialOption),
  ],
  state: {
    gotIt: "",
  },
  widgets: [
    {
      widgetName: "gotItCta",
      widgetFunc: (props) => <GotItButton {...props} />,
      delay: 2000,
    },
    {
      widgetName: "dateTime",
      widgetFunc: (props) => <DateTimePicker {...props} />,
    },
  ],
  botName: "Student Info System",
  customStyles: {
    botMessageBox: { backgroundColor: "#376B7E" },
    chatButton: { backgroundColor: "#5ccc9d" },
  },
};

export default config;
