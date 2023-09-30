// src/components/Chatbot.tsx
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setStep, setSelectedDate, setSelectedTime, setName, setAge, selectEnrollment } from '../../configs/slices/enrollmentSlice';

const Chatbot: React.FC = () => {
  const dispatch = useDispatch();
  const { step } = useSelector(selectEnrollment);
  const [message, setMessage] = useState('');
  const [inputValue, setInputValue] = useState('');

  const handleNext = () => {
    if (step === 5) {
      dispatch(setStep(6));
    } else {
      dispatch(setStep(step + 1));
    }
    setMessage('');
  };

  const handleInputSubmit = () => {
    switch (step) {
      case 2:
        dispatch(setSelectedDate(inputValue));
        break;
      case 3:
        dispatch(setSelectedTime(inputValue));
        break;
      case 4:
        dispatch(setName(inputValue));
        break;
      case 5:
        dispatch(setAge(inputValue));
        break;
      default:
        break;
    }
    setInputValue('');
    handleNext();
  };

  const renderChatbot = () => {
    switch (step) {
      case 1:
        return (
          <>
            <div className="bot-msg">Hello, Welcome to student info system!</div>
            <div className="user-msg">Got it!</div>
          </>
        );
      case 2:
        return (
          <>
            <div className="bot-msg">Pick a slot!</div>
            <div className="user-msg">15 MAY, MON 11AM</div>
          </>
        );
        case 3:
          return (
            <>
              <div className="bot-msg">Enter your Name</div>
              <div className="user-input">
                <input
                  type="text"
                  placeholder="Your Name"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                />
                <button onClick={handleInputSubmit}>Submit</button>
              </div>
            </>
          );
        case 4:
          return (
            <>
              <div className="bot-msg">Enter your Age</div>
              <div className="user-input">
                <input
                  type="number"
                  placeholder="Your Age"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                />
                <button onClick={handleInputSubmit}>Submit</button>
              </div>
            </>
          );
        case 5:
          return (
            <>
              <div className="bot-msg">Thank you. In 5 seconds, bot will exit</div>
              <div className="countdown">5</div>
            </>
          );
        default:
          return null;
      }
    };
  
    return (
      <div className="p-4">
        <div className="chatbot">
          {renderChatbot()}
        </div>
        {step < 5 && (
          <div className="user-input">
            <input
              type="text"
              placeholder="Your Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <button onClick={handleNext}>Send</button>
          </div>
        )}
      </div>
    );
  };
  
  export default Chatbot;