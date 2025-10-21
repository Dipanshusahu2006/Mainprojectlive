import React from "react";
import '../App.css';
import QRCode from "react-qr-code";

function Qrcode() {
  const Carttotal = localStorage.getItem("Carttotal");
  const amount = Carttotal && !isNaN(Carttotal) && parseFloat(Carttotal) > 0 
    ? parseFloat(Carttotal).toFixed(2) 
    : null;

  const upiId = "8949809081@ibl";
  const name = "Dipanshu Sahu";
  const currency = "INR";

  const qrCodeValue = amount
    ? `upi://pay?pa=${encodeURIComponent(upiId)}&pn=${encodeURIComponent(name)}&am=${encodeURIComponent(amount)}&cu=${encodeURIComponent(currency)}`
    : "";

  return (
    <div className="qr-wrapper">
      <h1 className="qr-title">Scan the QR Code to Complete Your Payment Securely</h1>
        <div className="qr-box">
          <QRCode value={qrCodeValue} size={200} />
          <p className="amount-text">Amount: ₹{amount}</p>
        </div>
    </div>
  );
}

export default Qrcode;
