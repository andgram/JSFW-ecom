import { useState } from "react";
import "../styles/Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    subject: "",
    email: "",
    body: "",
  });
  const [errors, setErrors] = useState({
    fullName: "",
    subject: "",
    email: "",
    body: "",
  });

  const validate = () => {
    const newErrors = { fullName: "", subject: "", email: "", body: "" };
    let isValid = true;

    if (formData.fullName.trim().length < 3) {
      newErrors.fullName = "Full Name must be at least 3 characters.";
      isValid = false;
    }
    if (formData.subject.trim().length < 3) {
      newErrors.subject = "Subject must be at least 3 characters.";
      isValid = false;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
      isValid = false;
    }
    if (formData.body.trim().length < 3) {
      newErrors.body = "Message must be at least 3 characters.";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log("Form submitted successfully:", formData);
      setFormData({ fullName: "", subject: "", email: "", body: "" });
      alert("Your message has been sent!");
    }
  };

  return (
    <div className="section-padding">
      <div className="contact-container">
        <h1 className="contact-title">Contact Us</h1>
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <label htmlFor="fullName">Full Name</label>
            <input
              type="text"
              id="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className="form-input"
            />
            {errors.fullName && (
              <p className="error-message">{errors.fullName}</p>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="subject">Subject</label>
            <input
              type="text"
              id="subject"
              value={formData.subject}
              onChange={handleChange}
              className="form-input"
            />
            {errors.subject && (
              <p className="error-message">{errors.subject}</p>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              className="form-input"
            />
            {errors.email && <p className="error-message">{errors.email}</p>}
          </div>
          <div className="form-group">
            <label htmlFor="body">Message</label>
            <textarea
              id="body"
              value={formData.body}
              onChange={handleChange}
              className="form-input"
            />
            {errors.body && <p className="error-message">{errors.body}</p>}
          </div>
          <button type="submit" className="submit-button">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
