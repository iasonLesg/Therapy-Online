import React from "react";

const PhoneΝ: React.FC = () => {
    const phoneNumber = "+306988007095"; // Replace with actual phone number
  
    return (
      <div className="max-w-md mx-auto p-6 bg-white shadow-lg rounded-lg text-center">
        <h2 className="text-2xl font-semibold mb-4">Τηλέφωνο</h2>
  
       
  
        {/* Phone Call Button */}
        <a
          href={`tel:${phoneNumber}`}
          className="block w-full text-center bg-teal-200 text-white py-2 rounded hover:bg-teal-300"
        >
          Κάλεσε {phoneNumber}
        </a>
       
      </div>
    );
  };
  
  export default PhoneΝ;