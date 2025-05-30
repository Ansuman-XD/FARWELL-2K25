import React, { useState, useEffect } from 'react';
import { Html5Qrcode } from 'html5-qrcode';
import { useNavigate } from 'react-router-dom';
import './QRScanRedirect.css';

function QRScanRedirect() {
  const [scanning, setScanning] = useState(false);
  const navigate = useNavigate();
  let html5QrCode;

  const startScanner = () => {
    setScanning(true);
    
    html5QrCode = new Html5Qrcode("qr-reader");
    
    const qrCodeSuccessCallback = (decodedText) => {
      try {
        const qrData = JSON.parse(decodedText);
        
        // Stop scanning
        html5QrCode.stop().catch(error => console.error("Failed to stop scanner:", error));
        
        // Store the scanned data in sessionStorage
        sessionStorage.setItem('scannedData', JSON.stringify(qrData));
        
        // Redirect to verification result page
        navigate("/result");
      } catch (error) {
        console.error("Invalid QR code data:", error);
        alert("Invalid QR code. Please try again.");
      }
    };
    
    const config = { fps: 10, qrbox: { width: 250, height: 250 } };
    
    html5QrCode.start(
      { facingMode: "environment" }, 
      config, 
      qrCodeSuccessCallback
    ).catch(error => {
      console.error("Failed to start scanner:", error);
      setScanning(false);
    });
  };
  
  const stopScanner = () => {
    if (html5QrCode) {
      html5QrCode.stop().then(() => {
        setScanning(false);
      }).catch(error => {
        console.error("Failed to stop scanner:", error);
      });
    }
  };
  
  useEffect(() => {
    return () => {
      if (html5QrCode) {
        html5QrCode.stop().catch(error => console.error("Failed to stop scanner on unmount:", error));
      }
    };
  }, []);

  return (
    <div className="qr-scan-container">
      <div id="qr-reader"></div>
      
      {!scanning ? (
        <button className="scan-button" onClick={startScanner}>
          <span className="scan-icon">📷</span> Scan QR Code
        </button>
      ) : (
        <button className="stop-button" onClick={stopScanner}>
          Stop Scanning
        </button>
      )}
      
      <div className="scan-instructions">
        <p>Point your camera at the QR code provided by the gate keeper</p>
      </div>
    </div>
  );
}

export default QRScanRedirect;