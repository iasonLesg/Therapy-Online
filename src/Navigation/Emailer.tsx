import React, { useState } from "react";
import emailjs from "emailjs-com";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const EmailForm: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  // Get available dates (next 15 days, excluding weekends)
  const getAvailableDates = (): Date[] => {
    const today = new Date();
    let dates: Date[] = [];
    for (let i = 1; i <= 15; i++) {
      let nextDay = new Date();
      nextDay.setDate(today.getDate() + i);
      if (nextDay.getDay() !== 0 && nextDay.getDay() !== 6) {
        dates.push(nextDay);
      }
    }
    return dates;
  };

  const availableDates = getAvailableDates();

  const handleSendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedDate) {
      alert("Please select a valid date.");
      return;
    }

    emailjs.send(
      "service_fug2km7",   // Replace with your actual EmailJS Service ID
      "template_ihsj43l",  // Replace with your actual EmailJS Template ID
      {
        email,
        message,
        selectedDate: selectedDate.toDateString(),
      },
      "o2ea7OKh8Zbyh3TfD"  // Replace with your actual EmailJS Public Key
    )
    .then(() => alert("Email sent successfully!"))
    .catch((err) => alert("Failed to send email: " + err.text));
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow-lg rounded-lg">

      <div>
      <h2 className="text-2xl font-semibold text-center mb-4">Κλείσε Online Συνεδρία μέσω email</h2>
      <form onSubmit={handleSendEmail} className="space-y-4">
        {/* Email Input */}
        Email:
        <br/>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Recipient's Email"
          required
          className="w-full p-2 border rounded"
        />

        {/* Date Picker */}
        <br/>
        Διαθεσιμότητα: 
        <br/>
        <DatePicker
          selected={selectedDate}
          onChange={(date) => setSelectedDate(date)}
          filterDate={(date) =>
            availableDates.some((d) => d.toDateString() === date.toDateString())
          }
          minDate={availableDates[0]}
          maxDate={availableDates[availableDates.length - 1]}
          placeholderText="Select a date"
          className="w-full p-2 border rounded"
        />

        {/* Message Input */}
        <br/>Μήνυμα:
        <br/> 
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Enter your message"
          required
          className="w-full p-2 border rounded"
        />

        {/* Submit Button */}
        <a
          href="#"
          onClick={(e) => handleSendEmail(e)}
          className="block w-full text-center bg-teal-200 text-white py-2 rounded hover:bg-teal-300"
        >
          Κλείσε Συνεδρία
        </a>
      </form>
      </div>
    </div>
  );
};


export default EmailForm;