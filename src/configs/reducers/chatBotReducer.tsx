type ChatbotAction = {
  type: string;
  payload: unknown;
};

const initialState = {
  messages: [],
};

const chatbotReducer = (state = initialState, action: ChatbotAction) => {
  switch (action.type) {
    case "ADD_MESSAGE":
      return {
        ...state,
        messages: [...state.messages, action.payload],
      };

    case "DELETE_MESSAGE":
      return {
        ...state,
        messages: [],
      };
    case "CLEAR_MESSAGES":
      // Handle the action to clear all messages
      return {
        ...state,
        messages: [],
      };
    default:
      return state;
  }
};

export default chatbotReducer;
