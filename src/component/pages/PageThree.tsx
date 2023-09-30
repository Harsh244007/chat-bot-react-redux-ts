import React from 'react';
import { useSelector } from 'react-redux';
import { selectEnrollment } from '../../configs/slices/enrollmentSlice';

const Page3: React.FC = () => {
  const { name, age } = useSelector(selectEnrollment);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-semibold">Your name {name} aged {age} has been added to student system.</h1>
      <p>You may now exit.</p>
    </div>
  );
};

export default Page3;
