import { useState } from 'react';
import './App.css';

function App() {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [errors, setErrors] = useState({ email: '', password: '' });

  // Real-time validation logic
  const validate = (name, value) => {
    let errorMsg = '';
    if (name === 'email') {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) errorMsg = 'Please enter a valid email address.';
    } else if (name === 'password') {
      if (value.length < 8) errorMsg = 'Password must be at least 8 characters long.';
    }
    setErrors((prev) => ({ ...prev, [name]: errorMsg }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    validate(name, value);
  };

  // Submission handler that prevents page refresh and URL data leaks
  const handleSubmit = (e) => {
    e.preventDefault(); 
    alert(`Account created successfully for: ${formData.email}`);
  };

  return (
    <div className="app-container">
      <div className="form-card">
        <div className="header-section">
          <span className="form-icon">🔐</span>
          <h1>Smart Signup</h1>
        </div>
        
        <form className="signup-form" onSubmit={handleSubmit}>
          <div className="input-group">
            <label>Email Address</label>
            <input 
              type="email" 
              name="email" 
              placeholder="name@example.com"
              value={formData.email}
              onChange={handleChange}
              className={errors.email ? 'input-error' : ''}
              required
            />
            {errors.email && <span className="error-text">{errors.email}</span>}
          </div>

          <div className="input-group">
            <label>Password</label>
            <input 
              type="password" 
              name="password" 
              placeholder="Min 8 characters"
              value={formData.password}
              onChange={handleChange}
              className={errors.password ? 'input-error' : ''}
              required
            />
            {errors.password && <span className="error-text">{errors.password}</span>}
          </div>

          <button 
            type="submit" 
            className="submit-btn" 
            disabled={errors.email || errors.password || !formData.email || !formData.password}
          >
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;