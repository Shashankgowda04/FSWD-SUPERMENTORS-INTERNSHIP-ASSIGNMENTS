import { useState } from 'react';
import './App.css';

function App() {
  // Initial state is "Neutral"
  const [mood, setMood] = useState("Neutral");

  // Data object to define how the UI changes
  const moodSettings = {
    Happy: { emoji: "😊", color: "#FFD700", message: "Keep that smile going!" },
    Sad: { emoji: "😢", color: "#4682B4", message: "It's okay to feel down sometimes." },
    Energetic: { emoji: "⚡", color: "#FF4500", message: "Let's get things done!" },
    Relaxed: { emoji: "🧘", color: "#98FB98", message: "Take a deep breath." },
    Neutral: { emoji: "😐", color: "#D3D3D3", message: "Just a normal day." }
  };

  return (
    <div 
      className="mood-container" 
      style={{ backgroundColor: moodSettings[mood].color }}
    >
      <div className="mood-card">
        <h1>How are you feeling?</h1>
        <div className="display-emoji">{moodSettings[mood].emoji}</div>
        <h2 className="mood-text">{mood}</h2>
        <p className="mood-quote">"{moodSettings[mood].message}"</p>

        <div className="button-group">
          {Object.keys(moodSettings).map((m) => (
            <button 
              key={m} 
              onClick={() => setMood(m)}
              className={mood === m ? "active" : ""}
            >
              {m}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;