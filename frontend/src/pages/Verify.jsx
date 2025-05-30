import React from 'react';
import QRScanRedirect from '../components/QRScanRedirect';
import { useLocation } from 'react-router-dom';
import './Verify.css';

function Verify() {
  const location = useLocation();
  const studentData = location.state?.studentData || {};

  // Store the student data in sessionStorage for later use
  if (location.state?.studentData) {
    sessionStorage.setItem('studentData', JSON.stringify(studentData));
  }

  return (
    <div className="verify-container">
      <div className="verify-header">
        <h1>Verify Your Entry</h1>
        <p className="verify-instruction">Scan the QR code provided by the gate keeper</p>
      </div>

      <div className="verify-content">
        <div className="student-details">
          <h2>Your Registration Details</h2>
          <p><strong>Name:</strong> {studentData.name || 'Not available'}</p>
          <p><strong>Roll Number:</strong> {studentData.rollNo || 'Not available'}</p>
        </div>

        <div className="qr-scanner-section">
          <QRScanRedirect />
        </div>
      </div>
    </div>
  );
}

export default Verify;