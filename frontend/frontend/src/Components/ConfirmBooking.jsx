import React from "react";

const ConfirmBooking = () => {
  return (
    <div className="confirm-booking bg-white p-10 rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold text-center mb-8">
        Confirm Your Booking
      </h2>
      <div className="mb-6">
        <h3 className="text-xl font-semibold">Booking Summary</h3>
        <p>Details of the selected package, dates, and total cost.</p>
      </div>
      <div className="mb-6">
        <h3 className="text-xl font-semibold">Traveler Details</h3>
        <p>Confirm the traveler information.</p>
      </div>
      <div className="mb-6">
        <input type="checkbox" id="terms" />
        <label htmlFor="terms" className="ml-2">
          I accept the Terms and Conditions
        </label>
      </div>
      <button className="bg-blue-500 text-white p-3 rounded-lg">
        Confirm Booking
      </button>
    </div>
  );
};

export default ConfirmBooking;
