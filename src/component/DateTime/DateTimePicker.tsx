import React, { useCallback, useMemo, useState } from "react";
import DateItem from "./DateTime";
import TimeSlotGroup from "./TimeSlotGroup";
import { generateMessage } from "./HelperFn";
import { createChatBotMessage } from "react-chatbot-kit";
import { useDispatch } from "react-redux";
import { setAppointment } from "../../configs/slices/enrollmentSlice";

const DateTimePicker: React.FC = (props) => {
  const today = new Date();
  const dispatch = useDispatch();

  const [selectedDate, setSelectedDate] = useState<Date | null>(today);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);

  const next7Days: Date[] = useMemo(() => {
    return Array.from({ length: 7 }, (_, index) => {
      const date = new Date(today);
      date.setDate(today.getDate() + index);
      return date;
    });
  }, [today]);

  const handleDateClick = useCallback(
    (date: Date) => {
      setSelectedDate(date);
      console.log("date Selected", date, selectedDate);
    },
    [selectedDate]
  );

  const handleTimeClick = useCallback(
    (time: string) => {
      setSelectedTime(time);
      if (selectedDate) {
        const message = generateMessage(selectedDate, time);
        dispatch(setAppointment(time));
        updateMessages(message);
      }

      const message2 = createChatBotMessage(`Enter your Name`);
      updateMessages(message2);
      document.getElementsByClassName("react-chatbot-kit-chat-input-form")[0].style.display = "flex";
    },
    [selectedDate]
  );
  const updateMessages = (message) => {
    props.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
    }));
  };

  return (
    <div className="container w-full overflow-hidden mx-auto p-4">
      <div className="flex space-x-4 overflow-x-auto pb-4 pr-4">
        {next7Days.map((date, index) => (
          <DateItem key={index} date={date} selectedDate={selectedDate} handleDateClick={handleDateClick} />
        ))}
      </div>
      <TimeSlotGroup timeslots={["9-10", "10-11", "11-12"]} selectedTime={selectedTime} handleTimeClick={handleTimeClick} title="Morning" />
      <TimeSlotGroup timeslots={["13-14", "14-15", "15-16"]} selectedTime={selectedTime} handleTimeClick={handleTimeClick} title="Afternoon" />
      <TimeSlotGroup timeslots={["16-17", "17-18", "18-19"]} selectedTime={selectedTime} handleTimeClick={handleTimeClick} title="Evening" />
    </div>
  );
};
export default DateTimePicker;
