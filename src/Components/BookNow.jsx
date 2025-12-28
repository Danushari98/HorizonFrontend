import React, { useState } from "react";
import "./BookNow.css";

export default function BookNow() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    destination: "",
    message: ""
  });

  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("http://127.0.0.1:8000/api/bookings/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setSuccessMsg("Booking submitted successfully!");
        setFormData({
          name: "",
          email: "",
          phone: "",
          destination: "",
          message: ""
        });
      } else {
        setSuccessMsg("Error: Failed to submit booking.");
      }
    } catch (error) {
      setSuccessMsg("Server Error!");
    }

    setLoading(false);
  };

  return (
    <div className="book-section" id="booknow">
      <h2>Book Your Trip</h2>
      <p>Fill the form below and our team will contact you shortly.</p>

      {/* SUCCESS POPUP */}
      {successMsg && (
        <div className="popup-box">
          <div className="popup">
            <h3>🎉 Success!</h3>
            <p>{successMsg}</p>
            <button onClick={() => setSuccessMsg("")}>OK</button>
          </div>
        </div>
      )}

      {/* FORM */}
      <form className="book-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Enter Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Enter Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="phone"
          placeholder="Enter Your Phone Number"
          value={formData.phone}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="destination"
          placeholder="Preferred Destination"
          value={formData.destination}
          onChange={handleChange}
          required
        />

        <textarea
          name="message"
          placeholder="Your Message (Optional)"
          rows="4"
          value={formData.message}
          onChange={handleChange}
        ></textarea>

        <button type="submit" className="submit-btn" disabled={loading}>
          {loading ? "Submitting..." : "Submit Booking"}
        </button>
      </form>

      <div className="contact-box">
        <h3>Get In Touch</h3>
        <p>📍 Address: Chennai, Tamil Nadu, India</p>
        <p>📞 Phone: +91 98765 43210</p>
        <p>📧 Email: horizonhike@gmail.com</p>
      </div>
    </div>
  );
}
