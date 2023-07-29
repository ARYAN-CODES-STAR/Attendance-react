import React, { useState } from 'react';

const StudentCard = ({ student, onToggleAttendance }) => {
  const [isPresent, setIsPresent] = useState(false);

  const handleAttendanceChange = () => {
    const updatedAttendance = !isPresent;
    setIsPresent(updatedAttendance);
    onToggleAttendance(student.id, updatedAttendance);
  };

  return (
    <div>
      <h3>{student.name}</h3>
      <p>Roll No: {student.rollNo}</p>
      <p>Attendance: {isPresent ? 'Present' : 'Absent'}</p>
      <button onClick={handleAttendanceChange}>
        {isPresent ? 'Absent' : 'Present'}
      </button>
    </div>
  );
};

export default StudentCard;
