import { Routes, Route, Link } from 'react-router-dom';
import './App.css';

// Page Components
const Home = () => (
  <div className="page-card">
    <div className="title-section">
      <span className="hero-emoji">🏠</span>
      <h1>My Internship Portfolio</h1>
    </div>
    <p>Welcome to my multi-page SPA project.</p>
  </div>
);

const Weather = () => (
  <div className="page-card">
    <div className="title-section">
      <span className="hero-emoji">☁️</span>
      <h1>Weather App</h1>
    </div>
    <p>Project completed on 07/03.</p>
  </div>
);

const Mood = () => (
  <div className="page-card">
    <div className="title-section">
      <span className="hero-emoji">😊</span>
      <h1>Mood Tracker</h1>
    </div>
    <p>Project completed on 09/03.</p>
  </div>
);

const Tasks = () => (
  <div className="page-card">
    <div className="title-section">
      <span className="hero-emoji">📝</span>
      <h1>Task Manager</h1>
    </div>
    <p>Project completed on 10/03.</p>
  </div>
);

function App() {
  return (
    <div className="app-container">
      <nav className="navbar">
        <div className="nav-links">
          <Link to="/" className="nav-item">Home</Link>
          <Link to="/weather" className="nav-item">Weather</Link>
          <Link to="/mood" className="nav-item">Mood</Link>
          <Link to="/tasks" className="nav-item">Tasks</Link>
        </div>
      </nav>

      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/weather" element={<Weather />} />
          <Route path="/mood" element={<Mood />} />
          <Route path="/tasks" element={<Tasks />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;