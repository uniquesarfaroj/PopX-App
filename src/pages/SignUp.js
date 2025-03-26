import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/SignUp.css';

const SignUp = () => {
  const navigate = useNavigate();
  const [formData, setFormdata] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
    password: "",
    companyName: "",
    isAgency: true
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormdata({
      ...formData,
      [name]: type === 'radio' ? value === 'yes' : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //  account creation
    navigate('/accountsettings');
  };

  return (
    <div className="signup-container">
      <h2>Create your PopX account</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>
            Full Name <span className="required">*</span>
          </label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="Marry Doe"
            required
          />
        </div>
        <div className="form-group">
          <label>
            Phone number <span className="required">*</span>
          </label>
          <input
            type="tel"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            placeholder="Marry Doe"
            required
          />
        </div>
        <div className="form-group">
          <label>
            Email address <span className="required">*</span>
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Marry Doe"
            required
          />
        </div>
        <div className="form-group">
          <label>
            Password <span className="required">*</span>
          </label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Marry Doe"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="companyName">Company name</label>
          <input
            id="companyName"
            type="text"
            name="companyName"
            value={formData.companyName}
            onChange={handleChange}
            placeholder="Marry Doe"
          />
        </div>
        <div className="form-group">
          <label>
            Are you an Agency? <span className="required">*</span>
          </label>
          <div className="radio-group">
            <label>
              <input
                type="radio"
                name="isAgency"
                value="yes"
                checked={formData.isAgency}
                onChange={handleChange}
              />
              Yes
            </label>
            <label>
              <input
                type="radio"
                name="isAgency"
                value="no"
                checked={!formData.isAgency}
                onChange={handleChange}
              />
              No
            </label>
          </div>
        </div>
        <button type="submit" className="create-account-button">Create Account</button>
      </form>
    </div>
  );
};

export default SignUp;