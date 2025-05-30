import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SuccessMessage from '../components/SuccessMessage';
import WarningMessage from '../components/WarningMessage';
import { verifyStudent } from '../services/api';
import './Result.css';

function Result() {
  const [verified, setVerified] = useState(false);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const checkVerification = async () => {
      try {
        // Get student data from session storage
        const studentData = JSON.parse(sessionStorage.getItem('studentData') || '{}');
        
        // Get scanned QR data from session storage
        const scannedData = JSON.parse(sessionStorage.getItem('scannedData') || '{}');
        
        // Check if we have all required data
        if (!studentData.name || !studentData.rollNo || !scannedData) {
          setVerified(false);
          setLoading(false);
          return;
        }
        
        // Verify student by comparing the student data with the scanned QR data
        // This is a simple frontend verification. In a real app, this verification should be done on the backend
        const isVerified = await verifyStudent(studentData, scannedData);
        setVerified(isVerified);
        setLoading(false);
      } catch (error) {
        console.error('Verification error:', error);
        setVerified(false);
        setLoading(false);
      }
    };

    checkVerification();
  }, []);

  // If student data is not available, redirect to register page
  useEffect(() => {
    const studentData = sessionStorage.getItem('studentData');
    if (!studentData) {
      navigate('/');
    }
  }, [navigate]);

  if (loading) {
    return (
      <div className="result-loading">
        <div className="loading-spinner"></div>
        <p>Verifying your entry...</p>
      </div>
    );
  }

  return (
    <div className="result-container">
      {verified ? <SuccessMessage /> : <WarningMessage />}
    </div>
  );
}

export default Result;