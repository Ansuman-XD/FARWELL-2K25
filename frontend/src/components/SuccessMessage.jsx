import React from 'react';
import { useNavigate } from 'react-router-dom';
import './SuccessMessage.css';

function SuccessMessage() {
  const navigate = useNavigate();
  const studentData = JSON.parse(sessionStorage.getItem('studentData') || '{}');

  // Go back to scanning
  const handleBackToScan = () => {
    navigate('/verify');
  };

  return (
    <div className="success-container">
      <div className="success-icon">✅</div>
      <h1 className="success-title">Welcome to the Farewell Party!</h1>
      
      <div className="student-info">
        <p className="student-name">Name: {studentData.name}</p>
        <p className="student-roll">Roll Number: {studentData.rollNo}</p>
      </div>
      
      <p className="success-message">
        Your payment has been verified. Enjoy the event!
      </p>
      
      <div className="confetti-animation">
        {/* Placeholder for confetti animation */}
        <span className="confetti">🎉</span>
        <span className="confetti">🎊</span>
        <span className="confetti">✨</span>
        <span className="confetti">🎈</span>
      </div>
      
      <button className="back-button" onClick={handleBackToScan}>
        Scan Another QR Code
      </button>
    </div>
  );
}

export default SuccessMessage;