import TimeSlotItem from "./TimeSlotItem";

interface TimeSlotGroupProps {
    timeslots: string[];
    selectedTime: string | null;
    handleTimeClick: (time: string) => void;
    title: string;
  }
  
  const TimeSlotGroup: React.FC<TimeSlotGroupProps> = ({
    timeslots,
    selectedTime,
    handleTimeClick,
    title,
  }) => {
    return (
      <>
        <h4 className="space-x-4 mt-4 text-black font-bold font-white font-20">{title}</h4>
        <div className="flex space-x-4 mt-4">
          {timeslots.map((time, index) => (
            <TimeSlotItem
              key={index}
              time={time}
              selectedTime={selectedTime}
              handleTimeClick={handleTimeClick}
            />
          ))}
        </div>
      </>
    );
  };
  
  export default TimeSlotGroup;