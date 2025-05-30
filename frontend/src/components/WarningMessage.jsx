import React from 'react';
import { useNavigate } from 'react-router-dom';
import './WarningMessage.css';

function WarningMessage() {
  const navigate = useNavigate();
  const studentData = JSON.parse(sessionStorage.getItem('studentData') || '{}');

  // Go back to scanning
  const handleBackToScan = () => {
    navigate('/verify');
  };

  // Go back to registration
  const handleBackToRegister = () => {
    navigate('/');
  };

  return (
    <div className="warning-container">
      <div className="warning-icon">⚠️</div>
      <h1 className="warning-title">Entry Denied</h1>
      
      <div className="student-info">
        <p className="student-name">Name: {studentData.name}</p>
        <p className="student-roll">Roll Number: {studentData.rollNo}</p>
      </div>
      
      <p className="warning-message">
        We could not verify your payment for the farewell party. Please check with the organizers if you believe there's been a mistake.
      </p>
      
      <div className="action-buttons">
        <button className="scan-again-button" onClick={handleBackToScan}>
          Scan Again
        </button>
        <button className="register-button" onClick={handleBackToRegister}>
          Go to Registration
        </button>
      </div>
    </div>
  );
}

export default WarningMessage;