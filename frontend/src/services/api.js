import axios from 'axios';

// API base URL from import.meta.env or default
const API_URL = import.meta.env.VITE_FRONTEND_API_URL || 'http://localhost:5000/api';

// Configure axios with defaults
const apiClient = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Register a new student
export const registerStudent = async (studentData) => {
  try {
    const response = await apiClient.post('/register', studentData);
    return response.data;
  } catch (error) {
    console.error('Registration error:', error);
    throw error;
  }
};

// Verify student's payment status
export const verifyStudent = async (studentData, qrData) => {
  // In a real application, this would call the backend to verify
  // For demonstration purposes, we're doing a direct comparison in the frontend
  try {
    // Option 1: Make an API call to backend to verify (preferred in production)
    // const response = await apiClient.post('/verify', { studentData, qrData });
    // return response.data.verified;
    
    // Option 2: Simple frontend comparison (for demo only)
    // Check if the student's name and roll number match the QR data
    return (
      studentData.name.toLowerCase() === qrData.name.toLowerCase() && 
      studentData.rollNo.toLowerCase() === qrData.rollNo.toLowerCase()
    );
  } catch (error) {
    console.error('Verification error:', error);
    return false;
  }
};

export default apiClient;