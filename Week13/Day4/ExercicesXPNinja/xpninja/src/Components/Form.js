import React, { useState } from "react";

const Input = ({ type, name, value, onChange, isValid }) => (
  <div>
    <input type={type} name={name} value={value} onChange={onChange} />
    {!isValid && <p className="error-message">Invalid {name}</p>}
  </div>
);

const Form = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
  });

  const [errors, setErrors] = useState({
    firstName: false,
    lastName: false,
    phone: false,
    email: false,
  });

  const validateEmail = (email) => {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return emailRegex.test(email);
  };

  const validatePhone = (phone) => {
    const phoneRegex = /^\d{10}$/;
    return phoneRegex.test(phone);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    switch (name) {
      case "firstName":
        setErrors({ ...errors, firstName: value === "" });
        break;
      case "lastName":
        setErrors({ ...errors, lastName: value === "" });
        break;
      case "phone":
        setErrors({ ...errors, phone: !validatePhone(value) });
        break;
      case "email":
        setErrors({ ...errors, email: !validateEmail(value) });
        break;
      default:
        break;
    }
  };

  return (
    <form>
      <label>
        First Name
      <Input
        type="text"
        name="firstName"
        value={formData.firstName}
        onChange={handleInputChange}
        isValid={!errors.firstName}
      />
      </label>
      <label>
        Last Name
      <Input
        type="text"
        name="lastName"
        value={formData.lastName}
        onChange={handleInputChange}
        isValid={!errors.lastName}
      />
      </label>
      <label>
        Phone
      <Input
        type="text"
        name="phone"
        value={formData.phone}
        onChange={handleInputChange}
        isValid={!errors.phone}
      />
        </label>
      <label>
        Email
      <Input
        type="text"
        name="email"
        value={formData.email}
        onChange={handleInputChange}
        isValid={!errors.email}
      />
      </label>
    </form>
  );
};

export default Form;
