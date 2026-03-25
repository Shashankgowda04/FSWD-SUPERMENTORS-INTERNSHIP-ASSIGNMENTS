import { useState } from 'react'
import './App.css'

function App() {
  const [formData, setFormData] = useState({ username: '', email: '', password: '' });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  // Day 10: Handling User Input
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setError(""); // Clear error when typing
    setSuccess(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validation Logic
    if (formData.username.length < 3) return setError("Username must be 3+ characters");
    if (!formData.email.includes("@")) return setError("Please enter a valid email");
    if (formData.password.length < 6) return setError("Password must be 6+ characters");

    setSuccess(true);
    setError("");
  };

  return (
    <div className="form-container">
      <h2>Interactive Form</h2>
      
      {/* Day 11: Conditional Rendering */}
      {success && <div className="success-msg">✅ Submission Successful!</div>}
      {error && <div className="error-msg">❌ {error}</div>}

      <form onSubmit={handleSubmit}>
        <div className="input-field">
          <label>Username</label>
          <input name="username" value={formData.username} onChange={handleChange} />
        </div>
        <div className="input-field">
          <label>Email</label>
          <input name="email" type="email" value={formData.email} onChange={handleChange} />
        </div>
        <div className="input-field">
          <label>Password</label>
          <input name="password" type="password" value={formData.password} onChange={handleChange} />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  )
}

export default App