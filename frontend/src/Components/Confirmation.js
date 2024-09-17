import React from 'react';
import '../styles/ConfirmationPage.css'; // Add styles for confirmation

const ConfirmationPage = () => {
  return (
    <div className="confirmation-page">
      <h1>Order Confirmed!</h1>
      <p>Thank you for your purchase. Your order has been successfully placed!</p>
      <p>We'll send you an email with your order details shortly.</p>
    </div>
  );
};

export default ConfirmationPage;
