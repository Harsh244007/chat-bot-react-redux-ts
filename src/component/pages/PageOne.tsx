import React from 'react';
import { useDispatch } from 'react-redux';
import { setStep } from '../../configs/slices/enrollmentSlice';

const Page1: React.FC = () => {
  const dispatch = useDispatch();

  const handleEnrollClick = () => {
    dispatch(setStep(2));
  };
  return (
    <div className="p-4">
    <h1 className="text-2xl font-semibold">Enter into Student Info System</h1>
    <button
      className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      onClick={handleEnrollClick}
    >
      Enroll Now!
    </button>
  </div>
  );
};

export default Page1;
