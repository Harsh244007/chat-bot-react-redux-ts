import { createClientMessage } from "react-chatbot-kit";

export const generateMessage = (date: Date, time: string) => {
  const getDate = date.getDate();
  const getMonth = date.getMonth();
  const getDay = date.getDay();
  const days = ["MON", "TUES", "WEDNES", "THURS", "FRI", "SATUR", "SUN"];
  const months = ["JAN", "FEB", "MAR", "APR", "MAY", "JUNE", "JULY", "AUGUST", "SEP", "OCT", "NOV", "DEC"];
  console.log("important", getDay);

  const formattedStartHour = parseInt(time.split("-")[0]) >= 13 ? parseInt(time.split("-")[0]) - 12 : parseInt(time.split("-")[0]);
  const formattedEndHour = parseInt(time.split("-")[1]) >= 13 ? parseInt(time.split("-")[1]) - 12 : parseInt(time.split("-")[1]);
  const amPm = parseInt(time.split("-")[0]) >= 13 ? "PM" : "AM";

  const message = createClientMessage(
    `${getDate} ${months[getMonth]}, ${getDay === 0 ? days[6] : days[getDay - 1]}DAY ${formattedStartHour} - ${formattedEndHour} ${amPm}`
  );

  return message;
};
