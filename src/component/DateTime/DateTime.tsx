import React from "react";
import formatDate from "./formateDate"; 

interface DateItemProps {
  date: Date;
  selectedDate: Date | null;
  handleDateClick: (date: Date) => void;
}

const DateItem: React.FC<DateItemProps> = ({
  date,
  selectedDate,
  handleDateClick,
}) => {
  return (
    <div
      className={`p-2 w-48 border text-black cursor-pointer ${
        date.getDate() === selectedDate?.getDate() &&
        date.getMonth() === selectedDate?.getMonth()
          ? "bg-blue-500 text-white"
          : ""
      }`}
      onClick={() => handleDateClick(date)}
    >
      {formatDate(date)}
    </div>
  );
};

export default DateItem;
