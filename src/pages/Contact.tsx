import { useState } from "react";

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

    if (formData.fullName.length < 3)
      newErrors.fullName = "Full Name must be at least 3 characters.";
    if (formData.subject.length < 3)
      newErrors.subject = "Subject must be at least 3 characters.";
    if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Please enter a valid email address.";
    if (formData.body.length < 3)
      newErrors.body = "Body must be at least 3 characters.";

    setErrors(newErrors);
    return !Object.values(newErrors).some((err) => err);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      console.log(formData);
      setFormData({ fullName: "", subject: "", email: "", body: "" });
      alert("Your message has been sent!");
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl mb-4">Contact Us</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="fullName">Full Name</label>
          <input
            type="text"
            id="fullName"
            value={formData.fullName}
            onChange={(e) =>
              setFormData({ ...formData, fullName: e.target.value })
            }
            className="border p-2 w-full"
          />
          {errors.fullName && <p className="text-red-600">{errors.fullName}</p>}
        </div>
        <div>
          <label htmlFor="subject">Subject</label>
          <input
            type="text"
            id="subject"
            value={formData.subject}
            onChange={(e) =>
              setFormData({ ...formData, subject: e.target.value })
            }
            className="border p-2 w-full"
          />
          {errors.subject && <p className="text-red-600">{errors.subject}</p>}
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            className="border p-2 w-full"
          />
          {errors.email && <p className="text-red-600">{errors.email}</p>}
        </div>
        <div>
          <label htmlFor="body">Message</label>
          <textarea
            id="body"
            value={formData.body}
            onChange={(e) => setFormData({ ...formData, body: e.target.value })}
            className="border p-2 w-full"
          />
          {errors.body && <p className="text-red-600">{errors.body}</p>}
        </div>
        <button type="submit" className="bg-blue-600 text-white p-2 mt-4">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
