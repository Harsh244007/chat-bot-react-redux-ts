import React from "react";

interface TimeSlotItemProps {
  time: string;
  selectedTime: string | null;
  handleTimeClick: (time: string) => void;
}

const TimeSlotItem: React.FC<TimeSlotItemProps> = ({
  time,
  selectedTime,
  handleTimeClick,
}) => {
  const [startHour, endHour] = time.split("-").map(Number);

  const formattedStartHour = startHour >= 13 ? startHour - 12 : startHour;
  const formattedEndHour = endHour >= 13 ? endHour - 12 : endHour;

  return (
    <div
      className={`p-2 border text-black cursor-pointer ${
        time === selectedTime ? "bg-blue-500 text-white" : ""
      }`}
      onClick={() => handleTimeClick(time)}
    >
      {formattedStartHour} - {formattedEndHour} {endHour >= 13 ? "PM" : "AM"}
    </div>
  );
};

export default TimeSlotItem;
