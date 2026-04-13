import { useState } from 'react';
import { loginUser, signupUser } from "./api/authApi";
import './App.css';

function App() {
  const [isLogin, setIsLogin] = useState(false); // Start on Signup to create a new user
  const [formData, setFormData] = useState({ name: '', email: '', password: '', role: 'admin' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isLogin) {
        const { data } = await loginUser({ email: formData.email, password: formData.password });
        alert(`Login Successful! Welcome, ${data.role}`);
        console.log("Token:", data.token);
      } else {
        await signupUser(formData);
        alert("Signup Successful! Now switch to Login.");
        setIsLogin(true);
      }
    } catch (err) {
      alert(err.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <div className="App">
      <h1>{isLogin ? "Login" : "Register New User"}</h1>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', width: '250px', margin: 'auto' }}>
        {!isLogin && (
          <input type="text" placeholder="Name" onChange={(e) => setFormData({...formData, name: e.target.value})} />
        )}
        <input type="email" placeholder="Email" onChange={(e) => setFormData({...formData, email: e.target.value})} />
        <input type="password" placeholder="Password" onChange={(e) => setFormData({...formData, password: e.target.value})} />
        <button type="submit" style={{ marginTop: '10px' }}>{isLogin ? "Login" : "Signup"}</button>
      </form>
      <button onClick={() => setIsLogin(!isLogin)} style={{ marginTop: '20px', background: 'none', border: 'none', color: 'blue', cursor: 'pointer' }}>
        {isLogin ? "Switch to Signup" : "Switch to Login"}
      </button>
    </div>
  );
}

export default App;